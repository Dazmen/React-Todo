import React from 'react';

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
            <form onSubmit={this.submitHandler}>
                <input 
                type='text'
                name='taskInput'
                value={this.state.task}
                onChange={this.changeHandler}
                />
                <button>Add a Task!</button>
                <button onClick={this.props.removeCompleted}>Clear Completed</button>
            </form>
        )
    }
}

