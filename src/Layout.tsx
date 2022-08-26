import React, { useEffect } from "react";

import Navigation from "@components/Navigation";
import Home from "@components/Home";
import About from "@components/About";
import Skills from "@components/Skills";
import Works from "@components/Works";
import Career from "@components/Career";
import Contact from "@components/Contact";
import ToTopBtn from "@components/UI/ToTopBtn";

import useIsMobile from "./hooks/device";

import { connect, useSelector } from "react-redux";

import { Theme } from "./data/theme";
import "./assets/style/style.scss";

const Layout = () => {
    const theme = useSelector((state: any) => state.theme);
    const isMobile = useIsMobile();

    useEffect(() => {
        if (theme === "light") {
            Object.keys(Theme.lightTheme).map((key) => {
                document.documentElement.style.setProperty(
                    key,
                    Theme.lightTheme[key]
                );
            });
            return;
        }
        Object.keys(Theme.darkTheme).map((key) => {
            document.documentElement.style.setProperty(
                key,
                Theme.darkTheme[key]
            );
        });
    }, [theme]);

    return (
        <div className="App">
            <Navigation />
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
