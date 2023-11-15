import React from "react";

import { Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import ProjectInfo from "components/Works/SingleProject/ProjectInfo";
import NotFound from "components/UI/404";

const Router = () => {
  return (
    <Routes>
      <Route path="/" Component={Layout} />
      <Route path="/project/:id" Component={(routeProps) => <ProjectInfo />} />
      <Route Component={NotFound} />
    </Routes>
  );
};

export default Router;
