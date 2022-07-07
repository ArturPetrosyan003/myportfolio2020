import React from "react";

import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

const PageName = (props) => {
  return (
    <Fade duration={1000}>
      <Slide left duration={1000}>
        <div className="page_name">{props.name}</div>
      </Slide>
    </Fade>
  );
};

export default PageName;
