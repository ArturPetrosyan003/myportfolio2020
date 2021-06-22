import React, { Component } from 'react';

import arrow from '../../assets/icons/arrow.png';
import Zoom from 'react-reveal/Zoom';

class ToTopBtn extends Component {

    state = {
        show: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY > 0) {
            this.setState({
                show: true
            });
        }
        else {
            this.setState({
                show: false
            });
        }
    }

    render() {
        return (
            this.state.show == true ?
                <Zoom duration={400}>
                    <div className='top_button'>
                        <a href='/#home'>
                            <button>
                                <img src={arrow} />
                            </button>
                        </a>
                    </div >
                </Zoom>
                : null
        );
    }
}

export default ToTopBtn;