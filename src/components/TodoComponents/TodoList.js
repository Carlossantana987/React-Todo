// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.tasks.map(task => {
        return <Todo key={task.id} toggleTask={props.toggleTask} task={task} />;
      })}
    </div>
  );
};

export default TodoList;
