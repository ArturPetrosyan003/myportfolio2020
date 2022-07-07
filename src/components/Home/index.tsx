import React, { Component, useEffect } from "react";

import ProfileImage from "@images/profile-pic.jpg";
import FB from "@icons/facebook.png";
import Instagram from "@icons/instagram.png";
import Github from "@icons/github.png";
import LinkedIn from "@icons/linkedin.png";

import WebMenu from "@components/UI/WebMenu";
import Navigation from "@components/UI/Navigation";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";

import data from "../../data/data.json";
import { iconSetter } from "../../helpers/iconChanger";
import { useSelector } from "react-redux";

const Home = () => {
    const theme = useSelector((state: any) => state.theme);

    return (
        <>
            <WebMenu />

            <div id="home">
                {/* <Fade duration={1500}>
                        <Navigation />
                    </Fade> */}

                <div style={{ paddingRight: "150px", paddingLeft: "150px" }}>
                    <div className="home_container">
                        <Slide left duration={1000}>
                            <h1
                                dangerouslySetInnerHTML={{ __html: data.home }}
                            ></h1>
                        </Slide>

                        <Fade duration={1500}>
                            <img className="profile_image" src={ProfileImage} />
                        </Fade>
                    </div>

                    <Slide right duration={1000}>
                        <button
                            className="contact_button"
                            onClick={() => (window.location.href = "/#contact")}
                        >
                            Contact
                        </button>
                    </Slide>

                    <Zoom duration={1000}>
                        <div className="icon_container">
                            <a
                                target="_blank"
                                href="https://www.facebook.com/artur.petrosyan03"
                            >
                                <img
                                    className="icon"
                                    src={require(`@icons/${
                                        iconSetter(theme).facebook
                                    }`)}
                                />
                            </a>

                            <a
                                target="_blank"
                                href="https://www.instagram.com/ar2r_p003"
                            >
                                <img
                                    className="icon"
                                    src={require(`@icons/${
                                        iconSetter(theme).instagram
                                    }`)}
                                />
                            </a>

                            <a
                                target="_blank"
                                href="https://github.com/ArturPetrosyan003"
                            >
                                <img
                                    className="icon"
                                    src={require(`@icons/${
                                        iconSetter(theme).github
                                    }`)}
                                />
                            </a>

                            <a
                                target="_blank"
                                href="https://linkedin.com/in/ar2r-p003"
                            >
                                <img
                                    className="icon"
                                    src={require(`@icons/${
                                        iconSetter(theme).linkedin
                                    }`)}
                                />
                            </a>
                        </div>
                    </Zoom>
                </div>
            </div>
        </>
    );
};

export default Home;
