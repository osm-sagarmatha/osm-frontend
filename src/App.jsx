import React from "react";
import { Home } from "./screens/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Map from "./components/Map";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Navbar from "./components/Navbar";
import ActivitiesPage from "./screens/ActivitiesPage";
import Activities from "./screens/Activities";
import NavigationBar from "./components/NavigationBar";
import Profile from "./screens/Profile";

function App() {
  return (
    <div className="App   ">
      <Router>
        <Navbar />
        <NavigationBar />
        <Routes>
          <Route path="map" element={<Map />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/interested-activites" element={<ActivitiesPage />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
