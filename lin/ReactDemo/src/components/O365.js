import React from 'react';
import Config1 from '../assets/script/Config';
import qs from 'qs';
import { Button, Input, PageHeader, Tag, Select, Form } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import FormItem from 'antd/lib/form/FormItem';

const { TextArea } = Input;
const { Option } = Select;
const Config = Config1.tanent_M365x012679_test20200413;


class O365 extends React.Component {
    constructor(props) {
        super(props);
        if (!localStorage.getItem('access_token')) {
            //this.props.history.push('/');
            //不存在token，跳转登录
            this.getToken();
        }
    }

    getToken = () => {
        let data = {
            'client_id': Config.client_id,
            'response_type': 'code',
            "redirect_uri": Config.redirect_uri,
            "response_mode": "query",
            "scope": "user.read",
            "state": 12345
        }
        //console.log(data);
        let strData = qs.stringify(data);
        console.log(data);
        let url = "https://login.microsoftonline.com/" + Config.aad + "/oauth2/v2.0/authorize?" + strData;
        //debugger;
        window.location.href = url;
    }
    request = (api, type) => {
        let code = localStorage.getItem('access_token');
        if (!code) {
            alert("请登录。");
        }
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
                url: api,
                method: type,
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
    onTypeChange = () => {

    }

    render() {
        let requestType = 'Get';


        let api = '';

        return (
            <div>
                <PageHeader onBack={() => window.history.back()} title='Tanent' subTitle={Config.tanentName} />
                <Button onClick={this.getToken} type='primary'>Get O365 Token</Button><br />
                <Tag color='blue'>access_token</Tag>
                <TextArea rows={5} value={localStorage.getItem('access_token')} />
                <Form>
                    <FormItem>
                        <TextArea row={4} id='request' />
                        <Select placeholder="Select a option and change input text above"
                            defaultValue='Get'
                            onChange={this.onTypeChange}
                            allowClear>
                            <Option value='Get'>Get</Option>
                            <Option value='Post'>Post</Option>
                            <Option value='Delete'>Delete</Option>
                        </Select>
                        <TextArea placeholder='接口地址' row={4} id='para' />
                        <TextArea placeholder='参数' row={4} id='para' />
                        <Button onClick={this.request()} type='primary'>Request</Button>
                    </FormItem>
                </Form>

            </div>
        );
    }
}

export default O365;