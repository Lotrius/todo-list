import React from 'react';

const AddItem = () => {
    return (
        <form className='bg-light-gray mw7 center pa4 mt5 br2-ns ba b--black-10'>
            <div className='cf'>
                <div>
                    <input className='f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns' type='text' placeholder='What do you need to do?' />
                </div>
                <div>
                    <input className='6 f5-l button-reset fl pv3 tc bn bg-green hover-bg-green white pointer w-100 w-25-m w-20-l br2-ns br--right-ns' type='submit' value='Add' />
                </div>
            </div>
        </form>

    );
}

export default AddItem;