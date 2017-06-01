/**
 * Created by jolaadeadewale on 17/02/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Links = ({name, target, icon}) => {

    return (
        <Link to={target}>
            { icon ? <i className={icon}/>   : null }
            <span>{name}</span>
        </Link>
    )
};

Links.PropTypes = {
    name: React.PropTypes.string.isRequired,
    target: React.PropTypes.string.isRequired,
    icon: React.PropTypes.string
};

export default Links;