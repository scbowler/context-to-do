import React, { Component } from 'react';
import { ToDoContext } from './list_provider';
import TextInput from './text_input';
import Button from './button';

class AddItem extends Component {
    renderForm(context){
        const { add, inputChange, item, clearInput } = context;

        return (
            <form onSubmit={add} className="row">
                <TextInput label="New Item" value={item} onChange={inputChange} className="col s6 offset-s2"/>
                <div className="form-buttons col s1">
                    <Button icon="check" color="green darken-1"/>
                </div>
                <div className="form-buttons col s1">
                    <Button onClick={clearInput} type="button" icon="clear" color="red darken-1" />
                </div>
            </form>
        );
    }
    render(){
        return (
            <ToDoContext.Consumer>
                {this.renderForm}
            </ToDoContext.Consumer>
        )
    }
}

export default AddItem;
