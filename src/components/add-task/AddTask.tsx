import React, { FormEvent, useState } from "react";
import "./AddTask.css";
import { Link, useNavigate } from "react-router-dom";

function AddTask() {
  const [title, setTile] = useState("");
  const [description, setDecsription] = useState("");
  const [tags, setTags] = useState<number[]>([]);
  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate("../home");
  };

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <div className="mb-4 d-flex align-items-center justify-content-around">
            <button
              type="button"
              className="btn btn-outline-info"
              onClick={handleCancelClick}
            >
              Back
            </button>
            <h5>Add New Task to your list...</h5>
            <button type="button" className="btn btn-success">
              Save Task
            </button>
          </div>
          <div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Enter your task title here..."
              />
              <label htmlFor="floatingInput">Title</label>
            </div>

            <div className="form-floating">
              <textarea
                id="txt-area"
                className="form-control"
                placeholder="Enter the task description here"
              ></textarea>
              <label>Description</label>
            </div>
            <div className="tags-container d-flex mt-4 justify-content-between">
              
              <div className="tag d-flex align-items-center gap-4 p-2" data-value="1">
                <div id="cir-1" className="circle"></div>
                <div>Work</div>
              </div>
              <div className="tag d-flex align-items-center gap-4 p-2" data-value="2">
                <div id="cir-2" className="circle"></div>
                <div>Study</div>
              </div>
              <div className="tag d-flex align-items-center gap-4 p-2" data-value="3">
                <div id="cir-3" className="circle"></div>
                <div>Entertainment</div>
              </div>
              <div className="tag d-flex align-items-center gap-4 p-2" data-value="4">
                <div id="cir-4" className="circle"></div>
                <div>Family</div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTask;
