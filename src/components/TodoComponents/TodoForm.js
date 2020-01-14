import React from 'react';
import styled from 'styled-components';


export default class ToDoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            task: ''
        }
    };
    changeHandler = (e) => {
        this.setState({
            task: e.target.value
        });
    };
    submitHandler = (e) => {
        e.preventDefault();
        this.props.addToDo(this.state.task)
    }

    render() {
        return(
            <Form onSubmit={this.submitHandler}>
                <Input 
                type='text'
                name='taskInput'
                value={this.state.task}
                onChange={this.changeHandler}
                placeholder='What do you need to do?'
                />
                <BtnCont>
                    <button>Add a Task!</button>
                    <button onClick={this.props.removeCompleted}>Clear Completed</button>
                </BtnCont>
            </Form>
        )
    }
}

const Form = styled.form`
    width: 65%;
    margin: 0 auto;
`;
const Input = styled.input`
    width: 100%;
    height: 30px;
    vertical-align: middle;
`;
const BtnCont = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 20px;
`;