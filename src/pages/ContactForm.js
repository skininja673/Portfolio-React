import React from 'react';
import '../styles/ContactForm.css';
import { MyInfo } from '../helpers/Data';
import Form from '../components/Form';

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
                    <Form />
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
