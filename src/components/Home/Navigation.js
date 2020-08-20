import React, { Component } from 'react';

import Slide from 'react-reveal/Slide';

import disableScroll from 'disable-scroll';

class Navigation extends Component {

    state = {
        isOpen: false
    }

    menuHandler = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        })

        if (this.state.isOpen) {
            document.getElementsByTagName("html")[0].style.scrollBehavior = 'smooth';
            disableScroll.off()
        }
        else {
            document.getElementsByTagName("html")[0].style.scrollBehavior = 'unset';
            disableScroll.on()
        }
    }

    render() {
        return (
            <>
                <div onClick={this.menuHandler} style={{ marginLeft: '93%', cursor: 'pointer', visibility: this.state.isOpen ? 'hidden' : 'visible' }}>
                    <div style={{ width: '30px', height: '3px', background: 'black', marginBottom: '5px' }}></div>
                    <div style={{ width: '30px', height: '3px', background: 'black', marginBottom: '5px' }}></div>
                    <div style={{ width: '30px', height: '3px', background: 'black', marginBottom: '5px' }}></div>
                </div>

                <Slide when={this.state.isOpen} right duration={1500} delay={0}>
                    <div onClick={this.menuHandler} style={{ width: '100%', height: '100vh', background: 'transparent', position: 'absolute', marginTop: '-75px', display: this.state.isOpen ? 'block' : 'none' }}>
                        <div style={{ width: '20%', height: '100vh', background: 'rgba(0, 0, 0, 0.7)', position: 'absolute', marginLeft: '80%', paddingTop: '10%', boxSizing: 'border-box'}}>
                            <a href='/#about' style={{color: 'white', fontSize: 25, textDecoration: 'none', display: 'block', textAlign: 'center', marginTop: '20px'}}>About</a>
                            <a href='/#skills' style={{color: 'white', fontSize: 25, textDecoration: 'none', display: 'block', textAlign: 'center', marginTop: '20px'}}>Skills</a>
                            <a href='/#works' style={{color: 'white', fontSize: 25, textDecoration: 'none', display: 'block', textAlign: 'center', marginTop: '20px'}}>Works</a>
                            <a href='/#contact' style={{color: 'white', fontSize: 25, textDecoration: 'none', display: 'block', textAlign: 'center', marginTop: '20px'}}>Contact</a>
                        </div>
                    </div>
                </Slide>
            </>
        );
    }
}

export default Navigation;