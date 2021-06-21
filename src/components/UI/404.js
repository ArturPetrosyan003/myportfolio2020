import React from 'react';

import THEME from '../../assets/theme/theme';

const NotFound = () => {
    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ color: THEME.coral, fontSize: 80 }}>Page not found :(</p>
        </div>
    );
};

export default NotFound;