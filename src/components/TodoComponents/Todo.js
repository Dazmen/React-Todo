import React from 'react';
import styled from 'styled-components';


const ToDo = (props) => {

    return(
        <TaskCont 
        className={props.item.completed ? "completed" : ""}
        onClick={() => props.toggleComplete(props.item.id)}>
            <P>{props.item.task}</P>
        </TaskCont>
    );
};


export default ToDo

const P = styled.p`
    text-align: center;
`;
const TaskCont = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 10px 0;
`;