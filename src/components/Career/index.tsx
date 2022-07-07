import React from "react";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

import PageName from "@components/UI/PageName";
import CareerItem from "@components/UI/CareerItem";

import Star from "@icons/star.png";
import { Tooltip } from "@material-ui/core";

const Career = () => {
    return (
        <div id="career">
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
                        date="2019-2021"
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
                            <Slide left>
                                <p>
                                    • Animation{" "}
                                    <Tooltip title="Passed with star">
                                        <img src={Star} />
                                    </Tooltip>
                                </p>
                            </Slide>

                            <Slide left delay={200}>
                                <p>
                                    • Robotics{" "}
                                    <Tooltip title="Passed with star">
                                        <img src={Star} />
                                    </Tooltip>
                                </p>
                            </Slide>

                            <Slide left delay={400}>
                                <p>
                                    • 3D modeling{" "}
                                    <Tooltip title="Passed with star">
                                        <img src={Star} />
                                    </Tooltip>
                                </p>
                            </Slide>

                            <Slide left delay={600}>
                                <p>
                                    • Programming{" "}
                                    <Tooltip title="Passed with star">
                                        <img src={Star} />
                                    </Tooltip>
                                </p>
                            </Slide>

                            <Slide left delay={800}>
                                <p>
                                    • Web development{" "}
                                    <Tooltip title="Passed with star">
                                        <img src={Star} />
                                    </Tooltip>
                                </p>
                            </Slide>

                            <Slide left delay={1000}>
                                <p>
                                    • Game development{" "}
                                    <Tooltip title="Passed with star">
                                        <img src={Star} />
                                    </Tooltip>
                                </p>
                            </Slide>

                            <Slide left delay={1200}>
                                <p>
                                    • Front-end Back-end{" "}
                                    <Tooltip title="Passed with star">
                                        <img src={Star} />
                                    </Tooltip>
                                </p>
                            </Slide>

                            <Slide left delay={1400}>
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
    );
};

export default Career;
