import React from 'react';
import ToDoForm from './components/TodoComponents/TodoForm';
import ToDoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';
import styled from 'styled-components';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id){
          return {
            ...item,
            completed: !item.completed
          }; 
        } else {
          return item;
        };
      })
    });
  };

  addToDo = itemName => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({todos: [...this.state.todos, newItem]});
  };

  removeCompleted = (e) => {
    e.preventDefault();
    this.setState({todos: this.state.todos.filter(item => {
      if(item.completed === false){
        return item
      };
    })})
  }

  render() {
    return (
      <div>
        <H2>Welcome to your Todo App!</H2>
        <ToDoForm 
        addToDo={this.addToDo}
        removeCompleted={this.removeCompleted}
        />
        <ToDoList 
        todos={this.state.todos}
        toggleComplete={this.toggleComplete}
      />
      </div>
    );
  }
}

export default App;

const H2 = styled.h2`
  text-align: center;
`;
