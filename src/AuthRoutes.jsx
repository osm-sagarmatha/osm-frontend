import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Map from "./components/Map";
import Profile from "./screens/Profile";
import Explore from "./screens/Explore";
import RouteInfo from "./screens/RouteInfo";
import Activities from "./screens/Activities";
import MainScreen from "./screens/MainScreen";
import Leaderboards from "./screens/Leaderboards";
import ActivitiesPage from "./screens/ActivitiesPage";
import FriendList from "./screens/FriendList";
import Achievement from "./screens/Achievement";
import Challenges from "./screens/Challenges";
import Community from "./screens/Community";
import CreateRoute from "./screens/CreateRoute";
import Home from "./screens/Home";
import Map2 from "./components/Map2";

import Hiking from "./screens/Hiking";
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
      <Route path="/map2" element={<Map2 />} />
      <Route path="/map" element={<Map />} />
      {/* <Route path="*" element={<Home />} /> */}
      <Route path="/friend-list" element={<FriendList />} />
      <Route path="/achievements" element={<Achievement />} />
      <Route path="/challenges" element={<Challenges />} />
      <Route path="/community" element={<Community />} />
      <Route path="/create-route" element={<CreateRoute />} />
      <Route path="/hiking" element={<Hiking />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AuthRoutes;
