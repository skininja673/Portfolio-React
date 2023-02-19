import React from 'react';
// import { FormDisclaimer } from '../helpers/Data';

const Form = () => {
    const handleSubmit = () => {
        console.log('handled submit');
    };
    return (
        <form
            name='contact'
            method='post'
            data-netlify='true'
            onSubmit={handleSubmit}
        >
            <input type='hidden' name='form-name' value='contact' />

            <input type='hidden' name='form-name' value='pizzaOrder' />
            <label>
                What order did the pizza give to the pineapple?
                <input name='order' type='text' />
            </label>

            {/* <input
                type='text'
                name='name'
                placeholder='Name: '
                className='styleMe'
            />
            <input
                type='email'
                placeholder='Email : '
                name='email'
                className='styleMe'
            />
            <textarea
                name='message'
                rows='6'
                id=''
                placeholder={`Message: ${FormDisclaimer}`}
                className='styleMe'
            ></textarea> */}
            <button
                type='submit'
                // value='Send Message'
                name=''
                className='btn'
                id='submitBtn'
            >
                send
            </button>
        </form>
    );
};

export default Form;
