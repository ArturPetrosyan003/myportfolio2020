import React from 'react';

import THEME from '../../assets/theme/theme';

import Slide from 'react-reveal/Slide';

const PageName = (props) => {
    return (
        <Slide left duration={1000}>
            <div style={{ width: '289px', height: '61px', background: THEME.orange, color: THEME.white, textAlign: 'center', fontSize: 30, paddingTop: '9px', boxSizing: 'border-box' }}>{props.name}</div>
        </Slide>
    );
};

export default PageName;