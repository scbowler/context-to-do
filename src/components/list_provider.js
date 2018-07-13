import React, { Component, createContext } from 'react';

export const ToDoContext = createContext();

class ListProvider extends Component {
    constructor(props){
        super(props);

        this.state = {
            item: '',
            list: [],
            adding: false,
            deleting: null,
            clearInput: this.clearInput.bind(this),
            inputChange: this.inputChange.bind(this),
            add: this.addItem.bind(this),
            delete: this.deleteItem.bind(this)
        }
    }
    addItem(e) {
        e.preventDefault();

        const { item, list } = this.state;

        if (item) {
            this.setState({
                item: '',
                list: [item, ...list],
                adding: true
            });
        }

        setTimeout(() => {
            this.setState({ adding: false })
        }, 500);
    }

    clearInput(){
        this.setState({ item: '' });
    }

    deleteItem(index){
        const newList = this.state.list.slice();
        newList.splice(index, 1);

        this.setState({
            deleting: index
        });

        setTimeout(() => {
            this.setState({ 
                deleting: null,
                list: newList
            })
        }, 500);
    }

    inputChange({target}){
        
        this.setState({
            item: target.value
        })
    }

    render(){
        return (
            <ToDoContext.Provider value={this.state}>
                {this.props.children}
            </ToDoContext.Provider>
        );
    }
}

export default ListProvider;
