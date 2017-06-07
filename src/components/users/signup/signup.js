import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';
import Links from '../../common/link';
import './signup.css';

class SignUp extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            message: ''
        }
    }

    getValidationState =() => {

    };

    handleChange = ()=> {

    };

    submitForm =(e) => {
      e.preventDefault();
    };

    render(){
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
                                    <Links name="Login" target="/login"/>
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

export default SignUp;