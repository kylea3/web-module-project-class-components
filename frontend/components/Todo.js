import React from "react";

export default class Todo extends React.Component {
  markComplete = () => {
    this.props.markComplete(this.props.todo.id);
  }
  render() {
    return(
    <li onClick={this.markComplete}>{this.props.todo.task}{this.props.todo.completed ? ' ✔' : ''}</li>
  )}
}

