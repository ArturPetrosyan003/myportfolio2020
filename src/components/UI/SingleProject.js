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
                    <div
                        className='project_item'
                        onMouseEnter={() => this.hoverEffect()}
                        onMouseLeave={() => this.hoverEffect()}
                    >
                        <Fade duration={700} when={this.state.hover}>
                            <div className='cover'>
                                <Fade bottom duration={700} when={this.state.hover}>
                                    <p>{this.props.title}</p>
                                    <hr />
                                </Fade>
                            </div>
                        </Fade>
                        <img src={this.props.image} />
                    </div>
                </Zoom>
            </Link>
        );
    }
};

export default SingleProject;