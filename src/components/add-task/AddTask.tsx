import React, { FormEvent } from "react";
import "./AddTask.css";
import { Link } from "react-router-dom";

// interface ModalProps {
//   onClose: () => void;
//   onSubmit: (e: FormEvent<HTMLFormElement>) => void;
// }

function AddTask() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
   /*  onSubmit(e); */
  };

  return (
    <>
      <div>
        <div className="modal-content">
            <div>
            <button type="button" className="btn btn-outline-light"><Link to={'../home'}>Cancel</Link></button>
            <button type="button" className="btn btn-success">Success</button>
            </div>
          <form onSubmit={handleSubmit}>
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

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddTask;
