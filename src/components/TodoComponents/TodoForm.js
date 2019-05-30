import React from "react";

const TodoForm = (props) => {
  return (
    <form className="form" onSubmit={e => props.addTask(e)}>
      <input
      type="text" 
      name="taskInput" 
      placeholder='todo...'   
      value={props.taskInput}
      onChange={(e) => props.changeHandler(e)}
      />
      <button>Add</button>
      <button>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
