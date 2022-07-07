import React, { useState } from "react";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import { Link } from "react-router-dom";

const SingleProject = (props) => {
  const [hover, setHover] = useState(false);

  const hoverEffect = () => {
    setHover((prev) => !prev);
  };

  return (
    <Link
      to={{
        pathname: `/project/${props.id}`,
        state: {
          id: props.id,
          title: props.title,
          image: props.image,
        },
      }}
    >
      <Zoom duration={1000}>
        <div
          className="project_item"
          onMouseEnter={() => hoverEffect()}
          onMouseLeave={() => hoverEffect()}
        >
          <Fade duration={700} when={hover}>
            <div className="cover">
              <Fade bottom duration={700} when={hover}>
                <p>{props.title}</p>
                <hr />
              </Fade>
            </div>
          </Fade>
          <img src={props.image} />
        </div>
      </Zoom>
    </Link>
  );
};

export default SingleProject;
