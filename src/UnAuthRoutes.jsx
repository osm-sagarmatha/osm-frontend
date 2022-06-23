import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./screens/Home";
import Map2 from "./components/Map2";
import Login from "./screens/Login";
import Signup from "./screens/Signup";

const UnAuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/map2" element={<Map2 />} />

      <Route path="*" element={<Home />} />

      {/* Auth
       */}
    </Routes>
  );
};

export default UnAuthRoutes;
