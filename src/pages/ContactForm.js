import React from 'react';
import '../styles/ContactForm.css';
import { MyInfo, FormDisclaimer } from '../helpers/Data';

const ContactForm = () => {
    const { mobile, email } = MyInfo;
    return (
        <section className='contact' id='contact'>
            <div className='heading'>
                <p>Feel free to contact me anytime</p>
                <h2>Get in Touch</h2>
            </div>

            <div className='content'>
                <div className='contactInfo'>
                    {/* <h3>Contact Info</h3> */}
                    <div className='contactInfoBx'>
                        <div className='box'>
                            <div className='text'>
                                <h3>Phone no</h3>
                                <p>{mobile}</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='text'>
                                <h3>Email Address</h3>
                                <p>{email}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Forms --> */}

                <div className='formBx'>
                    <form
                        name='contact'
                        method='POST'
                        data-netlify='true'
                        onSubmit='submit'
                    >
                        <h3>Message Me</h3>
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
                            // value='Send Message'
                            name=''
                            className='btn'
                            id='submitBtn'
                        />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
