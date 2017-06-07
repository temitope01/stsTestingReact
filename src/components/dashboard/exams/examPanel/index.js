import React from 'react';
import './examPanel.css';
import ExamInfo from './examInfo';
import Timer from './timer';
import Progress from './progressBar';
import Pagination from './pagination';
import {Pager} from 'react-bootstrap';
import ExamDisplay from './examDisplay';
import _ from 'lodash';

class ExamPanel extends React.Component {

    constructor(props) {
        super(props);

        const time = this.props.duration;
        const examInformation = this.props.examInformation;
        const examQuestion = this.shuffleQuestion(examInformation.question,
            examInformation.amountOfQuestions);
        this.state ={
            examName: examInformation.examName,
            time,
            questions: examQuestion,
            count:0,
            total:  examInformation.amountOfQuestions
        };
    }

    shuffleQuestion =(questions, amount) => {
        questions = JSON.parse(questions);

        let questionCollections =  Object.keys(questions); // Get keys in Exam Object
        questionCollections.splice(questionCollections.length - 3, 3); // Splice the last 3 elements because they are feedback, failure, success
        let shuffledKeys = _.shuffle(questionCollections);
        let questionsShuffled =shuffledKeys.filter((data, index)=> {
            return (index < amount);
        });

        return questionsShuffled.map(key => {
            let shuffledOptions = _.shuffle(Object.keys(questions[key])); // Shuffle the options in the questions

            let shuffled = shuffledOptions.filter(data => {
                return /(option)/.test(data) || /(answer)/.test(data)
            }); // Retrieve all options and answers from shuffled date

            let shuffledOptionAnswer = shuffled.map((dataItem)=> {
               return  questions[key][dataItem]; // We join the shiffled options from the questions
            });

            return {
                'question': key,
                'options': shuffledOptionAnswer
            };

        })
    };

    handlePagination = (e, element)=> {
        this.setState({count: (e - 1)})
    };

    handlePrevious = ()=> {
        let presentCount = this.state.count;
        presentCount = presentCount -1;
        this.setState({count: presentCount});
    };

    handleNext =() => {
        let presentCount = this.state.count;
        presentCount = presentCount + 1;
        this.setState({count: presentCount});
    };

    handleClick =(e) => {
        debugger;
    };

    render() {
        return(
            <div className="container-exam-panel">
                <div className="container-padding-panel">
                    <div className="row">
                        <div className="col-md-3">
                            <ExamInfo name={this.state.examName} present={this.state.count} total={this.state.total} />
                        </div>
                        <div className="col-md-6">
                            <Timer time={this.state.time}/>
                        </div>
                        <div className="col-md-3">
                            <Progress percentage={20} color="danger"/>
                        </div>

                    </div>
                    <div className="table-container-panel">
                        <ExamDisplay click={this.handleClick} questions={this.state.questions[this.state.count]} />
                    </div>
                    <div className="bottom-panel">
                        <div className="row">
                            <div className="col-md-2">
                                <Pager>
                                    <Pager.Item onClick={this.handlePrevious} disabled={(this.state.count <= 0)} previous href="#">&larr; Previous</Pager.Item>
                                </Pager>
                            </div>
                            <div className="col-md-8 center">
                                <Pagination active={(this.state.count + 1)} select={this.handlePagination} items={parseInt(this.state.total)} size="small" />
                            </div>
                            <div className="col-md-2">
                                <Pager >
                                    <Pager.Item onClick={this.handleNext} disabled={(this.state.count >= (this.state.total - 1))} next href="#">&rarr; Next</Pager.Item>
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