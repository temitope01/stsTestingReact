import React from 'react';
import './exams.css';
import { FormControl, Modal, ModalBody, Button } from 'react-bootstrap';
import Table from '../../common/table';
import _ from 'lodash';
import Links from '../../common/link';
let data = {};

class Exams extends  React.Component {

    constructor(props) {
        super(props);
        const head = [{title: 'SN'}, {title: 'Subject'}, {title: 'Date'}, {title: 'Candidates'}];
        const scheduledExams = this.props.scheduledExams;
        debugger;
        data = scheduledExams;
        this.state = {
            value: '',
            head,
            scheduledExams,
            show: false,
            match: this.props.match
        }
    }

    tableClick = (e)=> {
        this.showModal();
    };

    showModal =(e)=> {
        this.setState({show: true})
    };

    close =(e)=> {

    };

    hideModal =()=> {
        this.setState({show: false});
    };

    handleChange = (e)=> {
        if(e.target.value.length === 0){
            this.setState({scheduledExams: data});
        }else {
            this.setState({scheduledExams: _.find(data, e.target.value)});
        }
        this.setState({value: e.target.value});
    };

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
                        <Table click={this.tableClick} head={this.state.head} body={this.state.scheduledExams} />

                        </div>
                        <Modal
                            {...this.props}
                            show={this.state.show}
                            onHide={this.hideModal}
                            dialogClassName="custom-modal"
                        >
                            <Modal.Header closeButton>
                            </Modal.Header>
                            <ModalBody>
                                <h4>Wrapped Text</h4>
                            </ModalBody>
                            <Modal.Footer>
                                <Button onClick={this.close}>Cancel</Button>
                                <Links style="left btn btn-default " name="Proceed" target={`${this.state.match.path}/current#`}/>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>

            </div>
        )
    }
}

export default Exams;