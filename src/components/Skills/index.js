import React, { Component } from 'react';

import THEME from '../../assets/theme/theme';
import Indicator from '../UI/Indicator';


class Skills extends Component {

    render() {
        return (
            <div id='skills' style={{ width: '100%', paddingTop: '80px', boxSizing: 'border-box', overflow: 'auto'}}>
                <div style={{ width: '289px', height: '61px', background: THEME.orange, color: THEME.white, textAlign: 'center', fontSize: 30, paddingTop: '9px', boxSizing: 'border-box' }}>Skills</div>

                <div style={{ width: '100%', marginTop: '50px', marginBottom: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', overflow: 'hidden'}}>
                    <Indicator name='Html' percent='90'/>
                    <Indicator name='Css' percent='90'/>
                    <Indicator name='Js' percent='75'/>
                    <Indicator name='React' percent='60'/>
                    <Indicator name='React Native' percent='50'/>
                    <Indicator name='Node Js' percent='65'/>
                    <Indicator name='Php' percent='45'/>
                    <Indicator name='MySql' percent='35'/>
                    <Indicator name='Unity' percent='90'/>
                    <Indicator name='C# (Unity)' percent='90'/>
                    <Indicator name='Mongo' percent='40'/>
                    <Indicator name='Firebase' percent='70'/>
                </div>
            </div>
        );
    }
}

export default Skills;