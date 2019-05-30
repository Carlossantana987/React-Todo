import React from "react";

const TodoForm = props => {
  // if you console.log the props here, you can see you aren't passing anything in until you fill in the instructions I wrote in App.js
  console.log(props);
  return (
    <form className="form">
      <input
        type="text"
        name="taskInput"
        placeholder="todo..."
        // So this line isn't doing anything, props.taskInput is undefined. In App.js I left some intructions. You need to create a piece of state to hold the input value, and you need to pass it down as a prop to this component. You also need to add an onChange and set it equal to the change handler. Console.log(props) to keep track of what is actually making it into this component
        value={props.taskInput}
        /***********
         * You also need onChange={YOUR CHANGE HANDLER HERE}
         */
      />
      <button>Add</button>
      <button>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
