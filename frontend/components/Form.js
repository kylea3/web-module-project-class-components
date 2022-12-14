import React from 'react';

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.input);
    this.setState({
      ...this.state,
      input: ''
    })
  }

  onChange = (e) => {
    this.setState({
    ...this.state,
    input: e.target.value
    });
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
          <input onChange={this.onChange}/>
          <button>Add</button>
        </form>
    )
  }
}