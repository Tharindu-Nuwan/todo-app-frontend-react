import React from "react";
import Header from "../header/Header";
import SideBar from "../side-bar/SideBar";
import Task from "../task/Task";

function Homepage() {
  return (
    <>
      <div className="main-view">
        <Header />
        <div className="body-container d-flex">
          <SideBar />
          <div className="d-flex flex-wrap gap-4 justify-content-around"></div>
          <Task />
        </div>
      </div>
    </>
  );
}

export default Homepage;
