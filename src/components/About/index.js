import React, { Component } from 'react';
import THEME from '../../assets/theme/theme';
import AboutImg from '../../assets/images/about.jpg';

class About extends Component {

    render() {
        return (
            <div id='about' style={{ width: '100%', height: '100vh', paddingTop: '80px', boxSizing: 'border-box', overflow: 'hidden'}}>
                <div style={{ width: '289px', height: '61px', background: THEME.orange, color: THEME.white, textAlign: 'center', fontSize: 30, paddingTop: '9px', boxSizing: 'border-box' }}>About</div>
                <div style={{width: '100%', height: '100%', display: 'flex', marginTop: '-50px', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={AboutImg} style={{width: '240px', height: '240px', borderTopRightRadius: 30, borderBottomLeftRadius: 30}}/>
                    <div style={{marginLeft: '70px'}}>
                        <h2 style={{fontSize: '46px'}}>I'm Artur</h2>
                        <p style={{fontSize: 24, width: '700px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;