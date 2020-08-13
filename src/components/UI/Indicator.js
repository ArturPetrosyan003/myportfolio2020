import React from 'react';

import THEME from '../../assets/theme/theme';

const Indicator = (props) => {
    return (
        <div style={{ display: 'flex', marginBottom: '-25px', alignItems: 'center' }}>
            <div style={{ width: '120px', textAlign: 'right', marginRight: '18px' }}>
                <p style={{ color: THEME.orange, fontSize: '24px' }}>{props.name}</p>
            </div>
            <div style={{ width: '554px', height: '24px', background: THEME.white, border: '1.5px solid #707070', borderRadius: 20 }}>
                <div style={{ width: `${props.percent}%`, height: '100%', background: THEME.orange, borderRadius: 20 }}></div>
            </div>
        </div>
    );
};

export default Indicator;