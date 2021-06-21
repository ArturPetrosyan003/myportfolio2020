import React from 'react';

import { AppBar, Toolbar } from '@material-ui/core';

const WebMenu = () => {
    return (
       <AppBar>
           <Toolbar>
                <div className='navbar'>
                    <a className='navbar_link' href='/#skills'>Skills</a>
                    <a className='navbar_link' href='/#projects'>Projects</a>
                    <a className='navbar_link' href='/#contact'>Contact</a>
                </div>
           </Toolbar>
       </AppBar>
    );
};

export default WebMenu;