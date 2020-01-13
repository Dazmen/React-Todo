import React from 'react';

const ToDo = (props) => {

    return(
        <div onClick={props.toggleComplete}>
            <p>{props.item.task}</p>
        </div>
    );
};


export default ToDo