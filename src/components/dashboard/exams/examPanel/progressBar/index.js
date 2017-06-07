import React from 'react';
import {ProgressBar} from 'react-bootstrap';
import PropTypes from 'prop-types';

const Progress = ({percentage, color})=> {
    return(
        <ProgressBar now={percentage} bsStyle={color} />
    )

};

Progress.propTypes = {
    percentage: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired
};

export default Progress;