import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "./screens/Home";
import Map from "./components/Map";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import FriendList from "./screens/FriendList";
import Achievement from "./screens/Achievement";
import Challenges from "./screens/Challenges";
import Community from "./screens/Community";
import CreateRoute from "./screens/CreateRoute";

const UnAuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="*" element={<Home />} />
      {/* <Route path="/map" element={<Map />} />
      <Route path="*" element={<Home />} />
      <Route path="/friend-list" element={<FriendList />} />
      <Route path="/achievements" element={<Achievement />} />
      <Route path="/challenges" element={<Challenges />} />
      <Route path="/community" element={<Community />} />
      <Route path="/create-route" element={<CreateRoute />} /> */}

      {/* Auth
       */}
    </Routes>
  );
};

export default UnAuthRoutes;
