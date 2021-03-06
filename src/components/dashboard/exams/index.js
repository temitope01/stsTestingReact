import React from 'react';
import './exams.css';
import { FormControl, Modal, ModalBody, Button } from 'react-bootstrap';
import Table from '../../common/table';
import _ from 'lodash';
import Links from '../../common/link';
import {bindActionCreators} from 'redux';
import * as examActions from '../../../actions/examActions';
import {connect} from 'react-redux';
let data = {};

class Exams extends  React.Component {

    constructor(props) {
        super(props);
        const head = [{title: 'SN'}, {title: 'Subject'},
            {title: 'Start Time'}, {title: 'Candidates'},
            {title: 'Duration'}];
        const scheduledExams = this.formatData(this.props.scheduledExams);

        data = scheduledExams;
        this.state = {
            value: '',
            head,
            scheduledExams,
            show: false,
            match: this.props.match
        }
    }

    formatData = (data) => {
        let tableRow = [];

        data.forEach((item, index)=> {
            let itemArray = [];
            itemArray.push(++index);
            itemArray.push(item['examName']);
            itemArray.push(item['scheduleDateTime']);
            itemArray.push(item['time']);
            itemArray.push(item['registeredCandidates']);
            tableRow.push({'data': itemArray});
        });

        return tableRow;
    };

    tableClick = (exam)=> {
        let that = this;
        this.props.actions.currentExam(exam).then(()=> {
            that.showModal();
        });
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
                                <Links onClick={this.close} style="left btn btn-default " name="Proceed" target={`${this.state.match.path}/current#`}/>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>

            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return{
        actions: bindActionCreators(examActions, dispatch)
    }
}


export default connect(null, mapDispatchToProps)(Exams);