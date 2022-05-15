import React, { Component } from "react";

import ProfileImage from "../../assets/images/profile-pic.jpg";
import FB from "../../assets/icons/facebook.png";
import Instagram from "../../assets/icons/instagram.png";
import Github from "../../assets/icons/github.png";

import WebMenu from "../UI/WebMenu";
import Navigation from "../UI/Navigation";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";

class Home extends Component {
  render() {
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
                <h1>
                  Hi, <br /> I'm <span>Artur</span> <br /> Front-end/App/Game{" "}
                  <br /> Developer
                </h1>
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
                  <img className="icon" src={FB} />
                </a>

                <a
                  target="_blank"
                  href="https://www.instagram.com/artur._petrosyan/"
                >
                  <img className="icon" src={Instagram} />
                </a>

                <a target="_blank" href="https://github.com/ArturPetrosyan003">
                  <img className="icon" src={Github} />
                </a>
              </div>
            </Zoom>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
