import React from 'react';
import PropTypes from 'prop-types';
import './table.css';

const Table =({head, body, click})=> {
    return(
    <div>
        <table>
            <thead>
            <tr>
                {head.map((item, index)=> {
                    return <th key={index}> {item.title} </th>
                })}
            </tr>
            </thead>
            <tbody>

            {body.map((item, number)=> {

                return <tr onClick={()=> click(item.data[1])}  key={`${number}keys`}>
                        {item.data.map((data, ind)=> {
                            return <td key={`${ind}key`}> {data} </td>
                        })}
                       </tr>
            })}
            </tbody>

        </table>
    </div>
    )
};

Table.PropTypes = {
    head: React.PropTypes.array.isRequired,
    body: React.PropTypes.array.isRequired,
    click: React.PropTypes.func.isRequired
};

export default Table;