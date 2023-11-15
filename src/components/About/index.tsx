import React, { Component } from "react";

import PageName from "components/UI/PageName";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import AboutImg from "assets/images/profile-pic.png";
import Shape from "assets/images/shape2.svg";

import data from "../../data/data.json";
import Divider from "../../helpers/svg/divider";
import { useScroll, animated } from "@react-spring/web";

const About = () => {
  const { scrollYProgress } = useScroll({});

  return (
    <>
      {/*  @ts-ignore */}
      <animated.div
        style={{
          opacity: scrollYProgress.to((val) => val * 6),
          display: scrollYProgress.to((val) => val * 6 >= 2.2 || val * 6 == 0 ? "none" : "flex"),
        }}
      >
        <div id="about">
          {/* <div className="divider">
          <Divider />
        </div> */}
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
      </animated.div>
    </>
  );
};

export default About;
