import React from 'react';



export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [{
          task: 'Bake Cookies',
          id: 12124234234,
          completed: false
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
        <h1>Todo</h1>
        <ul>
          {todos.map(el => {
            return (
              <li>{el.task}{el.completed ? ' ✔' : ''}</li>
          )}
          )}
        </ul>

        <form>
          <input />
          <button>Add</button>
        </form>

        <button>Clear</button>
      </div>
    );
  }
}

