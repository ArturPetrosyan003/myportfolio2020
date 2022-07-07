import React, { Component } from "react";

import SingleProject from "@components/UI/SingleProject";
import PageName from "@components/UI/PageName";

import TPM from "@images/TPM.png";
import MCity from "@images/m_city.png";
import Venue from "@images/the_venue.png";
import Laravel from "@images/laravel.png";
import Startups from "@images/startups.png";
import Mazer from "@images/mazer.png";

import Fade from "react-reveal/Fade";

const Works = () => {
  return (
    <>
      <div id="projects">
        <PageName name="Projects" />

        <div className="projects_container">
          <SingleProject id={1} title="The Pyramid Mystery" image={TPM} />
          <SingleProject id={6} title="Mazer" image={Mazer} />
          <SingleProject id={5} title="Startups Platform" image={Startups} />
          <SingleProject id={2} title="Man City WebSite" image={MCity} />
          <SingleProject id={3} title="The Venue" image={Venue} />
          <SingleProject id={4} title="Shop Prototype" image={Laravel} />

          <Fade>
            <h3>
              Some projects are not listed because of some issues however they
              can be shown.
            </h3>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Works;
