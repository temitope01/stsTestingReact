import React from 'react';
import './exams.css';
import { FormControl } from 'react-bootstrap';

class Exams extends  React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    handleChange = (e)=> {
        debugger;
    }

    render() {
        return (
            <div className="container-exam">
                <div className="container-padding">
                    <div>
                        Practice
                    </div>
                    <div className="table-container">
                        <div className="row">
                            <div className="col-md-6">

                            </div>
                            <div className="col-md-6">
                                <div>
                                    <FormControl
                                        type="text"
                                        value={this.state.value}
                                        placeholder="Search"
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div>


                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default Exams;