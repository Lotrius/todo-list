import React, { Component } from 'react';

class Item extends Component {
    render() {
        const { todo, ind } = this.props;
        return (
            <div className="bg-light-blue mw5 center pa4 mt5 br2-ns ba b--black-10" >
                {this.printListItem(todo, ind)}
            </div>

        );
    }

    printListItem(item, index) {
        const taskStyle = {
            color: item.completed ? '#5cb85c' : '#d9534f',
            cursor: 'pointer'
        }

        return <label style={taskStyle} onClick={this.props.toggleComplete.bind(this, index)}>{item.task}</label>
    }


}

export default Item;