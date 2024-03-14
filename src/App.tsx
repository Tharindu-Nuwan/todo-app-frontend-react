import "./App.css";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import SideBar from "./components/side-bar/SideBar";
import Signup from "./components/signup/Signup";
import Task from "./components/task/Task";

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
      <Login />
    </>
  );
}

export default App;
