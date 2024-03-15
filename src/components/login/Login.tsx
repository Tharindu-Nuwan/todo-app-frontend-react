import { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  const handleClick = () => {
    
  }

  const [token, setToken] = useState('');

  return (
    <>
      <form className="d-flex flex-column vw-100 vh-100 justify-content-center align-items-center">
        <div className="rounded p-5 shadow-lg mb-5 bg-body-tertiary">
        <h6 className="mb-4">Enter your credentials to Login</h6>

        <div className="form-outline mb-4">
          <input type="email" id="email" className="form-control text-center" placeholder='Enter your email here...'/>
          <label className="form-label" htmlFor="email">
            Email Address
          </label>
        </div>

        <div className="form-outline mb-4">
          <input type="password" id="password" className="form-control text-center" placeholder='Enter password here...'/>
          <label className="form-label" htmlFor="password">
            Password
          </label>
        </div>

        <button type="button" className="btn btn-primary btn-block mb-4" onClick={handleClick}>
          Login
        </button>
        <p>If you haven't registered yet? <Link to="/signup">Register</Link></p>
        </div>
      </form>
    </>
  )
}

export default Login;