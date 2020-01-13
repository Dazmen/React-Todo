import React from 'react';
import ToDo from './Todo';
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const ToDoList = (props) => {

    return(
        <div>
            {props.todos.map(item => (
                <ToDo
                key={item.id} 
                toggleComplete={props.toggleComplete}
                item={item}/>
            ))}
        </div>
    );
};

export default ToDoList