import React, { Component } from "react";

import PageName from "@components/UI/PageName";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import AboutImg from "@images/profile-pic.png";
import Shape from "@images/shape2.svg";

import data from "../../data/data.json";
import Divider from "../../helpers/svg/divider";

const About = () => {
  return (
    <>
      <div id="about">
        <div className="divider">
          <Divider />
        </div>
        <PageName name="About" />

        <div className="about_container">
          <div className="about_content">
            <Slide left duration={1500}>
              <img className="shape" src={Shape} />
            </Slide>

            <Fade duration={1000}>
              <img className="profile-pic" src={AboutImg} />
              {/* <h1>I'm <span>Artur</span></h1> */}
              <p dangerouslySetInnerHTML={{ __html: data.about }}></p>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
