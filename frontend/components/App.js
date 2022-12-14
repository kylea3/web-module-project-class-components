import React from 'react';
import TodoList from './TodoList'
import Form from './Form'


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoInput: '',
      todos: [{
          task: 'Bake Cookies',
          id: 12124234234,
          completed: true
        },
      {
        task: 'Eat Cookies',
      id: 12323123234,
      completed: false
    }]
    }
  }

  onClear = () => {
    this.setState({
    ...this.state,
    todos: this.state.todos.filter(todo => {
      return (todo.completed === false);
    })
    })
  }

  onSubmit = (task) => {
    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    })
  }

  markComplete = (clickedId) => {
    this.setState({
      ...this.state,
    todos: this.state.todos.map(todo => {
      if (todo.id === clickedId) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
        return todo;
      })
    });  
  }

  render() {
    const { todos } = this.state;

    return (
      <div>
        <h1>Todo List</h1>
        <TodoList markComplete={this.markComplete} todos={todos} />
        <Form onSubmit={this.onSubmit} />
        

        <button onClick={this.onClear}>Clear</button>
      </div>
    );
  }
}

