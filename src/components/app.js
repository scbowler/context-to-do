import 'materialize-css/dist/css/materialize.min.css';
import '../assets/css/app.css';
import React from 'react';
import ListProvider from './list_provider';
import AddItem from './add_item';
import List from './list';

const App = () => (
    <div className="container">
        <h1 className="center">To Do List</h1>
        <ListProvider>
            <AddItem/>
            <List/>
        </ListProvider>
    </div>
);

export default App;
