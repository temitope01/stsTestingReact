import React from 'react';
import './examPanel.css';
import ExamInfo from './examInfo';
import Timer from './timer';
import Progress from './progressBar';
import Pagination from './pagination';
import {Pager} from 'react-bootstrap';

class ExamPanel extends React.Component {

    constructor(props) {
        super(props);

        const questions = [{'question': 'hello world', 'option': 'Yes'}]
    }


    handlePagination = (e, test)=> {
        debugger;
    };

    render() {
        return(
            <div className="container-exam-panel">
                <div className="container-padding-panel">
                    <div className="row">
                        <div className="col-md-3">
                            <ExamInfo/>
                        </div>
                        <div className="col-md-6">
                            <Timer/>
                        </div>
                        <div className="col-md-3">
                            <Progress percentage={20} color="danger"/>
                        </div>

                    </div>
                    <div className="table-container-panel">
                        hello
                    </div>
                    <div className="bottom-panel">
                        <div className="row">
                            <div className="col-md-2">
                                <Pager>
                                    <Pager.Item previous href="#">&larr; Previous</Pager.Item>
                                </Pager>
                            </div>
                            <div className="col-md-8 center">
                                <Pagination active={1} select={this.handlePagination} items={10} size="small" />
                            </div>
                            <div className="col-md-2">
                                <Pager>
                                    <Pager.Item next href="#">&larr; Next</Pager.Item>
                                </Pager>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default ExamPanel;