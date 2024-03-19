import { FormEvent, useState } from "react";
import "./Signup.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/register", {
        name: username,
        email: email,
        password: password,
      });

      if (response.status === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You have been registered successfully",
          showConfirmButton: false,
          timer: 2500,
        });
        navigate("/login");
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Error!",
          text: "Enter valid email or password must contain minimum 4 charactors",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Error!",
        text: "Enter valid email or password must contain minimum 4 charactors",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  return (
    <>
      <form className="d-flex flex-column vw-100 vh-100 justify-content-center align-items-center">
        <div className="rounded p-5 shadow-lg bg-body-tertiary d-flex justify-content-center align-items-center">
          <div className="image-box"></div>
          <div className="d-flex flex-column justify-content-center">
          <span className="mb-4 fs-2 text-warning">Register</span>
            <div className="form-outline mb-4">
            <label className="form-label" htmlFor="name">
                Username
              </label>
              <input
                type="text"
                id="name"
                className="form-control text-center"
                placeholder="Enter username here..."
                onChange={(e) => setUsername(e.target.value)}
              />
              
            </div>

            <div className="form-outline mb-4">
            <label className="form-label" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="form-control text-center"
                placeholder="Enter email here..."
                onChange={(e) => setEmail(e.target.value)}
              />
              
            </div>

            <div className="form-outline mb-4">
            <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control text-center"
                placeholder="Enter password here..."
                onChange={(e) => setPassword(e.target.value)}
              />
              
            </div>
            <div className="form-outline mb-4 d-flex flex-column justify-content-center align-items-center">
              <button
                type="button"
                className="btn btn-warning btn-block mb-4"
                onClick={handleSubmit}
              >
                Register
              </button>
              <p>
                Already registered? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Signup;
