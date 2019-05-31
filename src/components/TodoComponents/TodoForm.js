import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: " "
    };
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addItem = e => {
    e.preventDefault();
    this.props.addTask(e, this.state.item);
    this.setState({
      item: " "
    });
  };

  render() {
    return (
      <form onSubmit={this.addItem}>
        <input
          name="item"
          placeholder="todo..."
          value={this.state.item}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
