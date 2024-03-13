import "./App.css";
import Header from "./components/header/Header";
import SideBar from "./components/side-bar/SideBar";
import Task from "./components/task/Task";

function App() {
  return (
    <>
    <div className="main-view">
      <Header />
      <div className="body-container d-flex">
        <SideBar />
        <div className="d-flex flex-wrap gap-4 justify-content-around">
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
