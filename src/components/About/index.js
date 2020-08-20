import React, { Component } from 'react';

import AboutImg from '../../assets/images/about.jpg';

import PageName from '../UI/PageName';

import Fade from 'react-reveal/Fade';

class About extends Component {

    render() {
        return (
            <Fade duration={1500}>
                <div id='about' style={{ width: '100%', height: '100vh', paddingTop: '80px', boxSizing: 'border-box', overflow: 'hidden' }}>
                    <PageName name='About' />
                    <div style={{ width: '100%', height: '100%', display: 'flex', marginTop: '-50px', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={AboutImg} style={{ width: '240px', height: '240px', borderTopRightRadius: 30, borderBottomLeftRadius: 30 }} />
                        <div style={{ marginLeft: '70px' }}>
                            <h2 style={{ fontSize: '46px' }}>I'm Artur</h2>
                            <p style={{ fontSize: 24, width: '700px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
            </Fade>
        );
    }
}

export default About;