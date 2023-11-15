import React, { useEffect, useState } from "react";
import * as ReactDOMServer from "react-dom/server";

import PageName from "components/UI/PageName";

import Mobile from "assets/icons/mobile.png";
import Web from "assets/icons/web.png";
import Github from "assets/icons/github.png";

import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

import TPM01 from "assets/images/TPM/01.jpg";
import TPM02 from "assets/images/TPM/02.jpg";
import TPM03 from "assets/images/TPM/03.jpg";

import MCity01 from "assets/images/MCity/01.png";
import MCity02 from "assets/images/MCity/02.png";
import MCity03 from "assets/images/MCity/03.png";

import Venue01 from "assets/images/Venue/01.png";
import Venue02 from "assets/images/Venue/02.png";
import Venue03 from "assets/images/Venue/03.png";

import Laravel01 from "assets/images/Laravel/01.png";
import Laravel02 from "assets/images/Laravel/02.png";
import Laravel03 from "assets/images/Laravel/03.png";

import StartupGrind01 from "assets/images/StartupGrind/01.png";
import StartupGrind02 from "assets/images/StartupGrind/02.png";
import StartupGrind03 from "assets/images/StartupGrind/03.png";

import data from "../../../data/data.json";

import { iconSetter } from "../../../helpers/iconChanger";
import { useSelector } from "react-redux";

import useIsMobile from "../../../hooks/device";

import Background from "../../../helpers/svg/background";
import Arrow from "../../../helpers/svg/arrow";
import { useLocation } from "react-router";

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

const ProjectInfo = () => {
  const { state } = useLocation();

  const [mainImage, setMainImage] = useState(state.image);
  const isMobile = useIsMobile();

  const theme = useSelector((state: any) => state.theme);
  const color = useSelector((state: any) => state.color);

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

  const svgString = encodeURIComponent(
    ReactDOMServer.renderToStaticMarkup(<Background color={color} />)
  );

  useEffect(() => {
    document.documentElement.style.setProperty("--accent-color", color);
  }, [color]);

  return (
    <div
      className="single_project"
      style={{ backgroundImage: `url("data:image/svg+xml,${svgString}")` }}
    >
      <PageName name={state.title} />

      {isMobile ? null : (
        <div className="top_button back_button">
          <Slide bottom>
            <button onClick={() => window.history.back()}>
              <Arrow color={theme === "dark" ? "#fff" : "#292929"} />
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
                  data.projects[state.id - 1].images.length == 0
                    ? "hidden"
                    : "visible",
              }}
            >
              <img
                onClick={({ target }) =>
                  changeImage((target as HTMLImageElement).src, target)
                }
                src={imagePathParser(
                  data.projects[state.id - 1].images[0]
                )}
              />
              <img
                onClick={({ target }) =>
                  changeImage((target as HTMLImageElement).src, target)
                }
                src={imagePathParser(
                  data.projects[state.id - 1].images[1]
                )}
              />
              <img
                onClick={({ target }) =>
                  changeImage((target as HTMLImageElement).src, target)
                }
                src={imagePathParser(
                  data.projects[state.id - 1].images[2]
                )}
              />
            </div>
          </Slide>

          <Slide bottom>
            <div className="url_container">
              <a href={data.projects[state.id - 1].url} target="_blank">
                <button
                  style={{
                    opacity:
                      data.projects[state.id - 1].url == null ? 0.3 : 1,
                    cursor:
                      data.projects[state.id - 1].url == null
                        ? "default"
                        : "pointer",
                  }}
                >
                  Visit Site
                </button>
              </a>

              <a href={data.projects[state.id - 1].github} target="_blank">
                <img
                  src={require(`assets/icons/${iconSetter(theme).github}`)}
                  style={{
                    opacity:
                      data.projects[state.id - 1].github == null ? 0.3 : 1,
                  }}
                />
              </a>
            </div>
          </Slide>
        </div>

        {data.projects.map((i, index) => {
          return i.id == state.id ? (
            <div key={index} className="info_container">
              <Fade duration={2500}>
                <p>{i.description}</p>
              </Fade>

              <Slide bottom>
                <div className="icon_container">
                  <span>
                    <p>Platform</p>
                    <img
                      src={require(`assets/icons/${
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
