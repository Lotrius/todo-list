import React, { Component } from 'react';
import Item from './Item'

class ItemList extends Component {
    printItems() {
        // Create a new Item for each todo in the list
        return this.props.todos.map((todo, index) => <Item key={index} ind={index} todo={todo} toggleComplete={this.props.toggleComplete} />)
    }

    render() {
        return (
            <form className='bg-light-gray mw7 center pa4 br2-ns ba b--black-10' >
                <div className='cf'>
                    {this.printItems()}
                </div>
            </form>
        );
    }

}

export default ItemList;
