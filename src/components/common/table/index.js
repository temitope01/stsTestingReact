import React from 'react';
import PropTypes from 'prop-types';

const Table =({head})=> {
    <div>
        <table>
            <tr>
                {head.map((item)=> {

                })}
            </tr>

        </table>
    </div>

};


Table.PropTypes = {
    head: React.PropTypes.array.isRequired
};

export default Table;