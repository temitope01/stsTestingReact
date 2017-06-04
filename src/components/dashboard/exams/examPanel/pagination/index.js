import React from 'react';
import {Pagination} from 'react-bootstrap';
import PropTypes from 'prop-types';

const Paginate = ({active, select, items, size})=> {
    return(
        <Pagination
            bsSize={size}
            items={items}
            activePage={active}
            onSelect={select} />
    )
};

Paginate.propTypes = {
    active: PropTypes.number.isRequired,
    select: PropTypes.func.isRequired,
    items: PropTypes.number.isRequired,
    size: PropTypes.string.isRequired
};

export default Paginate;