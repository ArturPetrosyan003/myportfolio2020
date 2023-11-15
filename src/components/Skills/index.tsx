import React, { Component } from "react";

import Indicator from "components/UI/Indicator";
import PageName from "components/UI/PageName";
import SkillItem from "components/UI/skill-item";
import Divider from "../../helpers/svg/divider";

import Html from "assets/icons/html.png";
import Css from "assets/icons/css.png";
import Js from "assets/icons/js.png";
import ReactIcon from "assets/icons/react.png";
import Node from "assets/icons/node-js.png";
import Angular from "assets/icons/angular.png";
import Php from "assets/icons/php.png";
import Laravel from "assets/icons/laravel.png";
import Mysql from "assets/icons/mysql.png";
import Unity from "assets/icons/unity.png";
import C from "assets/icons/c-sharp.png";
import Mongo from "assets/icons/mongo.png";
import Firebase from "assets/icons/firebase.png";
import Docker from "assets/icons/docker.png";
import Git from "assets/icons/github.png";

import { useScroll, animated } from "@react-spring/web";

const Skills = () => {
  const { scrollYProgress } = useScroll({});

  return (
    <animated.div
      /*  @ts-ignore */
      style={{
        opacity: scrollYProgress.to((val) => val * 6 - 1.2),
        display: scrollYProgress.to((val) =>
          val * 6 >= 3.4 || val * 6 <= 1.2 ? "none" : "flex"
        ),
      }}
    >
      <div id="skills">
        {/* <div className="divider">
        <Divider />
      </div> */}
        <PageName name="Skills" />

        <div className="skills_container">
          <div className="skill_col">
            <SkillItem name={"Html"} icon={Html} />
            <SkillItem name={"Css"} icon={Css} />
            <SkillItem name={"Js"} icon={Js} />
            <SkillItem name={"React"} icon={ReactIcon} />
            <SkillItem name={"React Native"} icon={ReactIcon} />
            <SkillItem name={"Node Js"} icon={Node} />
            <SkillItem name={"Angular"} icon={Angular} />
            <SkillItem name={"Git"} icon={Git} />
          </div>

          <div className="skill_col">
            <SkillItem name={"Docker"} icon={Docker} />
            <SkillItem name={"Php"} icon={Php} />
            <SkillItem name={"Laravel"} icon={Laravel} />
            <SkillItem name={"MySql"} icon={Mysql} />
            <SkillItem name={"Unity"} icon={Unity} />
            <SkillItem name={"C# (Unity)"} icon={C} />
            <SkillItem name={"Mongo DB"} icon={Mongo} />
            <SkillItem name={"Firebase"} icon={Firebase} />
          </div>
          {/* <div className="skill_row">
            <Indicator name="Html" percent="95" />
            <Indicator name="Css" percent="95" />
            <Indicator name="Js" percent="88" />
            <Indicator name="React" percent="85" />
            <Indicator name="React Native" percent="80" />
            <Indicator name="Node Js" percent="60" />
            <Indicator name="Angular" percent="40" />
          </div>

          <div className="skill_row">
            <Indicator name="Php" percent="30" />
            <Indicator name="Laravel" percent="30" />
            <Indicator name="MySql" percent="35" />
            <Indicator name="Unity" percent="80" />
            <Indicator name="C# (Unity)" percent="80" />
            <Indicator name="Mongo DB" percent="60" />
            <Indicator name="Firebase" percent="80" />
          </div> */}
        </div>
      </div>
    </animated.div>
  );
};

export default Skills;
