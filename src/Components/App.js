import React, { Component } from "react";
import "../Assets/App.css";

import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

class App extends Component {
  constructor() {
    super();

    const todo = {
      task: "This is an example todo",
      complete: false
    };

    this.state = {
      todos: [todo]
    };
  }

  addTodo(todo) {
    let todos = this.state.todos;
    todos.push(todo);

    this.setState(todos);
  }

  completeTodo(index) {
    let todos = this.state.todos;
    todos[index].complete = !todos[index].complete;

    this.setState(todos);
  }

  deleteTodo(index) {
    let todos = this.state.todos;
    todos.splice(index, 1);

    this.setState(todos);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AddTodo addTodo={this.addTodo.bind(this)} />
          {this.state.todos.length > 0 ? (
            <TodoList
              todos={this.state.todos}
              completeTodo={this.completeTodo.bind(this)}
              deleteTodo={this.deleteTodo.bind(this)}
            />
          ) : (
            <p className="no-todos-message">
              Wow congrats! Looks like you've finished all your todos :)
            </p>
          )}
        </header>
      </div>
    );
  }
}

export default App;
