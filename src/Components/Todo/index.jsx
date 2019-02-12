import React from "react";

const Todo = ({ task, complete, index, completeTodo, deleteTodo }) => {
  return (
    <p>
      <span
        className={complete ? "line-through task" : "task"}
        onClick={() => completeTodo(index)}
      >
        {task}
      </span>
      <i
        className="far fa-times-circle delete-task"
        onClick={() => deleteTodo(index)}
      />
    </p>
  );
};

export default Todo;
