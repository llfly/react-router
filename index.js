import React from 'react';
import ReactDOM,{render} from 'react-dom';
//import {Router,Route,hashHistory,IndexRoute,Redirect} from 'react-router';
import {Router,Route,browserHistory,IndexRoute,Redirect} from 'react-router';
import App from './containers/App';
import Contact from './containers/Contact';
import About from './containers/About';
import Home from './containers/Home';

//const router = (
//    <Router history={hashHistory}>
//        <Route path="/" components={App} />
//        <Route path="/Contact"></Route>
//    </Router>
//)


//hashHistory

//const router = (
//    <Router history= {hashHistory}>
//        <Route path="/" components={App}>
//            <IndexRoute component={Home}/>
//            <Route path="contact" components={Contact}/>
//            <Route path="about/:message" components={About}/>
//            <Route path="about/:message/:more" components={About}/>
//            <Redirect from="about" to="about/react/route"/>
//        </Route>
//    </Router>
//)

const router = (
    <Router history= {browserHistory}>
        <Route path="/" components={App}>
            <IndexRoute component={Home}/>
            <Route path="contact" components={Contact}/>
            <Route path="about/:message" components={About}/>
            <Route path="about/:message/:more" components={About}/>
            <Redirect from="about" to="about/react/route"/>
        </Route>
    </Router>
)



render(router,document.getElementById('app'));