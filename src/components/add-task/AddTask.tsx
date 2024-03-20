import React, { FormEvent, useState } from "react";
import "./AddTask.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDecsription] = useState("");
  const [tags, setTags] = useState<number[]>([]);
  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate("../home");
  };

  const handleTagClick = (value: number) => {
    if (tags.includes(value)) {
      setTags(tags.filter((tag) => tag !== value));
    } else {
      setTags([...tags, value]);
    }
  };

  const handleSaveClick = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/save",
        {
          title: title,
          description: description,
          tags: tags,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      if (response.status === 201) {
        navigate("../home");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Saved Task",
          showConfirmButton: false,
          timer: 2500,
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Error!",
          text: "Error",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error!",
        text: "Check your inputs, Title and Description can't be empty!",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <div className="mb-4 d-flex align-items-center justify-content-between">
            <button
              type="button"
              className="btn btn-outline-warning"
              onClick={handleCancelClick}
            >
              Back
            </button>
            <h4>Add new task to your Task List...</h4> 
          </div>
          <div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Enter your task title here..."
                onChange={(e) => setTitle(e.target.value)}
              />
              <label htmlFor="floatingInput">Title</label>
            </div>

            <div className="form-floating">
              <input
                className="form-control"
                placeholder="Enter the task description here"
                onChange={(e) => setDecsription(e.target.value)}
              ></input>
              <label>Description</label>
            </div>
            <div className="tags-container-add">
              <div
                className={`tag d-flex align-items-center gap-4 p-2 px-2 ${
                  tags.includes(1) ? "active" : ""
                }`}
                onClick={() => handleTagClick(1)}
              >
                <div id="cir-1" className="circle"></div>
                <div>Work</div>
              </div>
              <div
                className={`tag d-flex align-items-center gap-4 p-2 px-2 ${
                  tags.includes(2) ? "active" : ""
                }`}
                onClick={() => handleTagClick(2)}
              >
                <div id="cir-2" className="circle"></div>
                <div>Study</div>
              </div>
              <div
                className={`tag d-flex align-items-center gap-4 p-2 px-2 ${
                  tags.includes(3) ? "active" : ""
                }`}
                onClick={() => handleTagClick(3)}
              >
                <div id="cir-3" className="circle"></div>
                <div>Entertainment</div>
              </div>
              <div
                className={`tag d-flex align-items-center gap-4 p-2 px-2 ${
                  tags.includes(4) ? "active" : ""
                }`}
                onClick={() => handleTagClick(4)}
              >
                <div id="cir-4" className="circle"></div>
                <div>Family</div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-warning btn-save"
              onClick={handleSaveClick}
            >
              Save Task
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTask;
