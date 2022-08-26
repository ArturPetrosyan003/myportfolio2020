import React, { useEffect, useState } from "react";
import PageName from "@components/UI/PageName";

import Mobile from "@icons/mobile.png";
import Web from "@icons/web.png";
import Github from "@icons/github.png";
import Arrow from "@icons/arrow.png";

import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

import TPM01 from "@images/TPM/01.jpg";
import TPM02 from "@images/TPM/02.jpg";
import TPM03 from "@images/TPM/03.jpg";

import MCity01 from "@images/MCity/01.png";
import MCity02 from "@images/MCity/02.png";
import MCity03 from "@images/MCity/03.png";

import Venue01 from "@images/Venue/01.png";
import Venue02 from "@images/Venue/02.png";
import Venue03 from "@images/Venue/03.png";

import Laravel01 from "@images/Laravel/01.png";
import Laravel02 from "@images/Laravel/02.png";
import Laravel03 from "@images/Laravel/03.png";

import StartupGrind01 from "@images/StartupGrind/01.png";
import StartupGrind02 from "@images/StartupGrind/02.png";
import StartupGrind03 from "@images/StartupGrind/03.png";

import data from "../../../data/data.json";
import { iconSetter } from "../../../helpers/iconChanger";
import { useSelector } from "react-redux";
import useIsMobile from "../../../hooks/device";

const imagePaths = {
    TPM01,
    TPM02,
    TPM03,
    MCity01,
    MCity02,
    MCity03,
    Venue01,
    Venue02,
    Venue03,
    Laravel01,
    Laravel02,
    Laravel03,
    StartupGrind01,
    StartupGrind02,
    StartupGrind03,
};

const ProjectInfo = (props) => {
    const [mainImage, setMainImage] = useState(props.data.image);
    const isMobile = useIsMobile();

    const theme = useSelector((state: any) => state.theme);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const changeImage = (file, target) => {
        target.src = mainImage;
        setMainImage(file);
    };

    const imagePathParser = (imageName: string) => {
        return imagePaths[imageName];
    };

    return (
        <div className="single_project">
            <PageName name={props.data.title} />

            {isMobile ? null : (
                <div className="top_button back_button">
                    <Slide bottom>
                        <button onClick={() => window.history.back()}>
                            <img src={Arrow} />
                        </button>
                    </Slide>
                </div>
            )}

            <div className="single_project_container">
                <div className="image_container">
                    <Slide left>
                        <img className="main_image" src={mainImage} />

                        <div
                            className="small_image_container"
                            style={{
                                visibility:
                                    data.projects[props.data.id - 1].images
                                        .length == 0
                                        ? "hidden"
                                        : "visible",
                            }}
                        >
                            <img
                                onClick={({ target }) =>
                                    changeImage(
                                        (target as HTMLImageElement).src,
                                        target
                                    )
                                }
                                src={imagePathParser(
                                    data.projects[props.data.id - 1].images[0]
                                )}
                            />
                            <img
                                onClick={({ target }) =>
                                    changeImage(
                                        (target as HTMLImageElement).src,
                                        target
                                    )
                                }
                                src={imagePathParser(
                                    data.projects[props.data.id - 1].images[1]
                                )}
                            />
                            <img
                                onClick={({ target }) =>
                                    changeImage(
                                        (target as HTMLImageElement).src,
                                        target
                                    )
                                }
                                src={imagePathParser(
                                    data.projects[props.data.id - 1].images[2]
                                )}
                            />
                        </div>
                    </Slide>

                    <Slide bottom>
                        <div className="url_container">
                            <a
                                href={data.projects[props.data.id - 1].url}
                                target="_blank"
                            >
                                <button
                                    style={{
                                        opacity:
                                            data.projects[props.data.id - 1]
                                                .url == null
                                                ? 0.3
                                                : 1,
                                        cursor:
                                            data.projects[props.data.id - 1]
                                                .url == null
                                                ? "default"
                                                : "pointer",
                                    }}
                                >
                                    Visit Site
                                </button>
                            </a>

                            <a
                                href={data.projects[props.data.id - 1].github}
                                target="_blank"
                            >
                                <img
                                    src={require(`@icons/${
                                        iconSetter(theme).github
                                    }`)}
                                    style={{
                                        opacity:
                                            data.projects[props.data.id - 1]
                                                .github == null
                                                ? 0.3
                                                : 1,
                                    }}
                                />
                            </a>
                        </div>
                    </Slide>
                </div>

                {data.projects.map((i, index) => {
                    return i.id == props.data.id ? (
                        <div key={index} className="info_container">
                            <Fade duration={2500}>
                                <p>{i.description}</p>
                            </Fade>

                            <Slide bottom>
                                <div className="icon_container">
                                    <span>
                                        <p>Platform</p>
                                        <img
                                            src={require(`../../../assets/icons/${
                                                i.platform == "mobile"
                                                    ? iconSetter(theme).mobile
                                                    : iconSetter(theme).web
                                            }`)}
                                            style={{ width: 50, height: 50 }}
                                        />
                                    </span>

                                    <span>
                                        <p>Duration</p>
                                        <p>{i.duration}</p>
                                    </span>
                                </div>
                            </Slide>
                        </div>
                    ) : null;
                })}
            </div>
        </div>
    );
};

export default ProjectInfo;
