import React, { Component } from 'react';
import '../CSS/App.css';
import Title from '../../Components/Title';
import AddItem from '../../Components/AddItem';
import ItemList from '../../Components/ItemList'

const todos = [
  {
    task: 'Make a todo listFFF',
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

        <div className='bg-light-gray mw7 center pa4 mt5 br2-ns ba b--black-10'>
          <AddItem
            updateTodo={this.updateTodo}
          />

          <hr className='mt4 mb3'/>

          <ItemList
            todos={this.state.todos}
            toggleComplete={this.toggleComplete}
            removeItem={this.removeItem}
            editItem={this.editItem}
          />
        </div>
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

    this.setState({ todos });
  }

  removeItem = (index) => {
    todos.splice(index, 1);
    this.setState({ todos });
  }

  editItem = (index, text) => {
    const foundTodo = this.state.todos[index];

    foundTodo.task = text;
    foundTodo.completed = false;

    this.setState({ todos });
  }
}

export default App;
