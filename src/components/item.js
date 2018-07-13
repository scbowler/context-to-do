import React from 'react';
import Button from './button';

export default props => (
    <li className={`collection-item row ${props.className}`}>
        <div className="col s11">
            {props.text}
        </div>
        <div className="col s1 right-align">
            <Button color="red darken-1" icon="delete" onClick={props.delete}/>
        </div>
    </li>
);
