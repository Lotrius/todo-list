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

        // If editing,
        return (
            // Render with edit button
            <div className={"mw6 center pa2 mt3 br2-ns ba b--black-10 overflow-auto " + (todo.completed ? 'bg-light-green' : 'bg-light-blue')} >
                <div className='dib fl'>
                    {this.printListItem(todo, ind)}
                </div>

                <div className='fr pr2'>
                    {this.editOrSaveButton(ind)}
                    {this.removeOrCancelButton(ind)}
                </div>

            </div>
        );

    }

    // Prints the list items in the todo list
    printListItem = (item, index) => {
        // If the task is completed, make it green, else red
        // Also pointers
        // Also strikethrough for completed items
        const taskStyle = {
            color: item.completed ? '#137752' : 'black',
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
    removeOrCancelButton = (index) => {
        return this.state.editing ?
            <button type="button" onClick={() => this.setState({ editing: false })}>Cancel</button>
            :
            <button type="button" onClick={this.props.removeItem.bind(this, index)}>X</button>

    }

    // The edit/save button
    editOrSaveButton = (index) => {
        // If editing,
        return this.state.editing ?

            // Render save button
            <div className='pr2 dib'>
                <button type="button" onClick={this.saveEdit.bind(this, index)}>Save</button>
            </div>
            :
            // Otherwise render edit button
            <div className='pr2 dib'>
                <button type="button" onClick={this.changeEditValue}>Edit</button>
            </div>


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