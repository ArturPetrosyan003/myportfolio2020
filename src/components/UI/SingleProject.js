import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import { Link } from 'react-router-dom';

class SingleProject extends Component {

    state = {
        hover: false
    }

    hoverEffect = () => {
        this.setState({
            hover: !this.state.hover
        })
    }

    render() {
        return (
            <Link to={{
                pathname: `/project/${this.props.id}`,
                state: {
                    id: this.props.id,
                    title: this.props.title,
                    image: this.props.image
                }
            }}>
                <Zoom duration={1000}>
                    <div style={{ width: '338px', height: '184px', borderRadius: 20, overflow: 'hidden', marginRight: '50px', cursor: 'pointer' }} onMouseEnter={() => this.hoverEffect()} onMouseLeave={() => this.hoverEffect()}>
                        <Fade when={this.state.hover}>
                            <div style={{ width: '338px', height: '184px', borderRadius: 20, background: 'rgba(0, 0, 0, 0.5)', zIndex: 9, position: 'absolute' }}>
                                <Fade bottom when={this.state.hover}>
                                    <p style={{ textAlign: 'center', color: 'white', fontSize: '30px' }}>{this.props.title}</p>
                                    <hr style={{ width: '80%', background: 'white', height: '1px', border: 'none', marginTop: '-20px' }}></hr>
                                </Fade>
                            </div>
                        </Fade>
                        <img src={this.props.image} style={{ width: '100%', height: '100%' }} />
                    </div>
                </Zoom>
            </Link>
        );
    }
};

export default SingleProject;