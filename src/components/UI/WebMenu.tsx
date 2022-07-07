import React from "react";
import Slide from "react-reveal/Slide";

import { AppBar, Toolbar } from "@material-ui/core";
import { connect, useDispatch } from "react-redux";
import { setDarkTheme, setLightTheme } from "../../redux/actions";

import Moon from "@icons/moon.png";
import Sun from "@icons/sun.png";

const WebMenu = (props) => {
    const dispatch = useDispatch();

    return (
        <AppBar>
            <Toolbar>
                <div className="navbar">
                    <Slide top delay={0}>
                        <a className="navbar_link" href="/#about">
                            About
                        </a>
                    </Slide>

                    <Slide top delay={100}>
                        <a className="navbar_link" href="/#skills">
                            Skills
                        </a>
                    </Slide>

                    <Slide top delay={200}>
                        <a className="navbar_link" href="/#projects">
                            Projects
                        </a>
                    </Slide>

                    <Slide top delay={200}>
                        <a className="navbar_link" href="/#career">
                            Career
                        </a>
                    </Slide>

                    <Slide top delay={300}>
                        <a className="navbar_link" href="/#contact">
                            Contact
                        </a>
                    </Slide>

                    <Slide top delay={0}>
                        <img
                            src={Sun}
                            onClick={() => props.setLightTheme(dispatch)}
                        />
                    </Slide>

                    <Slide top delay={0}>
                        <img
                            src={Moon}
                            onClick={() => props.setDarkTheme(dispatch)}
                        />
                    </Slide>
                </div>
            </Toolbar>
        </AppBar>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        setLightTheme: () => dispatch(setLightTheme()),
        setDarkTheme: () => dispatch(setDarkTheme()),
    };
};

export default connect(null, mapDispatchToProps)(WebMenu);
