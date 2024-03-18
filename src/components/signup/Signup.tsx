import { FormEvent, useState } from "react";
import "./Signup.css";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
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

      if(response.status === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You have been registered successfully",
          showConfirmButton: false,
          timer: 2500
        });
        navigate('/login');
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Error!",
          text: "Enter valid email or password must contain minimum 4 charactors",
          showConfirmButton: false,
          timer: 2000
        });
      } 
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <form className="d-flex flex-column vw-100 vh-100 justify-content-center align-items-center">
        <div className="rounded p-5 shadow-lg mb-5 bg-body-tertiary">
          <h6 className="mb-4">Enter your credentials to register</h6>
          <div className="form-outline mb-4 d-flex flex-column justify-content-center align-items-center">
            <input
              type="text"
              id="name"
              className="form-control text-center"
              placeholder="Enter username here..."
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className="form-label" htmlFor="name">
              Username
            </label>
          </div>

          <div className="form-outline mb-4 d-flex flex-column justify-content-center align-items-center">
            <input
              type="email"
              id="email"
              className="form-control text-center"
              placeholder="Enter email here..."
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="form-label" htmlFor="email">
              Email Address
            </label>
          </div>

          <div className="form-outline mb-4 d-flex flex-column justify-content-center align-items-center">
            <input
              type="password"
              id="password"
              className="form-control text-center"
              placeholder="Enter password here..."
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="form-label" htmlFor="password">
              Password
            </label>
          </div>
          <div className="form-outline mb-4 d-flex flex-column justify-content-center align-items-center">
          <button
            type="button"
            className="btn btn-primary btn-block mb-4"
            onClick={handleSubmit}
          >
            Register
          </button>
          <p>Already registered? <Link to="/login">Login</Link></p>
        </div>
        </div>
      </form>
    </>
  );
}

export default Signup;
