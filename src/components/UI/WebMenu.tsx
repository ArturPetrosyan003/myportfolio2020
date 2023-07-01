import React, { useEffect, useRef, useState } from "react";

import Slide from "react-reveal/Slide";

import { AppBar, Popper, Toolbar } from "@material-ui/core";
import { connect, useDispatch, useSelector } from "react-redux";
import { setColor, setDarkTheme, setLightTheme } from "../../redux/actions";

import Moon from "@icons/moon.png";
import Sun from "@icons/sun.png";
import ColorPicker from "@icons/color-picker.png";

const WebMenu = (props) => {
  const [openPicker, setOpenPicker] = useState(false);
  const color = useSelector((state: any) => state.color);
  const [selectedColor, setSelectedColor] = useState(color);

  const dispatch = useDispatch();
  const colorPickerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        containerRef.current.classList.remove("navbar_fadeIn");
        containerRef.current.classList.add("navbar_fadeOut");
        return;
      }
      containerRef.current.classList.remove("navbar_fadeOut");
      containerRef.current.classList.add("navbar_fadeIn");
    });
  }, [containerRef]);

  const openColorPicker = () => {
    setOpenPicker(!openPicker);
  };

  return (
    <AppBar ref={containerRef}>
      <Toolbar>
        <div className="navbar">
          <Slide top delay={0}>
            <a className="navbar_link" href="/#about">
              About
            </a>
          </Slide>

          <Slide top delay={100}>
            <a className="navbar_link" href="/#skills">
              Skills
            </a>
          </Slide>

          <Slide top delay={200}>
            <a className="navbar_link" href="/#projects">
              Projects
            </a>
          </Slide>

          <Slide top delay={200}>
            <a className="navbar_link" href="/#career">
              Career
            </a>
          </Slide>

          <Slide top delay={300}>
            <a className="navbar_link" href="/#contact">
              Contact
            </a>
          </Slide>

          <div className="options-section" ref={colorPickerRef}>
            <Slide top delay={0}>
              <img src={Sun} onClick={() => props.setLightTheme(dispatch)} />
            </Slide>

            <Slide top delay={0}>
              <img src={Moon} onClick={() => props.setDarkTheme(dispatch)} />
            </Slide>

            <Slide top delay={0}>
              <img src={ColorPicker} onClick={() => openColorPicker()} />
            </Slide>
          </div>

          <Popper
            open={openPicker}
            anchorEl={colorPickerRef.current}
            placement="bottom-end"
            className="color-picker"
            modifiers={{ name: "arrow", enabled: true }}
            onBlur={() => setOpenPicker(false)}
          >
            <input
              type="color"
              value={selectedColor}
              onChange={({ target }) => {
                setSelectedColor(target.value);
                setTimeout(() => props.setColor(target.value), 500);
              }}
            />
          </Popper>
        </div>
      </Toolbar>
    </AppBar>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLightTheme: () => dispatch(setLightTheme()),
    setDarkTheme: () => dispatch(setDarkTheme()),
    setColor: (color) => dispatch(setColor(color)),
  };
};

export default connect(null, mapDispatchToProps)(WebMenu);
