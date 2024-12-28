import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import Map from "../components/pages/Map";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/map" element={<Map />} />
    </Routes>
  );
};

export default AppRoute;
