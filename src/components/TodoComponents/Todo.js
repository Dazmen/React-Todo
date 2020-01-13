import React from 'react';

const ToDo = (props) => {

    return(
        <div 
        className={props.item.completed ? "completed" : ""}
        onClick={() => props.toggleComplete(props.item.id)}>
            <p>{props.item.task}</p>
        </div>
    );
};


export default ToDo