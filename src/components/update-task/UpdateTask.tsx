import React, { FormEvent, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

interface UpdateProps {
  id: number
}

function UpdateTask() {
  const [title, setTitle] = useState("");
  const [description, setDecsription] = useState("");
  const [tags, setTags] = useState<number[]>([]);
  const navigate = useNavigate();
  const {id} = useParams<{id: string}>();

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
      const response = await axios.patch(
        `http://localhost:8000/api/update/${id}`,
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
      if (response.status === 200) {
        navigate("../home");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Updated Task",
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
      alert(error);
    }
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
            <h5>Update the existing task...</h5>
            <button
              type="button"
              className="btn btn-success"
              onClick={handleSaveClick}
            >
              Update Task
            </button>
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
              <textarea
                id="txt-area"
                className="form-control"
                placeholder="Enter the task description here"
                onChange={(e) => setDecsription(e.target.value)}
              ></textarea>
              <label>Description</label>
            </div>
            <div className="tags-container d-flex mt-4 justify-content-between">
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
        </div>
      </div>
    </>
  );
}

export default UpdateTask;
