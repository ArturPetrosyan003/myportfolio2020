import React from 'react';

import THEME from '../../assets/theme/theme';

import PageName from '../UI/PageName';

import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';


const Contact = () => {

    const sendEmail = async (event) => {
        event.preventDefault();
        const data = new FormData(event.target);

        const email = {
            subject: data.get('subject'),
            email: data.get('email'),
            message: data.get('message'),
        }

        await fetch('http://localhost:4000/email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(email)
        })
    }

    return (
        <div id='contact' style={{ width: '100%', height: '100vh', paddingTop: '80px', boxSizing: 'border-box', overflow: 'hidden' }}>
            <PageName name='Contact' />

            <Fade duration={1000}>
                <div>
                    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
                        <Fade duration={1500}>
                            <form onSubmit={sendEmail}>
                                <Slide left delay={0} duration={1000}>
                                    <input name='subject' type='text' placeholder='Subject:' style={{ width: '492px', height: '49px', borderRadius: 15, border: '1px solid #707070', marginBottom: '40px', outline: 'none', fontSize: 20, padding: '20px', boxSizing: 'border-box', color: '#707070' }} /><br />
                                </Slide>

                                <Slide left delay={200} duration={1000}>
                                    <input name='email' type='email' placeholder='Email:' style={{ width: '492px', height: '49px', borderRadius: 15, border: '1px solid #707070', marginBottom: '40px', outline: 'none', fontSize: 20, padding: '20px', boxSizing: 'border-box', color: '#707070' }} /><br />
                                </Slide>

                                <Slide left delay={400} duration={1000}>
                                    <textarea name='message' placeholder='Message:' style={{ width: '492px', height: '210px', borderRadius: 15, border: '1px solid #707070', outline: 'none', fontSize: 20, marginBottom: '40px', padding: '20px', boxSizing: 'border-box', color: '#707070', resize: 'none' }}></textarea><br />
                                </Slide>

                                <Slide left delay={0} duration={1000}>
                                    <input type='submit' style={{ width: '172px', height: '43px', background: THEME.orange, color: THEME.white, fontSize: '21.5px', border: 'none', boxShadow: 'none', borderRadius: '10px', marginLeft: '65%', cursor: 'pointer', outline: 'none' }} />
                                </Slide>
                            </form>
                        </Fade>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Contact;
