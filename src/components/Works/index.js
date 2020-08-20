import React, { Component } from 'react';

import SingleProject from '../UI/SingleProject';
import PageName from '../UI/PageName';

import TPM from '../../assets/images/TPM.png';
import MCity from '../../assets/images/m_city.png';
import Venue from '../../assets/images/the_venue.png';
import Laravel from '../../assets/images/laravel.png';

class Works extends Component {

    render() {
        return (
            <div id='works' style={{ width: '100%', height: '100vh', paddingTop: '80px', boxSizing: 'border-box', overflow: 'hidden', cursor: 'pointer'}}>
                <PageName name='Works'/>
                <div style={{width: '100%', height: '90%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexWrap: 'wrap', margin: 'auto', paddingLeft: '200px'}}>
                    <SingleProject title="The Pyramid Mystery" image={TPM}/>
                    <SingleProject title="Man City WebSite" image={MCity}/>
                    <SingleProject title="The Venue" image={Venue}/>
                    <SingleProject title="Shop Prototype" image={Laravel}/>
                    {/* <SingleProject title="The Pyramid Mystery" image='https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753'/>
                    <SingleProject title="The Pyramid Mystery" image='https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753'/> */}
                </div>
            </div>
        );
    }
}

export default Works;