import { useState } from "react";
import "./Login.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email: email,
        password: password,
      });
      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem('token', token);
        navigate('../app/home');
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Logged In",
          showConfirmButton: false,
          timer: 2500,
        });
      
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Error!",
          text: "Email and Password doesn't match with registered users!",
          showConfirmButton: false,
          timer: 2000
        });
        localStorage.removeItem('token')
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <form className="d-flex flex-column vw-100 vh-100 justify-content-center align-items-center">
        <div className="rounded p-5 shadow-lg mb-5 bg-body-tertiary d-flex justify-content-center align-items-center">
        <div className="image-container">
          </div>
          <div className="d-flex flex-column justify-content-center">
          
          <span className="mb-4 fs-2 text-warning">Login</span>

          <div className="form-outline mb-4">
          <label className="form-label" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email here..."
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
              className="form-control"
              placeholder="Enter password here..."
              onChange={(e) => setPassword(e.target.value)}
            />
            
          </div>

          <button
            type="button"
            className="btn btn-warning btn-block mb-4"
            onClick={handleLogin}
          >
            Login
          </button>
          <p>
            If you haven't registered yet? <Link to="/signup">Register</Link>
          </p>
          </div>
          
        </div>
      </form>
    </>
  );
}

export default Login;
