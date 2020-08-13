import React from 'react';

import THEME from '../../assets/theme/theme';

const Contacts = () => {
    return (
        <div id='contacts' style={{ width: '100%', height: '100vh', paddingTop: '80px', boxSizing: 'border-box', overflow: 'hidden' }}>
            <div style={{ width: '289px', height: '61px', background: THEME.orange, color: THEME.white, textAlign: 'center', fontSize: 30, paddingTop: '9px', boxSizing: 'border-box' }}>Contacts</div>
            <div>
                <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
                    <form>
                        <input type='text' placeholder='Name:' style={{ width: '492px', height: '49px', borderRadius: 15, border: '1px solid #707070', marginBottom: '40px', outline: 'none', fontSize: 20, padding: '20px', boxSizing: 'border-box', color: '#707070' }} /><br />
                        <input type='email' placeholder='Email:' style={{ width: '492px', height: '49px', borderRadius: 15, border: '1px solid #707070', marginBottom: '40px', outline: 'none', fontSize: 20, padding: '20px', boxSizing: 'border-box', color: '#707070' }} /><br />
                        <textarea placeholder='Message:' style={{ width: '492px', height: '210px', borderRadius: 15, border: '1px solid #707070', outline: 'none', fontSize: 20, marginBottom: '40px', padding: '20px', boxSizing: 'border-box', color: '#707070', resize: 'none' }}></textarea><br />
                        <input type='submit' style={{ width: '172px', height: '43px', background: THEME.orange, color: THEME.white, fontSize: '21.5px', border: 'none', boxShadow: 'none', borderRadius: '10px', marginLeft: '65%', cursor: 'pointer', outline: 'none' }} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacts;