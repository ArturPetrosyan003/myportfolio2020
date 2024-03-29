import React, { Component } from "react";

import Indicator from "@components/UI/Indicator";
import PageName from "@components/UI/PageName";
import Divider from "../../helpers/svg/divider";

const Skills = () => {
  return (
    <div id="skills">
      <div className="divider">
        <Divider />
      </div>
      <PageName name="Skills" />

      <div className="skills_container">
        <div className="skill_row">
          <Indicator name="Html" percent="95" />
          <Indicator name="Css" percent="95" />
          <Indicator name="Js" percent="95" />
          <Indicator name="React" percent="95" />
          <Indicator name="React Native" percent="80" />
          <Indicator name="Node Js" percent="60" />
          <Indicator name="Angular" percent="40" />
          <Indicator name="Three Js" percent="40" />
        </div>

        <div className="skill_row">
          <Indicator name="Php" percent="30" />
          <Indicator name="Laravel" percent="30" />
          <Indicator name="MySql" percent="35" />
          <Indicator name="Unity" percent="80" />
          <Indicator name="C# (Unity)" percent="80" />
          <Indicator name="Mongo DB" percent="60" />
          <Indicator name="Firebase" percent="80" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
