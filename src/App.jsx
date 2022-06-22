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
import MainScreen from "./screens/MainScreen";
import Explore from "./screens/Explore";

import { AuthProvider, useAuthState } from "./contexts/auth";

function App() {
  const { user } = useAuthState();

  return (
    <AuthProvider>
      <div className="App  ">
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route path="map" element={<Map />} />
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/interested-activites"
                element={<ActivitiesPage />}
              />
              <Route path="/activities" element={<Activities />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/main" element={<MainScreen />} />
              <Route path="/explore" element={<Explore />} />
            </Routes>
          </div>
          <NavigationBar />
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
