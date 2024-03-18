import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import SideBar from "../side-bar/SideBar";
import Task from "../task/Task";
import { Outlet } from "react-router-dom";
import AddTask from "../add-task/AddTask";
import axios from "axios";

function Home() {
  const [token, setToken] = useState('');
  const [taskList, setTaskList] = useState([]);
  setToken(localStorage.getItem('token')!);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.get('/items');
        setTaskList(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  },[]);

  return (
    <>
      <div className="main-view">
        <Header />
        <div className="body-container d-flex">
          <SideBar />
          <div className="d-flex flex-wrap gap-4 justify-content-around"></div>
          
          <Task />
        </div>
        <Outlet />
      </div>
      
    </>
  );
}

export default Home;
