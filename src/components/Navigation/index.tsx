import React from "react";

import MobileMenu from "@components/UI/MobileMenu";
import WebMenu from "@components/UI/WebMenu";

import useIsMobile from "../../hooks/device";

const Navigation = () => {
    const isMobile = useIsMobile();

    return isMobile ? <WebMenu /> : <WebMenu />;
};

export default Navigation;
