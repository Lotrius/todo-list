import React, { Component } from 'react';

class AddItem extends Component {
    render() {
        return (
            <form onSubmit={this.submitItem}>
                <div className='cf'>
                    <div>
                        <input
                            className='f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns'
                            type='text'
                            placeholder='What do you need to do?'
                            ref="input"
                        />
                    </div>
                    <div>
                        <input
                            className='f6 f5-l button-reset fl pv3 tc bn bg-green hover-bg-green white pointer w-100 w-25-m w-20-l br2-ns br--right-ns'
                            type='submit'
                            value='Add'
                        />
                    </div>
                </div>
            </form>

        );
    }

    submitItem = (event) => {
        event.preventDefault(); // Prevent page from refreshing whenever submit is clicked

        const item = this.refs.input.value.trim(); // Get whatever the user typed

        if (item === '') {
            // If there's nothing don't let an item be added
            this.refs.input.value = '';
            return;
        } else {
            this.refs.input.value = ''; // Reset text field value

            return this.props.updateTodo(item); // Call updateTodo
        }
    }
}



export default AddItem;

