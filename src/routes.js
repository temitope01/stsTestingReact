import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import App from './components/App';
import Login from './components/users/login/login';
import SignUp from './components/users/signup/signup';
import Dashboard from './components/dashboard/home';

export default (
    <Router>
        <switch>
            <Route exact path="/" component={App}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={SignUp} />
            <Route path="/dashboard" component={Dashboard} />
        </switch>
    </Router>
)

