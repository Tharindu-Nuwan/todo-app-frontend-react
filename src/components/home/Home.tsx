import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import SideBar from "../side-bar/SideBar";
import Task from "../task/Task";
import axios from "axios";
import './Home.css'
import { Outlet } from "react-router-dom";

interface TagType {
  id: number,
  tag_name: string
}

interface Task {
  id: number;
  title: string;
  description: string;
  tags: TagType[];
}

function Home() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/get', {
          headers : {
            Authorization : `Bearer ${localStorage.getItem('token')}`
          }
        });
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
        <div className="header-container">
          <Header />
        </div>
        <div className="body-container d-flex">
          <div className="sidebar-container">
          <SideBar />
          </div>
          <div className="d-flex flex-wrap gap-4 justify-content-around task-container">
          {taskList.map((task)=>(
            <Task key={task.id} title={task.title} description={task.description} tags={task.tags}/>
          ))} 
          </div> 
        </div>
        <Outlet />
      </div>
      
    </>
  );
}

export default Home;
