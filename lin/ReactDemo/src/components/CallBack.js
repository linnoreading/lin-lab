import React from 'react';
import { withRouter } from 'react-router-dom';
import common from '../assets/script/Common';
import Config1 from '../assets/script/Config';
import qs from 'qs';
import axios from 'axios';


const Config = Config1.tanent_M365x012679_test20200413;

class CallBack extends React.Component {
    constructor(props) {
        super(props);
    }
    //渲染前获取token
    async componentWillMount() {
        let code = common.getUrlParmByName('code');
        console.log('test01');
        let result = await this.getAuthToken(code);
        console.log(result)
        let refresh_token = result.data.refresh_token;
        let expires_in = result.data.expires_in;
        let token = result.data.access_token;
        localStorage.setItem('access_token', token);
        localStorage.setItem('refresh_token', refresh_token);
        localStorage.setItem('expires_in', expires_in);
        this.props.history.push("O365");
        // tokenResult.then((result) => {
        //     console.log(result)
        //     let refresh_token = result.data.refresh_token;
        //     let expires_in = result.data.expires_in;
        //     let token = result.data.access_token;
        //     localStorage.setItem('access_token', token);
        //     localStorage.setItem('refresh_token', refresh_token);
        //     localStorage.setItem('expires_in', expires_in);
        //     this.props.history.push("/");
        // }).catch((err) => {
        //     console.log(err);
        // })

    }
    getAuthToken = (code) => {
        console.log(code);
        return new Promise((resolve, reject) => {
            let data = {
                client_id: Config.client_id,
                client_secret: Config.client_secret,
                grant_type: 'authorization_code',
                scope: 'user.read',
                code: code,
                redirect_uri: Config.redirect_uri
            };
            let opt = {
                url: "https://cors-anywhere.herokuapp.com/https://login.microsoftonline.com/" + Config.aad + "/oauth2/token",
                method: 'Post',
                headers: {
                    "content-type": "application/x-www-form-urlencoded",
                },
                data: qs.stringify(data)
            };

            axios(opt).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            })

        });
    }

    render() {
        return (
            <div id='callback'>callback</div>
        );
    }
}


export default withRouter(CallBack);