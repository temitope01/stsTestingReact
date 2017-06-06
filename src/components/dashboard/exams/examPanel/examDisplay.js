import React from 'react';
import PropTypes from 'prop-types';

const ExamDisplay =({questions, click} )=> {

    return (
        <table>
          <tbody>
            <tr>
                <td> {questions.question} </td>
            </tr>
            {questions.options.map((key, index)=> {
                return <tr id={key} onClick={click} key={index}><td><label id={key} className="options"> <input id={key} name="starks" type='radio'/> <span id={key} >{key}</span></label> </td></tr>
            })}
          </tbody>
        </table>
    )
};

ExamDisplay.PropTypes = {
    questions: PropTypes.object.isRequired,
    click: PropTypes.func.isRequired
};



export default ExamDisplay;