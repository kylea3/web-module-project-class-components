import React from 'react';
import Todo from "./Todo";
import TodoList from './TodoList'




export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
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
  render() {
    const { todos } = this.state;

    return (
      <div>
        <h1>Todo List</h1>
        <TodoList todos={todos} />

        <form>
          <input />
          <button>Add</button>
        </form>

        <button>Clear</button>
      </div>
    );
  }
}

