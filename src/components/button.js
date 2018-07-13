import React, { Component } from 'react';

class Button extends Component {
    handleClick(e){
        e.stopPropagation();

        const { onClick } = this.props;
        if(typeof onClick === 'function'){
            onClick.apply(this, arguments);
        }
    }

    render(){
        const { type, icon, color, className } = this.props;

        return (
            <button onClick={this.handleClick.bind(this)} type={type || 'submit'} className={`btn btn-floating ${className || ''} ${color || ''}`}>
                <i className="material-icons">{icon}</i>
            </button>
        )
    }
}

export default Button;
