import React from 'react';
import PropTypes from 'prop-types';

const ExamDisplay =({questions, click, answers, submit, submitClick} )=> {

    return (
        <div>
            <button onClick={submitClick} className={submit ? 'show': 'hide'}>Submit</button>
        <table>
          <tbody>
            <tr>
                <td> {questions.question} </td>
            </tr>
            {questions.options.map((key, index)=> {
                return <tr id={key} onClick={click} key={`${index}${questions.question}`}><td><label id={key} className="options"> <input id={key} checked={(answers.answer == key)} readOnly="true" name="starks" type='radio'/> <span id={key} >{key}</span></label> </td></tr>
            })}
          </tbody>
        </table>
        </div>
    )
};

ExamDisplay.PropTypes = {
    questions: PropTypes.object.isRequired,
    click: PropTypes.func.isRequired,
    answers: PropTypes.object,
    submit: PropTypes.boolean,
    submitClick: PropTypes.func.isRequired
};



export default ExamDisplay;