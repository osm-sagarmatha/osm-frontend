import React from "react";
import { Route, Routes } from "react-router-dom";

import Map from "./components/Map";
import Profile from "./screens/Profile";
import Explore from "./screens/Explore";
import RouteInfo from "./screens/RouteInfo";
import Activities from "./screens/Activities";
import MainScreen from "./screens/MainScreen";
import Leaderboards from "./screens/Leaderboards";
import ActivitiesPage from "./screens/ActivitiesPage";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />

      <Route path="/map" element={<Map />} />

      <Route path="/interested-activites" element={<ActivitiesPage />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/redeem" element={<Leaderboards />} />
      <Route path="/route" element={<RouteInfo />} />

      <Route path="*" element={<MainScreen />} />
    </Routes>
  );
};

export default AuthRoutes;
