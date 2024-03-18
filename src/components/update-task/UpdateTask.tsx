import React, { FormEvent } from "react";
import "./UpdateTask.css";

// interface ModalProps {
//   onClose: () => void;
//   onSubmit: (e: FormEvent<HTMLFormElement>) => void;
// }

function UpdateTask() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
   /*  onSubmit(e); */
  };

  return (
    <>
      <div className="">
        <div className="modal-content">
            <div>
            <button type="button" className="btn btn-outline-light">Cancel</button>
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
            <button type="button">
              Close Modal
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateTask;
