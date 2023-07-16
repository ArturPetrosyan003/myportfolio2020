import React, { Component, useEffect } from "react";

import ProfileImage from "@images/hero.png";
import Shape from "@images/shape.svg";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";

import data from "../../data/data.json";
import { iconSetter } from "../../helpers/iconChanger";
import { useSelector } from "react-redux";

const Home = () => {
  const theme = useSelector((state: any) => state.theme);

  return (
    <div id="home">
      <div className="wrapper">
        <div className="home_container">
          <Fade duration={1500}>
            <h1 dangerouslySetInnerHTML={{ __html: data.home }}></h1>
          </Fade>

          <Fade duration={700}>
            <img className="profile_image" src={ProfileImage} />
          </Fade>

          <Slide right duration={1500}>
            <img className="shape" src={Shape} alt="" />
          </Slide>
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
                src={require(`@icons/${iconSetter(theme).facebook}`)}
              />
            </a>

            <a target="_blank" href="https://www.instagram.com/ar2r_p003">
              <img
                className="icon"
                src={require(`@icons/${iconSetter(theme).instagram}`)}
              />
            </a>

            <a target="_blank" href="https://github.com/ArturPetrosyan003">
              <img
                className="icon"
                src={require(`@icons/${iconSetter(theme).github}`)}
              />
            </a>

            <a target="_blank" href="https://linkedin.com/in/ar2r-p003">
              <img
                className="icon"
                src={require(`@icons/${iconSetter(theme).linkedin}`)}
              />
            </a>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Home;
