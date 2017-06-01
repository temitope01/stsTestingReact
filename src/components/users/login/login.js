import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';
import Links from '../../common/link';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../../actions/userActions';
import './login.css';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {'password': '', 'username': ''},
            message: ''
        };
    }

    getValidationState() {

        const passwordLength = this.state.user.password.length;
        const usernameLength = this.state.user.username.length;

        if(passwordLength > 10 && usernameLength > 10) {
            return 'success';
        }

        if(passwordLength > 5 && usernameLength > 5) {
            return 'warning';
        }

        if(passwordLength > 0 && usernameLength > 0) {
            return 'error';
        }

    }

    handleChange = (e) => {
        let user = this.state.user;
        user[e.target.name] = e.target.value;
        this.setState({user: user});
    };

    submitForm = (e) => {
        e.preventDefault();
        this.props.action.createUser(this.state.user)
            .then(()=> {
                console.log('success');
            }).catch(err=> {
                console.log(err);
        })
    };

    render() {
        return(
            <div className="jumbotron vertical-center auto-box divider">

                <div className="container">
                        <form onSubmit={this.submitForm}>
                            <FormGroup
                                controlId="formBasicText"
                                validationState={this.getValidationState()}
                            >
                            <ControlLabel>Sign In- Start a session</ControlLabel>
                                <div className="push-up">
                                    <FormControl
                                    type="text"
                                    name="username"
                                    required="true"
                                    value={this.state.username}
                                    placeholder="Enter username"
                                    onChange={this.handleChange}
                                    className="align-center beautify-text"
                                    />
                                </div>
                                <div className="push-up">
                                <FormControl
                                    type="password"
                                    name="password"
                                    required="true"
                                    className="align-center beautify-text"
                                    value={this.state.password}
                                    placeholder="Enter password"
                                    onChange={this.handleChange}
                                />
                                </div>
                                <div className="align-center push-up">
                                <Button type="submit" bsStyle="success" bsSize="large">Login</Button>
                                </div>
                            <FormControl.Feedback />
                            <HelpBlock>{this.state.message}</HelpBlock>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Links name="Register new membership" target="/register"/>
                                    </div>
                                    <div className="col-md-6">
                                        <Links name="Forgot password?" target=""/>
                                    </div>
                                </div>
                        </FormGroup>

                        </form>
                </div>
            </div>
        )
    }

}

function mapDispatchToProps(dispatch){
    return {
        action: bindActionCreators(userActions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(Login);