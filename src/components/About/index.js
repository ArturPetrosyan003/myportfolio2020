import React, { Component } from 'react';

import AboutImg from '../../assets/images/profile-pic.png';

import PageName from '../UI/PageName';

import Fade from 'react-reveal/Fade';

class About extends Component {
    render() {
        return (
            <div id='about'>
                <PageName name='About' />

                <Fade duration={1500}>
                    <div className='about_container'>
                        <div className='about_content'>
                            <img src={AboutImg} />

                            <div>
                                <h1>I'm <span>Artur</span></h1>

                                <p style={{ fontSize: 24, width: '700px' }}>
                                    web/game/app developer. Have 4+ years of experience in programming area. In that period I have created many projects and worked for several companies. I like to create interesting projects anytime, so contact me as soon as You want and we'll create something interesting :)
                                </p>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        );
    }
}

export default About;