import React, { Component } from 'react';
import Item from './Item'

class ItemList extends Component {
    printItems() {
        const { todos } = this.props;

        // Create a new Item for each todo in the list
        return todos.map((todo, index) =>
            <Item
                key={index}
                ind={index}
                todo={todo}
                toggleComplete={this.props.toggleComplete}
                removeItem={this.props.removeItem}
                editItem={this.props.editItem}
            />
        )
    }

    render() {
        return (
            <div >
                <div className='cf'>
                    {this.printItems()}
                </div>
            </div>
        );
    }

}

export default ItemList;
