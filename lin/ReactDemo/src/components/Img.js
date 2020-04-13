import React from 'react';
import axios from 'axios';
import { Button, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom'
import { resolveOnChange } from 'antd/lib/input/Input';

const style = { background: '#0092ff', padding: '20px 0', 'color': 'white', display: 'grid' }

class Img extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Tools',
            element1: <div><input value='123' /><img src='https://loremflickr.com/200/200' alt='test' /></div>,
            isToggleOn: true
        };
    }

    // getImg = () => {
    //     let imgJson = 'https://linnoreading.github.io/lin-lab/xu2/images.json';//'../assets/json/images.json';
    //     axios.get(imgJson).then((response) => {
    //         //console.log(response);
    //         list = response.data;
    //     })
    // }

    render() {
        var name2 = 'test';
        //定义一个数组，将数据存入数组
        let elements = [];
        let imgJson = 'https://linnoreading.github.io/lin-lab/xu2/images.json';//'../assets/json/images.json';
        let imgPath = "./images/fengxu/";
        let main = ""
        axios.get(imgJson).then((response) => {
            let list = response.data;
            console.log(list);
            list.Array.forEach(item => {
                elements.push(
                    <Row gutter={[16, 24]}>
                        <Col className="gutter-row" span="8">
                            <Link style={style} to='tet'>{item.name}</Link>
                        </Col>
                    </Row>
                )
            });
            // list.map(data => {
            //     elements.push(`

            //         ${data.days.map(day => `
            //             <div class="days">${data.year + "." + day.day + "，" + day.title}</div>
            //             <Row gutter={[16, 24]}>


            //                 ${day.images.map(img => `
            //                 <Col className="gutter-row" span="8">
            //              <Link style={style} to=${imgPath + img}>{img}</Link>
            //         </Col>

            //                 `).join("")}
            //                 </Row>

            //           `).join("")}
            //       `
            //     )
            // }).join("");
            console.log(elements)
            // list.forEach((item) => {
            //     elements.push(
            //         <Col className="gutter-row" span="8">
            //             <Link style={style} to={item.address}>{item.name}</Link>
            //         </Col>
            //     );
            // });
        })

        return (
            <div className="App">
                ddd
                {elements}
                {/* <h1>{this.state.name}</h1>
                <Row gutter={[16, 24]}>
                    {element}
                </Row> */}
            </div >
        );
    }
}

export default Img;


