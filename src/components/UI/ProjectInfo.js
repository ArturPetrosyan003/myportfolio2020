import React from 'react';
import PageName from './PageName';

import mobile from '../../assets/icons/mobile.png';
import web from '../../assets/icons/web.png';
import link from '../../assets/icons/link.png';
import linkNull from '../../assets/icons/linkNull.png';
import arrow from '../../assets/icons/arrow.png';

import data from '../../projects';

const ProjectInfo = (props) => {
    return (
        <div className='single_project'>
            <PageName name={props.data.title} />

            <div className='top_button back_button'>
                <a href='/#works'>
                    <button>
                        <img src={arrow} />
                    </button>
                </a>
            </div >

            <div className='single_project_container'>
                <div className='image_container'>
                    <img className='main_image' src={props.data.image} />

                    <div className='small_image_container'>
                        <img src={data[props.data.id - 1].images[0]} />
                        <img src={data[props.data.id - 1].images[1]} />
                        <img src={data[props.data.id - 1].images[2]} />
                    </div>
                </div>

                {
                    data.map((i, index) => {
                        return (
                            i.id == props.data.id ?
                                <div key={index} className='info_container'>
                                    <p>{i.description}</p>
                                    <div className='icon_container'>
                                        <img src={i.platform == 'mobile' ? mobile : web} style={{ width: 50, height: 50 }} />
                                        <p>{i.duration}</p>
                                        <a href={i.url}>
                                            <img src={i.url != null ? link : linkNull} style={{ width: 40, height: 40 }} />
                                        </a>
                                    </div>
                                </div>
                                : null
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProjectInfo;