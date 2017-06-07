import React from 'react';
import PropTypes from 'prop-types';

const ExamInfo =({name, present, total})=> {
    return(
     <div>
         <div>{name}</div>
         <div><span>{++present} </span> out of <span>{total}</span> <span>Questions</span></div>
     </div>
    )
};
ExamInfo.PropTypes = {
    name: PropTypes.string.isRequired,
    present: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
}

export default ExamInfo;