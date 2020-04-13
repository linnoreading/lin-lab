import React from 'react';
import { Button } from 'antd';

class ToggleTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Tools',
            element1: <div><input value='123' /><img src='https://loremflickr.com/200/200' alt='test' /></div>,
            isToggleOn: true
        };
    }
    //toggle 测试，注意确保回调函数正确绑定了this
    //https://react.docschina.org/docs/handling-events.html
    toggleTest = () => {
        console.log(this)
        this.setState({
            isToggleOn: !this.state.isToggleOn
        })
    }

    render() {
        return (
            <Button type='primary' onClick={this.toggleTest} >{this.state.isToggleOn ? 'English' : '中文'}</Button>
        )
    }
}

export default ToggleTest;

