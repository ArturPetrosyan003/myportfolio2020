import React, { useEffect, useState } from "react";

import Navigation from "components/Navigation";
import WebMenu from "components/UI/WebMenu";
import Home from "components/Home";
import About from "components/About";
import Skills from "components/Skills";
import Works from "components/Works";
import Career from "components/Career";
import Contact from "components/Contact";
import ToTopBtn from "components/UI/ToTopBtn";

import useIsMobile from "./hooks/device";

import { connect, useSelector } from "react-redux";

import { Theme } from "./data/theme";
import "./assets/style/style.scss";

const Layout = () => {
  const [page, setPage] = useState("home");

  const theme = useSelector((state: any) => state.theme);
  const color = useSelector((state: any) => state.color);

  const isMobile = useIsMobile();

  useEffect(() => {
    if (theme === "light") {
      Object.keys(Theme.lightTheme).map((key) => {
        document.documentElement.style.setProperty(key, Theme.lightTheme[key]);
      });
      return;
    }
    Object.keys(Theme.darkTheme).map((key) => {
      document.documentElement.style.setProperty(key, Theme.darkTheme[key]);
    });
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.setProperty("--accent-color", color);
  }, [color]);

  const changePage = () => {
    switch (page) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Works />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <WebMenu setPage={setPage} />
      {/* {changePage()} */}

      <Home />
      <About />
      <Skills />
      <Works />
      <Career />
      <Contact />
      {isMobile ? null : <ToTopBtn />}
    </div>
  );
};

export default connect(null, null)(Layout);
