import React, { Component } from 'react';

import THEME from '../../assets/theme/theme';

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
                <div style={{ position: 'fixed', zIndex: 999, left: '92%', top: '85%' }}>
                    <a href='/#home' style={{ textDecoration: 'none', color: THEME.white, fontSize: 30}}>
                        <button style={{ width: 60, height: 60, background: THEME.orange, borderRadius: '100%', border: 'none', color: THEME.white, fontSize: 30 }}>
                            ︿
                        </button>
                    </a>
                </div >
            : null
        );
    }
}

export default ToTopBtn;