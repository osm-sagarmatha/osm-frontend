import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import AuthRoutes from "./AuthRoutes";
import Navbar from "./components/Navbar";
import UnAuthRoutes from "./UnAuthRoutes";
import NavigationBar from "./components/NavigationBar";

import { useAuthState } from "./contexts/auth";

function App() {
  const { token } = useAuthState();

  return (
    <div className="App">
      <Router>
        <div>
          {token && <Navbar />}
          {token ? <AuthRoutes /> : <UnAuthRoutes />}
        </div>
        {token && <NavigationBar />}
      </Router>
    </div>
  );
}

export default App;
