import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import VConsole from 'vconsole';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import O365 from './components/O365';
import CallBack from './components/CallBack';
import Clock from './components/Clock';
import Img from './components/Img';

var vConsole = new VConsole;

ReactDOM.render(
    //<App />, document.getElementById('root')
    //<CallBack />, document.getElementById('root')
    <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/callback' component={CallBack} />
        <Route exact path='/Clock' component={Clock} />
        <Route exact path='/Home' component={Home} />
        <Route exact path='/Img' component={Img} />
        <Route exact path='/O365' component={O365} />
    </Router>, document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
