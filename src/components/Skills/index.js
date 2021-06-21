import React, { Component } from 'react';

import Indicator from '../UI/Indicator';
import PageName from '../UI/PageName';

class Skills extends Component {
    render() {
        return (
            <div id='skills'>
                <PageName name='Skills' />

                <div className='skills_container'>
                    <Indicator name='Html' percent='90' />
                    <Indicator name='Css' percent='90' />
                    <Indicator name='Js' percent='80' />
                    <Indicator name='React' percent='75' />
                    <Indicator name='React Native' percent='65' />
                    <Indicator name='Node Js' percent='65' />
                    <Indicator name='Php' percent='45' />
                    <Indicator name='Laravel' percent='30' />
                    <Indicator name='MySql' percent='35' />
                    <Indicator name='Unity' percent='90' />
                    <Indicator name='C# (Unity)' percent='90' />
                    <Indicator name='Mongo' percent='60' />
                    <Indicator name='Firebase' percent='80' />
                </div>
            </div>
        );
    }
}

export default Skills;