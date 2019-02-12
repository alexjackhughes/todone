import React, { Component } from "react";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("on change", event.target.value);
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const todo = {
      task: this.state.value,
      complete: false
    };

    if (todo.task !== "") {
      this.setState({ value: "" });
      this.props.addTodo(todo);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input className="submit-todo" type="submit" value="ADD TODO" />
      </form>
    );
  }
}

export default AddTodo;
