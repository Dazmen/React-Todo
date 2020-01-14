import React from 'react';
import ToDo from './Todo';
import styled from 'styled-components';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const ToDoList = (props) => {

    return(
        <ToDoCont>
            {props.todos.map(item => (
                <ToDo
                key={item.id} 
                toggleComplete={props.toggleComplete}
                item={item}/>
            ))}
        </ToDoCont>
    );
};

export default ToDoList

const ToDoCont = styled.div`
    width: 65%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;