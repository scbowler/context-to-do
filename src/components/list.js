import React, { Fragment } from 'react';
import Item from './item';
import { ToDoContext } from './list_provider';

export default props => {
    function renderList(context){
        const listItems = context.list.map((item, index) => {
            const className = context.adding && !index ? 'adding' : context.deleting === index ? 'deleting' : '';
            return <Item complete={context.toggleComplete.bind(this, index)} delete={context.delete.bind(this, index)} className={className} key={index} item={item} />;
        });

        return (
            <Fragment>
                {
                    context.item
                        ? <li className="collection-item">{context.item}</li>
                        : null
                }
                { listItems }
            </Fragment>
        );
    }
    return (
        <ToDoContext.Consumer>
            { context => (
                <ul className="collection">
                    { context.list.length || context.item
                        ?  renderList(context)
                        : <li className="collection-item center grey-text">No To Do Items</li>
                    }
                </ul>
            )}
        </ToDoContext.Consumer>
    )
}
