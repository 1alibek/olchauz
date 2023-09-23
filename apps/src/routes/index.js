import React from "react";
import { Route, Routes } from "react-router-dom";
import Dynamic from "../Dynamic";
import About from "../pages/About";
import App from "../App";
import Basket from "../pages/Basket";
function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/About" element={<About />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/About/:id" element={<Dynamic />} />
    </Routes>
  );
}

export default MainRouter;
