import React,{Component} from 'react';
import {Link,IndexLink,browserHistory} from 'react-router';
import Style from './index.css';
import NavLink from '../NavLink';

const style = {
    color:'red',
    fontSize:'22px'
}

class App extends Component{

    handleSubmit(e){
        e.preventDefault();//阻止 form 默认提交

        const userName = e.target.elements[0].value;
        const repo = e.target.elements[1].value;

        //const path = `about/${userName}/${repo}`;
        const path = `/about/${userName}/${repo}`;

        //browserHistory.push(path);
        this.context.router.push(path);
    }

    render(){
        return <div>
            <h1>Hello,react</h1>
            <ul>
                <li>
                    {/*<Link to="/" activeClassName="active">首页</Link>*/}
                    <IndexLink to="/" activeClassName="active">首页</IndexLink>
                </li>
                <li>
                    <NavLink url="contact" linkName="联系我们"/>
                </li>
                <li>
                    <Link to="/about/asd" activeStyle={style}>关于</Link>
                </li>
                <li>
                    <form action="" onSubmit={this.handleSubmit.bind(this)}>
                        <input type="text" placeholder="user name"/>
                        <input type="text" placeholder="repo"/>
                        <button type="submit"> go </button>
                        <button onClick={()=>browserHistory.goBack()}> go back </button>
                    </form>
                </li>
            </ul>
            {
                this.props.children
            }
        </div>
    }
}

App.contextTypes = {
    router : React.PropTypes.object
}



export default App;