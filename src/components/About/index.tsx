import React, { Component } from "react";

import PageName from "@components/UI/PageName";

import Fade from "react-reveal/Fade";

import AboutImg from "@images/profile-pic.jpg";

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

        <Fade duration={1500}>
          <div className="about_container">
            <div className="about_content">
              <img src={AboutImg} />

              <div>
                {/* <h1>I'm <span>Artur</span></h1> */}

                <p dangerouslySetInnerHTML={{ __html: data.about }}></p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default About;
