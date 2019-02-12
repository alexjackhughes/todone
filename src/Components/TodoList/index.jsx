import React from "react";
import Todo from "../Todo";

const TodoList = ({ todos, completeTodo, deleteTodo }) => {
  return todos.map((todo, index) => {
    return (
      <Todo
        key={index}
        task={todo.task}
        complete={todo.complete}
        index={index}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    );
  });
};

export default TodoList;
