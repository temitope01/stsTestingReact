import React from 'react';
import './examPanel.css';
import ExamInfo from './examInfo';
import Timer from './timer';
import Progress from './progressBar';
import Pagination from './pagination';
import {Pager} from 'react-bootstrap';
import ExamDisplay from './examDisplay';
import _ from 'lodash';
let examAnswers = [];

class ExamPanel extends React.Component {

    constructor(props) {
        super(props);

        const time = this.props.duration;
        const examInformation = this.props.examInformation;
        const examQuestion = this.shuffleQuestion(examInformation.question,
            examInformation.amountOfQuestions);
        examAnswers = [...examQuestion];

        this.state ={
            examName: examInformation.examName,
            time,
            questions: examQuestion,
            count:0,
            total:  examInformation.amountOfQuestions,
            examAnswers,
            percent: 0,
            color: 'danger',
            minute: 0,
            hour: 0,
            seconds: 0,
            submit: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    setTime = (time) => {
        let minute = 0;
        let hour = 0;

        let timer = new Number(time);
        if (timer > 60) {
            minute = 325 % 60;

            hour = 325 / 60;

        } else {
            minute = time;
            hour = 0;
        }

        this.setState({minute});
        this.setState({hour});
        this.setState({seconds: 59});
    };


    componentDidMount = () => {
        this.setTime(this.state.time);
        this.countdown = setInterval(this.timer, 1000);
    };

    componentWillUnMount = () => {
        clearInterval(this.countdown);
    };

    timer = () => {
        let minute = this.state.minute;
        let hour = this.state.hour;
        let seconds = this.state.seconds;

        if((seconds == 0) || (seconds == 59)) {
            if (minute == 0 && hour == 0) {
                // end exam
                clearInterval(this.countdown);
            }
            else{
                this.substractMinute(minute, hour, seconds);
            }

        } else{
            this.substractMinute(minute, hour, seconds);
        }
    };

    substractMinute = (minute, hour, seconds) => {
        if(seconds == 0) {
            seconds = 59;
        } else{
            seconds = (seconds - 1);
        }

        if(minute == 0){
            // If minute is 0, we want to subtract hour
            if(hour > 0){
                hour = (hour - 1);
            }
            minute = 59;
        }
        else {
            if(seconds == 59) {
                minute = (minute - 1);
                (minute < 10) ? minute = `0${minute}` : '';
            }
        }

        // If minute less than 10, we want to output with leading zeros

        (seconds < 10) ? seconds = `0${seconds}`: '';
        this.setState({minute, hour, seconds});
    };

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
        this.setState({count: (e - 1)});
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
        if(presentCount == (this.state.examAnswers.length - 1)) {
            this.setState({submit: true});
        }
    };

    submitQuestion = () => {

    };

    markQuestions = () => {

    };

    displayReport = () => {

    }

    handleClick =(e) => {
        examAnswers[(this.state.count)].answer = e.target.id;
        this.setState({examAnswers: examAnswers});
        let progressCounter = this.state.examAnswers.filter(data => {
            return data.answer;
        });

        const percentage = ((progressCounter.length * 100) / examAnswers.length);
        this.updateProgressPercentage(percentage);
    };

    updateProgressPercentage =(percent) => {
        this.setState({percent});
        this.updateProgressColor(percent);
    };

    updateProgressColor = (percent) => {

        if(percent > 30) {
            this.setState({color: 'warning'})
        }

        if(percent > 40) {
            this.setState({color: 'info'})
        }

        if(percent > 50) {
            this.setState({color: ''})
        }

        if(percent > 70) {
            this.setState({color: 'success'})
        }

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
                            <Timer hour={this.state.hour} minute={this.state.minute} seconds={this.state.seconds} time={this.state.time}/>
                        </div>
                        <div className="col-md-3">
                            <Progress percentage={this.state.percent} color={this.state.color}/>
                        </div>

                    </div>
                    <div className="table-container-panel">
                        <ExamDisplay click={this.handleClick} submit={this.state.submit} answers={this.state.examAnswers[this.state.count]} questions={this.state.questions[this.state.count]} />
                    </div>
                    <div className="bottom-panel">
                        <div className="row">
                            <div className="col-md-2">
                                <Pager>
                                    <Pager.Item onClick={this.handlePrevious} disabled={(this.state.count <= 0)} previous href="#">&larr; Previous</Pager.Item>
                                </Pager>
                            </div>
                            <div className="col-md-8 center">
                                <Pagination active={(this.state.count + 1)}  maxButtons={20} select={this.handlePagination} items={parseInt(this.state.total)} size="small" />
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