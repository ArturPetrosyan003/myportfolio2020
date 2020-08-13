import React, { Component } from 'react';

import ProfileImage from '../../assets/images/profile.png';
import THEME from '../../assets/theme/theme';

import FB from '../../assets/icons/facebook.png';
import Instagram from '../../assets/icons/instagram.png';
import Github from '../../assets/icons/github.png';

class Home extends Component {

    render() {
        return (
            <div id='home' style={{ display: "flex", flexDirection: 'column', width: '100%', height: '100vh', paddingTop: '50px', boxSizing: 'border-box' }}>
                <div style={{ marginLeft: '93%', cursor: 'pointer' }}>
                    <div style={{ width: '30px', height: '3px', background: 'black', marginBottom: '5px' }}></div>
                    <div style={{ width: '30px', height: '3px', background: 'black', marginBottom: '5px' }}></div>
                    <div style={{ width: '30px', height: '3px', background: 'black', marginBottom: '5px' }}></div>
                </div>
                <div style={{ paddingRight: '150px', paddingLeft: '150px' }}>
                    <div style={{ display: "flex", alignItems: 'center', width: '100%', height: '50vh', justifyContent: 'flex-start', overflow: 'hidden', marginTop: '100px' }}>
                        <h1 style={{ fontSize: '52px' }}>Hi, <br /> I'm <span style={{ color: THEME.orange }}>Artur</span> <br /> Web/App/Game Developer</h1>
                        <img src={ProfileImage} style={{ width: '400px', height: '400px', marginLeft: '18%' }} />
                    </div>
                    <button onClick={() => window.location.href = '/#contacts'} style={{ width: '173px', height: '43px', marginTop: '-44px', borderRadius: '10px', background: THEME.orange, color: THEME.white, fontSize: '21.5px', border: 'none', boxShadow: 'none', zIndex: 9 }}>Contact</button>
                    <div style={{ display: 'flex', marginTop: '50px', width: '173px', justifyContent: 'space-between' }}>
                        <button onClick={() => window.location.href = 'https://www.facebook.com/artur.petrosyan.56481379'} style={{ width: '46px', height: '46px', borderRadius: '100%', background: 'transparent', color: THEME.white, border: 'none', boxShadow: 'none', overflow: 'hidden', padding: 0 }}><img style={{ width: '46px', height: '46px' }} src={FB} /></button>
                        <button onClick={() => window.location.href = 'https://www.instagram.com/artur._petrosyan/'} style={{ width: '46px', height: '46px', borderRadius: '100%', background: 'transparent', color: THEME.white, border: 'none', boxShadow: 'none', overflow: 'hidden', padding: 0 }}><img style={{ width: '46px', height: '46px' }} src={Instagram} /></button>
                        <button onClick={() => window.location.href = 'https://github.com/ArturPetrosyan003'} style={{ width: '46px', height: '46px', borderRadius: '100%', background: 'transparent', color: THEME.white, border: 'none', boxShadow: 'none', overflow: 'hidden', padding: 0 }}><img style={{ width: '46px', height: '46px' }} src={Github} /></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;