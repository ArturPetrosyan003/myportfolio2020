import React from "react";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

import PageName from "components/UI/PageName";
import CareerItem from "components/UI/CareerItem";

import Star from "assets/icons/star.png";
import { Tooltip } from "@material-ui/core";
import Divider from "../../helpers/svg/divider";
import { useScroll, animated } from "@react-spring/web";

const Career = () => {
  const { scrollYProgress } = useScroll({});

  return (
    <animated.div
      /*  @ts-ignore */
      style={{ opacity: scrollYProgress.to((val) => val * 6 - 3.6) }}
    >
      <div id="career">
        {/* <div className="divider">
        <Divider />
      </div> */}
        <PageName name="Career" />

        <div className="career_container">
          <div className="path">
            <CareerItem title="Tumo Center" date="2016-2020" />
            <CareerItem
              title="Workshop assistant (Tumo Center volunteering)"
              date="2018-2020"
            />
            <CareerItem
              title="Front-end developer (freelance)"
              date="2018-2021"
            />
            <CareerItem
              title="Indie Game developer (BllockGames)"
              date="2019-present"
            />
            <CareerItem
              title="Software engineer (SDC)"
              date="2021-present"
              additionalClass="last"
            />
          </div>
          <div className="workshops">
            <Fade duration={1500}>
              <h2>
                Attended workshops <br /> Tumo Center{" "}
              </h2>
            </Fade>

            <div className="list">
              <div className="section">
                <Slide left delay={300}>
                  <p>
                    • Animation{" "}
                    <Tooltip title="Passed with star">
                      <img src={Star} />
                    </Tooltip>
                  </p>
                </Slide>

                <Slide left delay={500}>
                  <p>
                    • Robotics{" "}
                    <Tooltip title="Passed with star">
                      <img src={Star} />
                    </Tooltip>
                  </p>
                </Slide>

                <Slide left delay={700}>
                  <p>
                    • 3D modeling{" "}
                    <Tooltip title="Passed with star">
                      <img src={Star} />
                    </Tooltip>
                  </p>
                </Slide>

                <Slide left delay={900}>
                  <p>
                    • Programming{" "}
                    <Tooltip title="Passed with star">
                      <img src={Star} />
                    </Tooltip>
                  </p>
                </Slide>

                <Slide left delay={1100}>
                  <p>
                    • Web development{" "}
                    <Tooltip title="Passed with star">
                      <img src={Star} />
                    </Tooltip>
                  </p>
                </Slide>

                <Slide left delay={1300}>
                  <p>
                    • Game development{" "}
                    <Tooltip title="Passed with star">
                      <img src={Star} />
                    </Tooltip>
                  </p>
                </Slide>

                <Slide left delay={1500}>
                  <p>
                    • Front-end Back-end{" "}
                    <Tooltip title="Passed with star">
                      <img src={Star} />
                    </Tooltip>
                  </p>
                </Slide>

                <Slide left delay={1700}>
                  <p>
                    • React native{" "}
                    <Tooltip title="Passed with star">
                      <img src={Star} />
                    </Tooltip>
                  </p>
                </Slide>
              </div>
              <div className="section">
                <Slide right>
                  <p>• Laravel</p>
                </Slide>

                <Slide right delay={200}>
                  <p>• Building drones</p>
                </Slide>

                <Slide right delay={400}>
                  <p>• R</p>
                </Slide>

                <Slide right delay={600}>
                  <p>• MATLAB</p>
                </Slide>

                <Slide right delay={800}>
                  <p>• Photographing</p>
                </Slide>

                <Slide right delay={1000}>
                  <p>• Music</p>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default Career;
