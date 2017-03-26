import React,{Component} from 'react';
import {Link} from 'react-router';

export default class App extends Component{
    render(){
        return <div>
            <h1>About us,{this.props.params.message},{this.props.params.more}</h1>
        </div>
    }
}