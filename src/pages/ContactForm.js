import React from 'react';
import '../styles/ContactForm.css';
import { myInfo } from '../helpers/Data';
import Form from '../components/Form';

const ContactForm = () => {
    return (
        <section className='contact' id='contact'>
            <div className='heading'>
                <h2>Get in Touch</h2>
                <div className='underline' />
            </div>

            <div className='content'>
                <div className='contactInfo'>
                    <div className='contactInfoBx'>
                        {myInfo.primaryContact.map((contact) => {
                            const { id, type, icon, data } = contact;
                            return (
                                <div className='box' key={id}>
                                    <div className='text'>
                                        <h3>
                                            {type}
                                            <span className='contact-icon'>
                                                {icon}
                                            </span>
                                        </h3>
                                        <p>{data}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* <!-- Form --> */}
                <div className='formBx'>
                    <Form />
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
