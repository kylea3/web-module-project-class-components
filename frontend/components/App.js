import React from 'react';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Todo</h1>
        <ul>
          <li>Walk the dog</li>
          <li>Walk the cat</li>
          <li>Walk the fish</li>
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

