import React from 'react';
import PageName from './PageName';

import Mobile from '../../assets/icons/mobile.png';
import Web from '../../assets/icons/web.png';
import Github from '../../assets/icons/github.png';
import Arrow from '../../assets/icons/arrow.png';

import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

import data from '../../projects';

const ProjectInfo = (props) => {
    return (
        <div className='single_project'>
            <PageName name={props.data.title} />

            <div className='top_button back_button'>
                <Slide bottom>
                    <button onClick={() => window.history.back()}>
                        <img src={Arrow} />
                    </button>
                </Slide>
            </div >

            <div className='single_project_container'>
                <div className='image_container'>
                    <Slide left>
                        <img className='main_image' src={props.data.image} />

                        <div
                            className='small_image_container'
                            style={{
                                visibility: data[props.data.id - 1].images.length == 0 ? 'hidden' : 'visible'
                            }}
                        >
                            <img src={data[props.data.id - 1].images[0]} />
                            <img src={data[props.data.id - 1].images[1]} />
                            <img src={data[props.data.id - 1].images[2]} />
                        </div>
                    </Slide>

                    <Slide bottom>
                        <div className='url_container'>
                            <a href={data[props.data.id - 1].url} target='_blank'>
                                <button
                                    style={{
                                        opacity: data[props.data.id - 1].url == null ? 0.3 : 1,
                                        cursor: data[props.data.id - 1].url == null ? 'default' : 'pointer'
                                    }}
                                >
                                    Visit Site
                                </button>
                            </a>

                            <a href={data[props.data.id - 1].github} target='_blank'>
                                <img
                                    src={Github}
                                    style={{
                                        opacity: data[props.data.id - 1].github == null ? 0.3 : 1
                                    }}
                                />
                            </a>
                        </div>
                    </Slide>
                </div>


                {
                    data.map((i, index) => {
                        return (
                            i.id == props.data.id ?
                                <div key={index} className='info_container'>
                                    <Fade duration={2500}>
                                        <p>{i.description}</p>
                                    </Fade>

                                    <Slide bottom>
                                        <div className='icon_container'>
                                            <span>
                                                <p>Platform</p>
                                                <img src={i.platform == 'mobile' ? Mobile : Web} style={{ width: 50, height: 50 }} />
                                            </span>

                                            <span>
                                                <p>Duration</p>
                                                <p>{i.duration}</p>
                                            </span>
                                        </div>
                                    </Slide>
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