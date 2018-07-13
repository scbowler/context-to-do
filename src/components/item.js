import React from 'react';
import Button from './button';

export default props => (
    <li onClick={props.complete} className={`list-item collection-item row ${props.className} ${props.item.complete ? 'complete' : ''}`}>
        <div className="col s11">
            {props.item.text}
        </div>
        <div className="col s1 right-align">
            <Button color="red darken-1" icon="delete" onClick={props.delete}/>
        </div>
    </li>
);
