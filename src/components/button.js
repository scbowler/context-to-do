import React from 'react';

export default props => {
    const { type, icon, color, className, onClick } = props;

    return (
        <button onClick={onClick} type={type || 'submit'} className={`btn btn-floating ${className || ''} ${color || ''}`}>
            <i className="material-icons">{icon}</i>
        </button>
    )
}