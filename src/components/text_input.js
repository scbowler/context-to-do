import React, { Component } from 'react';

class TextInput extends Component {
    constructor(props){
        super(props);

        this.state = { active: false };
    }

    componentDidUpdate(prevProps){
        if (this.input !== document.activeElement && prevProps.value && !this.props.value){
            this.setState({ active: false });
        }
    }

    handleBlur(){
        if(!this.props.value){
            this.setState({ active: false });
        }
    }

    handleFocus(){
        this.setState({ active: true });
    }

    render(){
        const { onChange, className, label, type, value } = this.props;
        const { active } = this.state;

        return (
            <div className={`input-field ${className}`}>
                <input
                    ref={ e => this.input = e }
                    onChange={onChange}
                    type={type || 'text'}
                    value={value}
                    onFocus={this.handleFocus.bind(this)}
                    onBlur={this.handleBlur.bind(this)}
                />
                <label className={ active ? 'active' : '' } >{label}</label>
            </div>
        )
    }
}

export default TextInput;
