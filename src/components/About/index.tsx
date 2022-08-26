import React, { Component } from "react";

import AboutImg from "@images/profile-pic.jpg";

import PageName from "@components/UI/PageName";

import Fade from "react-reveal/Fade";

import data from "../../data/data.json";

const About = () => {
    return (
        <div id="about">
            <PageName name="About" />

            <Fade duration={1500}>
                <div className="about_container">
                    <div className="about_content">
                        <img src={AboutImg} />

                        <div>
                            {/* <h1>I'm <span>Artur</span></h1> */}

                            <p
                                dangerouslySetInnerHTML={{ __html: data.about }}
                            ></p>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default About;
