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

function App() {
  return (
    <>
      {/* <div className="main-view">
      <Header />
      <div className="body-container d-flex">
        <SideBar />
        <div className="d-flex flex-wrap gap-4 justify-content-around">
          
        </div>
      </div>
      </div> */}
      {/* <Signup /> */}
      {/* <Login /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
