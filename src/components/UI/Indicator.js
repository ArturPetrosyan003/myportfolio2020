import React from 'react';

import Slide from 'react-reveal/Slide';

const Indicator = (props) => {
    return (
        <div className='indicator'>
            <div className='indicator_label'>
                <p>{props.name}</p>
            </div>

            <div className='indicator_line'>
                <Slide left duration={1500}>
                    <span style={{ width: `${props.percent}%` }}></span>
                </Slide>
            </div>
        </div>
    );
};

export default Indicator;