import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Zoom from "react-reveal/Zoom";
import Arrow from "../../helpers/svg/arrow";

const ToTopBtn = () => {
  const [show, setShow] = useState(false);
  const theme = useSelector((state: any) => state.theme);

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
            <Arrow color={theme === "dark" ? "#fff" : "#292929"} />
          </button>
        </a>
      </div>
    </Zoom>
  ) : null;
};

export default ToTopBtn;
