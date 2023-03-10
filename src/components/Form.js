import React from 'react';

const Form = () => {
    return (
        <form name='contact' action='/contact' method='post'>
            <input type='hidden' name='form-name' value='contact' />

            <input
                required
                type='text'
                name='name'
                placeholder='Name: '
                className='styleMe'
            />
            <input
                required
                type='email'
                placeholder='Email : '
                name='email'
                className='styleMe'
            />
            <textarea
                required
                name='message'
                rows='6'
                id=''
                placeholder='Message: '
                className='styleMe'
            ></textarea>
            <input
                type='submit'
                value='Send Message'
                name=''
                className='btn'
                id='submitBtn'
            />
        </form>
    );
};

export default Form;
