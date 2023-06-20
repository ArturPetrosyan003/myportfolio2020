import React from "react";

import WebMenu from "@components/UI/WebMenu";

import useIsMobile from "../../hooks/device";

const Navigation = () => {
  const isMobile = useIsMobile();

  return isMobile ? <WebMenu /> : <WebMenu />;
};

export default Navigation;
