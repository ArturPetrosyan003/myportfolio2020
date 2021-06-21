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
            <div id='projects'>
                <PageName name='Projects' />

                <div className='projects_container'>
                    <SingleProject id={1} title="The Pyramid Mystery" image={TPM} />
                    <SingleProject id={2} title="Man City WebSite" image={MCity} />
                    <SingleProject id={3} title="The Venue" image={Venue} />
                    <SingleProject id={4} title="Shop Prototype" image={Laravel} />
                    {/* <SingleProject title="The Pyramid Mystery" image='https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753'/>
                    <SingleProject title="The Pyramid Mystery" image='https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753'/> */}
                </div>
            </div>
        );
    }
}

export default Works;