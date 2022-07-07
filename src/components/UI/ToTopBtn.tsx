import React, { Component, useEffect, useState } from "react";

import arrow from "@icons/arrow.png";
import Zoom from "react-reveal/Zoom";

const ToTopBtn = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return show == true ? (
    <Zoom duration={400}>
      <div className="top_button">
        <a href="/#home">
          <button>
            <img src={arrow} />
          </button>
        </a>
      </div>
    </Zoom>
  ) : null;
};

export default ToTopBtn;
