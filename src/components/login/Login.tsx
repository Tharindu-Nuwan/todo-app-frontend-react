import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

interface LoginProps {
  onLogin: (token: string) => void;
}

function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email: email,
        password: password,
      });
      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem('token', token);
        onLogin(token);

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
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <form className="d-flex flex-column vw-100 vh-100 justify-content-center align-items-center">
        <div className="rounded p-5 shadow-lg mb-5 bg-body-tertiary">
          <h6 className="mb-4">Enter your credentials to Login</h6>

          <div className="form-outline mb-4">
            <input
              type="email"
              id="email"
              className="form-control text-center"
              placeholder="Enter your email here..."
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="form-label" htmlFor="email">
              Email Address
            </label>
          </div>

          <div className="form-outline mb-4">
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

          <button
            type="button"
            className="btn btn-primary btn-block mb-4"
            onClick={handleLogin}
          >
            Login
          </button>
          <p>
            If you haven't registered yet? <Link to="/signup">Register</Link>
          </p>
        </div>
      </form>
    </>
  );
}

export default Login;
