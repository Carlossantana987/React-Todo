import React from "react";

const TodoForm = (props) => {
  return (
    <form className="form">
      <input 
      type="text" 
      name="taskInput" 
      placeholder='todo...'   
      value={props.taskInput}
      />
      <button>Add</button>
      <button>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
