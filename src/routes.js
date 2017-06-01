import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import App from './components/App';
import Login from './components/users/login/login';
import SignUp from './components/users/signup/signup';

export default (
    <Router>
        <div>
        <Route exact path="/" component={App}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={SignUp} />
        </div>
    </Router>
)