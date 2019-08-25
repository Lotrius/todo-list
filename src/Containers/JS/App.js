import React, { Component } from 'react';
import '../CSS/App.css';
import Title from '../../Components/Title';
import AddItem from '../../Components/AddItem';
import ItemList from '../../Components/ItemList'

const todos = [
  {
    task: 'Make a todo list',
    completed: false
  },
  {
    task: 'Make todo list work',
    completed: false
  }
]

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todos
    }
  }

  render() {
    return (
      <div>
        <Title />

        <AddItem
          updateTodo={this.updateTodo}
        />

        <ItemList
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
        />
      </div>
    );
  }

  // Make it green
  toggleComplete = (index) => {
    const foundTodo = this.state.todos[index]; // Find item

    // Update
    foundTodo.completed = !foundTodo.completed;
    this.setState({ todos });
  }

  updateTodo = (task) => {
    todos.push({
      task: task,
      completed: false
    });

    console.log(todos);

    this.setState({ todos });
  }

}

export default App;
