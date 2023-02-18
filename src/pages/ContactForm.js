import React from 'react';
import '../styles/ContactForm.css';
import { MyInfo } from '../helpers/Data';

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
                    <form action='POST' data-netlify='true'>
                        <h3>Message Me</h3>
                        <input
                            type='text'
                            placeholder='Name : '
                            name='name'
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
                            placeholder="Message: Please email me instead, sometimes this form doesnt work well, as I don't get notification. Thank You."
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
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
