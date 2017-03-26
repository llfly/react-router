import React,{Component} from 'react';


export default class Contact extends Component{

    componentDidMount(){
        this.context.router.setRouteLeaveHook(this.props.route,this.leaveHook)
    }

    leaveHook(nextLocation){
        return 'you want leave?'
    }

    render(){
        return <div><h1>Contact Me</h1></div>
    }
}

Contact.contextTypes = {
    router:React.PropTypes.object
}