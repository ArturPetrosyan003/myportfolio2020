import React from 'react';

import THEME from '../../assets/theme/theme';

import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

const PageName = (props) => {
    return (
        <Fade duration={1000}>
            <Slide left duration={1000}>
                <div
                    style={{
                        width: '289px',
                        height: '61px',
                        background: THEME.coral,
                        color: THEME.white,
                        textAlign: 'center',
                        fontSize: 30,
                        paddingTop: '9px',
                        boxSizing: 'border-box',
                        borderTopRightRadius: 5,
                        borderBottomRightRadius: 5
                    }}
                >
                    {props.name}
                </div>
            </Slide>
        </Fade>
    );
};

export default PageName;