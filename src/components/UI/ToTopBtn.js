import React, { Component } from 'react';

import THEME from '../../assets/theme/theme';

import arrow from '../../assets/icons/arrow.png';
import Zoom from 'react-reveal/Zoom';

class ToTopBtn extends Component {

    state = {
        show: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }

    handleScroll = () => {
        if (window.scrollY > 0) {
            this.setState({
                show: true
            })
        }
        else {
            this.setState({
                show: false
            })
        }
    }

    render() {
        return (
            this.state.show == true ?
                <Zoom duration={400}>
                    <div style={{ position: 'fixed', zIndex: 999, left: '92%', top: '85%' }}>
                        <a href='/#home' style={{ textDecoration: 'none', color: THEME.white, fontSize: 30 }}>
                            <button style={{ width: 60, height: 60, background: THEME.coral, borderRadius: '100%', border: 'none', color: THEME.white, fontSize: 30, padding: 0 }}>
                                <img style={{ width: 30, height: 25 }} src={arrow} />
                            </button>
                        </a>
                    </div >
                </Zoom>
                : null
        );
    }
}

export default ToTopBtn;