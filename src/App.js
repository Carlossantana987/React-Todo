import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  state = {
    tasks: [
      {
        task: "Organize Garage",
        id: 1528817077286,
        completed: false
      },
      {
        task: "Bake Cookies",
        id: 1528817084358,
        completed: false
      },
      {
        task: "go grab food",
        id: 1528817084358,
        completed: false
      }
    ]
    /**********
     * You need a property on state to hold your input value. State is an object, with a property called tasks that holds an array of objects. You need to give state another property that will hold a string. You call it taskInput in TodoForm, why not call it that here?
     */
  };
  /*********ADD THIS **************
  handleChanges = () => {
    **** FILL ME IN: I should be the change handler for your input in TodoForm********
  }
  addNewTask = (event) => {
    **** FILL ME IN: I should be the submit handler for your TodoForm********
  }
  */
  handleChanges = () => {
    console.log("change");
  };
  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <TodoList tasks={this.state.tasks} />
        {/************** Ok, so now you have a change handler function, you need to pass it into TodoForm. You also need to give TodoForm the piece of state that represents the input value, and you will need to give it the submit handler you wrote, like this : <TodoForm handleChanges={this.handleChanges} taskInput={this.state.taskInput} addNewTask={this.addNewTask}/>
         */}
        <TodoForm />
        {/**************** 
            If you've followed along this far, now go into TodoForm.js and console.log your props to see what is being called in
          */}
      </div>
    );
  }
}

export default App;
