import React from 'react';
import '../assets/css/Clock.css'

//时钟
//待办：设计样式
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }
    //组件挂载时创建计时器
    componentDidMount() {
        this.timerID = setInterval(() => {
            this.tick();
        }, 1000);
    }
    //组件卸载时清除计时器
    componentWillUnmount() {
        clearInterval();
    }
    //初始化当前时间
    tick() {
        this.setState({
            date: new Date()
        });
    }
    //阻止默认行为--跳转
    handlerClick = (e) => {
        e.preventDefault();
        console.log("阻止跳转.");
        this.setState({
            day: Date()
        });
    }

    render() {
        return (
            <div className='clockC'>
                <h2>时钟{this.state.day}</h2>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
                <a href='https://www.baidu.com' onClick={this.handlerClick}>显示日期</a>
            </div>
        );
    }
}


export default Clock;