import React from "react";
import "./Login.css";

import LoginFooter from "../Components/LoginFooter";
import LoginNavbar from "../Components/LoginNavbar";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("./home");
  };

  return (
    <>
      <LoginNavbar />
      <div id="Lbody">
        <form class="login-form Lf" action="">
          <h1>Login</h1>
          <div class="form-input">
            <input
              type="text"
              name="username"
              id="username"
              placeholder=" "
              autocomplete="off"
              class="form-control"
              required
            />
            <label for="username">Username</label>
          </div>
          <div class="form-input">
            <input
              type="password"
              name="password"
              id="password"
              placeholder=" "
              autocomplete="off"
              class="form-control"
              required
            />
            <label for="password">Password</label>
          </div>
          <div className="flex flex-row gap-1">
            <button className="flex flex-col bg-rose-600 px-8 py-1 justify-center hover:opacity-90 text-white rounded-xl">
              Login
            </button>
            <button
              className="flex flex-col text-white hover:opacity-80 justify-center"
              onClick={handleClick}
            >
              continue as guest
            </button>
          </div>
          {/* <button type="submit" class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Login</button> */}
          {/* <p class="copyright">Don't have an account? <a id="Idsignup" href="/About">signup</a></p>
        <p class="copyright"><a id="Idforg" href="https://codepen.io/wbizmo/full/KKoQXMz">forgot password?</a></p> */}
        </form>
      </div>
      <LoginFooter />
    </>
  );
};

export default Login;
