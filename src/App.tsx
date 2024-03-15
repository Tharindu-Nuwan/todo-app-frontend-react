import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import SideBar from "./components/side-bar/SideBar";
import Signup from "./components/signup/Signup";
import Task from "./components/task/Task";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Homepage from "./components/homepage/Homepage";

function App() {
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleLogin = (recivedToken: string) => {
    localStorage.setItem("token", recivedToken);
    setToken(recivedToken);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        {token && (
          // <React.Fragment>
          //   <div className="main-view">
          //     <Header />
          //     <div className="body-container d-flex">
          //       <SideBar />
          //       <div className="d-flex flex-wrap gap-4 justify-content-around"></div>
          //       <Task />
          //     </div>
          //   </div>
          // </React.Fragment>
          <Route path="/app" element={<Homepage />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
