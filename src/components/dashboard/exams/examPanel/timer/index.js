import React from 'react';
import './timer.css';
import PropTypes from 'prop-types';

const Timer =({hour, minute, seconds})=> {
    return(
        <div className="timer">
            <span>{hour}</span>
            <span>:</span>
            <span>{minute}</span>
            <span>:</span>
            <span>{seconds}</span>
        </div>
    )

};

Timer.PropTypes = {
      hour: PropTypes.string.isRequired,
      minute: PropTypes.string.isRequired,
      seconds:  PropTypes.string.isRequired,
};

export default Timer;