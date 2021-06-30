import React, { useState } from 'react';

import PageName from '../UI/PageName';

import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const Contact = () => {

    const [errorText, setErrorText] = useState('');
    const [loading, setLoading] = useState(false);


    const sendEmail = async (event) => {
        event.preventDefault();
        setLoading(true);

        const data = new FormData(event.target);

        const email = {
            subject: data.get('subject'),
            email: data.get('email'),
            message: data.get('message'),
        }

        const response = await fetch('https://mybackend2020.herokuapp.com/email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(email)
        })

        if (response.status == 200) {
            document.getElementById('form').reset();
            setErrorText('Email Sent');
            setLoading(false);
        }
        else if (response.status == 400) {
            setErrorText('Something went wrong');
            setLoading(false);
        }
    }

    return (
        <div id='contact'>
            <PageName name='Contact' />

            <Fade duration={1000}>
                <div className='contact_container'>
                    <Fade duration={1500}>
                        <form id='form' onSubmit={sendEmail}>
                            <div>
                                <Slide left delay={0} duration={1000}>
                                    <input className='input' name='subject' type='text' placeholder='Subject:' required /><br />
                                </Slide>

                                <Slide left delay={200} duration={1000}>
                                    <input className='input' name='email' type='email' placeholder='Email:' required /><br />
                                </Slide>
                            </div>

                            <div className='form_right'>
                                <Slide left duration={1000}>
                                    <textarea className='input' name='message' placeholder='Message:' required></textarea><br />
                                </Slide>

                                <p
                                    className='error_text'
                                    style={{
                                        color: errorText == 'Email Sent' ? '#40d96f' : '#ff5959'
                                    }}
                                >
                                    {errorText}
                                </p>

                                <Slide right duration={1000}>
                                    <input
                                        className='send_button'
                                        type='submit'
                                        value={loading == true ? 'Sending...' : 'Send'}
                                        disabled={loading == true ? true : false}
                                        style={{
                                            cursor: loading == true ? 'default' : 'pointer'
                                        }}
                                    />
                                </Slide>
                            </div>
                        </form>
                    </Fade>
                </div>
            </Fade>
        </div>
    );
};

export default Contact;
