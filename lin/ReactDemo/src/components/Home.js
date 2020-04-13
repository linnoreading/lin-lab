import React from 'react';
import axios from 'axios';
import './../assets/css/Home.css';
import Clock from './Clock';
import O365 from './O365';
import Toggle from './Toggle';
import Img from './Img';
import { Button, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom'

const style = { background: '#0092ff', padding: '20px 0', 'color': 'white', display: 'grid' }
//组件
let list = [
  {
    name: 'Home',
    address: '/Home'
  },
  {
    name: 'Clock',
    address: '/Clock'
  },
  {
    name: 'Img',
    address: '/Img'
  },
  {
    name: 'O365',
    address: '/O365'
  },
  {
    name: 'Toggle Test',
    address: '/Toggle'
  },

]
//非组件，跳转到其他页面
let listExt = [
  {
    name: 'PLQ',
    address: 'https://linnoreading.github.io/lin-lab/mei/plq.html'
  },
  {
    name: '文件大小转换',
    address: 'https://linnoreading.github.io/lin-lab/lin/FileSizeConvert.html'
  },
  {
    name: '习惯养成',
    address: 'https://forms.office.com/Pages/ResponsePage.aspx?id=hDeadqz_G0CnI0IVHEhQmVMlUbt_fvNOivxAazbvsF5UQ1JYMVZaSTFQR0hKNldWM0wzNlZHUUUwWS4u'
  },
  {
    name: '习惯-Result页面',
    address: 'https://forms.office.com/Pages/DesignPage.aspx?origin=OfficeDotCom&lang=zh-CN#Analysis=true&FormId=hDeadqz_G0CnI0IVHEhQmVMlUbt_fvNOivxAazbvsF5UQ1JYMVZaSTFQR0hKNldWM0wzNlZHUUUwWS4u'
  },
  {
    name: 'Xu',
    address: 'https://linnoreading.github.io/lin-lab/xu/'
  },
  {
    name: 'Xu2',
    address: 'https://linnoreading.github.io/lin-lab/xu2/'
  }
]

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Tools',
      element1: <div><input value='123' /><img src='https://loremflickr.com/200/200' alt='test' /></div>,
      isToggleOn: true
    };
  }
  //跳转到新页面
  linkToExtnalUrl = (url) => {

    window.open(url);
  }


  render() {
    var name2 = 'test';
    //定义一个数组，将数据存入数组
    const element = [];
    list.forEach((item) => {
      element.push(
        <Col key={item.name} className="gutter-row" span="8">
          <Link style={style} to={item.address}>{item.name}</Link>
        </Col>
      );
    });

    const elementExt = [];
    listExt.forEach((item) => {
      elementExt.push(
        <Col key={item.name} className="gutter-row" span="8">
          <div style={style} onClick={() => this.linkToExtnalUrl(item.address)}>{item.name}</div>
        </Col>
      );
    });




    return (
      <div className="App">
        <h1>{this.state.name}</h1>
        <h3>组件</h3>
        <Row gutter={[16, 24]}>
          {element}
        </Row>

        <h3>External Link</h3>
        <Row gutter={[16, 24]}>
          {elementExt}
        </Row>

      </div >
    );
  }
}

export default Home;


