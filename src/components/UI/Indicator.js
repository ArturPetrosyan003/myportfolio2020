import React from 'react';

import THEME from '../../assets/theme/theme';

import Slide from 'react-reveal/Slide';

const Indicator = (props) => {
    return (
        <div style={{ display: 'flex', marginBottom: '-25px', alignItems: 'center' }}>
            <div style={{ width: '120px', textAlign: 'right', marginRight: '18px' }}>
                <p style={{ color: THEME.coral, fontSize: '24px' }}>{props.name}</p>
            </div>
            <div style={{ width: '554px', height: '24px', background: THEME.white, border: '1.5px solid #707070', borderRadius: 20 }}>
                <Slide left duration={1500}>
                    <div style={{ width: `${props.percent}%`, height: '100%', background: THEME.coral, borderRadius: 20 }}></div>
                </Slide>
            </div>
        </div>
    );
};

export default Indicator;