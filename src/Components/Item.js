import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
    }

    render() {
        const { todo, ind } = this.props;
        const { editing } = this.state;

        console.log(todo.completed);

        // If editing,
        return editing ?
            // Render with edit button
            <div className={"mw6 center pa2 mt3 br2-ns ba b--black-10 " + (todo.completed ? 'bg-light-green' : 'bg-light-blue')}>
                {this.printListItem(todo, ind)}
                {this.removeButton(ind)}
                {this.editOrSaveButton(ind)}
            </div>
            :

            // Otherwise render with save button
            <div className={"mw6 center pa2 mt3 br2-ns ba b--black-10 " + (todo.completed ? 'bg-light-green' : 'bg-light-blue')} >
                {this.printListItem(todo, ind)}
                {this.removeButton(ind)}
                {this.editOrSaveButton(ind)}
            </div>

    }

    // Prints the list items in the todo list
    printListItem = (item, index) => {
        // If the task is completed, make it green, else red
        // Also pointers
        // Also strikethrough for completed items
        const taskStyle = {
            color: item.completed ? '#137752': 'black',
            cursor: 'pointer',
            textDecoration: item.completed ? 'line-through' : 'none'
        }


        // Return the item as a label
        // Why a label? idk man
        return this.state.editing ?
            <input type='text' ref='editedtext' defaultValue={item.task} />
            :
            <label style={taskStyle} onClick={this.props.toggleComplete.bind(this, index)}>
                {item.task}
            </label>
    }

    // The removal button
    removeButton = (index) => {
        return (
            <button type="button" onClick={this.props.removeItem.bind(this, index)}>X</button>
        );
    }

    // The edit/save button
    editOrSaveButton = (index) => {
        const button = (

            // If editing,
            this.state.editing ?

                // Render save button
                <button type="button" onClick={this.saveEdit.bind(this, index)}>Save</button>
                :

                // Otherwise render edit button
                <button type="button" onClick={this.changeEditValue}>Edit</button>
        )

        return button;

    }

    // Edit button was clicked
    changeEditValue = () => {
        const newEditState = !this.state.editing; // Cause react gets upset when I try to skip this step

        this.setState({ editing: newEditState });
    }

    // Save edited item
    saveEdit = (index) => {
        this.props.editItem(index, this.refs.editedtext.value); // Call editItem in App
        this.changeEditValue(); // Undo editing value
    }
}

export default Item;