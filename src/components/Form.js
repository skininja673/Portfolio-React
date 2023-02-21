import React from 'react';
import { FormDisclaimer } from '../helpers/Data';

// const Form = () => {
//     return (
//         <form name='contact' action='/contact' method='post'>
//             <input type='hidden' name='form-name' value='contact' />
//             <input type='text' name='name' placeholder='your name' />
//             <input type='email' name='email' placeholder='your email' />
//             <textarea
//                 name='message'
//                 placeholder='your message'
//                 cols='30'
//                 rows='10'
//             ></textarea>
//             <button type='submit'>send</button>
//         </form>
//     );
// };

const Form = () => {
    return (
        <form name='contact' action='/contact' method='post'>
            <input type='hidden' name='form-name' value='contact' />

            <input
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
