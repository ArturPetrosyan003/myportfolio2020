import React from 'react';
import PageName from './PageName';

import mobile from '../../assets/icons/mobile.png';
import web from '../../assets/icons/web.png';
import link from '../../assets/icons/link.png';
import linkNull from '../../assets/icons/linkNull.png';
import arrow from '../../assets/icons/arrow.png';

import THEME from '../../assets/theme/theme';

import data from '../../projects';

const ProjectInfo = (props) => {
    return (
        <div style={{ width: '100%', height: '100vh', paddingTop: '80px', boxSizing: 'border-box', overflow: 'hidden' }}>
            <PageName name={props.data.title} />
            <div style={{ position: 'fixed', zIndex: 999, left: '92%', top: '10%', transform: 'rotate(-90deg)' }}>
                <a href='/#works' style={{ textDecoration: 'none', color: THEME.white, fontSize: 30 }}>
                    <button style={{ width: 60, height: 60, background: THEME.coral, borderRadius: '100%', border: 'none', color: THEME.white, fontSize: 30, padding: 0 }}>
                        <img style={{ width: 30, height: 30 }} src={arrow} />
                    </button>
                </a>
            </div >
            <div style={{ width: '100%', height: '100%', display: 'flex', marginTop: '5%', paddingLeft: '10%', paddingRight: '10%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '150px' }}>
                    <img src={props.data.image} style={{ width: '420px', height: '228px', borderRadius: 20 }} />
                    <div style={{ display: 'flex', marginTop: 34, paddingLeft: 12 }}>
                        <img src={data[props.data.id - 1].images[0]} style={{ width: '152px', height: '83px', borderRadius: 20, marginRight: 12 }} />
                        <img src={data[props.data.id - 1].images[1]} style={{ width: '152px', height: '83px', borderRadius: 20, marginRight: 12 }} />
                        <img src={data[props.data.id - 1].images[2]} style={{ width: '152px', height: '83px', borderRadius: 20, marginRight: 12 }} />
                    </div>
                </div>
                {
                    data.map((i, index) => {
                        return (
                            i.id == props.data.id ?
                                <div key={index} style={{ width: 500, fontSize: 24, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <p>{i.description}</p>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: 220, marginTop: 50 }}>
                                        <img src={i.platform == 'mobile' ? mobile : web} style={{ width: 50, height: 50 }} />
                                        <p id='p'>{i.duration}</p>
                                        <a href={i.url}><img src={i.url != null ? link : linkNull} style={{ width: 40, height: 40 }} /></a>
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