import React, { Component } from "react";

import SingleProject from "components/UI/SingleProject";
import PageName from "components/UI/PageName";

import TPM from "assets/images/TPM.png";
import MCity from "assets/images/m_city.png";
import Venue from "assets/images/the_venue.png";
import Laravel from "assets/images/laravel.png";
import Startups from "assets/images/startups.png";
import Mazer from "assets/images/mazer.png";

import Fade from "react-reveal/Fade";
import Divider from "../../helpers/svg/divider";
import { useScroll, animated } from "@react-spring/web";

const Works = () => {
  const { scrollYProgress } = useScroll({});

  return (
    <animated.div
      /*  @ts-ignore */
      style={{
        opacity: scrollYProgress.to((val) => val * 6 - 2.4),
        display: scrollYProgress.to((val) =>
          val * 6 >= 4.6 || val * 6 <= 2.4 ? "none" : "flex"
        ),
      }}
    >
      <div id="projects">
        {/* <div className="divider">
          <Divider />
        </div> */}
        <PageName name="Projects" />

        <div className="projects_container">
          <SingleProject id={1} title="The Pyramid Mystery" image={TPM} />
          <SingleProject id={6} title="Mazer" image={Mazer} />
          <SingleProject id={5} title="Startups Platform" image={Startups} />
          <SingleProject id={2} title="Man City WebSite" image={MCity} />
          <SingleProject id={3} title="The Venue" image={Venue} />
          <SingleProject id={4} title="Shop Prototype" image={Laravel} />
        </div>
        {/* <Fade>
          <h3>
            Some projects are not listed because of some issues however they can
            be shown.
          </h3>
        </Fade> */}
      </div>
    </animated.div>
  );
};

export default Works;
