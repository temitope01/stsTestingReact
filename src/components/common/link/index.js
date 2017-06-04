/**
 * Created by jolaadeadewale on 17/02/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Links = ({name, target, icon, style}) => {

    return (
        <Link className={style} to={target}>
            { icon ? <i className={icon}/>   : null }
            <span>{name}</span>
        </Link>
    )
};

Links.propTypes = {
    name: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
    icon: PropTypes.string,
    style: PropTypes.string
};

export default Links;
