import React from 'react'

function Login() {
  return (
    <>
      <form className="d-flex flex-column vw-100 vh-100 justify-content-center align-items-center">
        <div className="rounded p-5 shadow-lg mb-5 bg-body-tertiary">
        <h6 className="mb-4">Enter your credentials to Login</h6>

        <div className="form-outline mb-4">
          <input type="email" id="email" className="form-control" />
          <label className="form-label" htmlFor="email">
            Email Address
          </label>
        </div>

        <div className="form-outline mb-4">
          <input type="password" id="password" className="form-control" />
          <label className="form-label" htmlFor="password">
            Password
          </label>
        </div>

        <button type="button" className="btn btn-primary btn-block mb-4">
          Login
        </button>
        </div>
      </form>
    </>
  )
}

export default Login;