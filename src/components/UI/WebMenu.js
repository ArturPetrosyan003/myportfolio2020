import React from 'react';

import { AppBar, Toolbar } from '@material-ui/core';
import Slide from 'react-reveal/Slide';

const WebMenu = () => {
    return (
        <AppBar>
            <Toolbar>
                <div className='navbar'>
                    <Slide top delay={0}>
                        <a className='navbar_link' href='/#about'>About</a>
                    </Slide>

                    <Slide top delay={100}>
                        <a className='navbar_link' href='/#skills'>Skills</a>
                    </Slide>

                    <Slide top delay={200}>
                        <a className='navbar_link' href='/#projects'>Projects</a>
                    </Slide>

                    <Slide top delay={300}>
                        <a className='navbar_link' href='/#contact'>Contact</a>
                    </Slide>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default WebMenu;