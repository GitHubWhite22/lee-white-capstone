import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  return (
    <>
      <section className="h-100" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <link href="signin.css" rel="stylesheet" />
                <form className="form-signin">
                  <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                  <label htmlFor="inputEmail" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Email address"
                    required=""
                    autofocus=""
                  />
                  <label htmlFor="inputPassword" className="sr-only">
                    Password
                  </label>
                  <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    required=""
                  />
                  <div className="checkbox mb-3">
                    <label>
                      <input type="checkbox" defaultValue="remember-me" />{" "}
                      Remember me
                    </label>
                  </div>
                  <Link to="/">
                    <button
                      className="btn btn-success rounded-pill my-2"
                      type="submit"
                    >
                      Login
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Login;
