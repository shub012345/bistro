import React from "react";
import "./Signup.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div id="Abody">
      <h1>
        <form class="signup" onsubmit="return false" autocomplete="off">
          <h1>Create account</h1>
          <h2>
            Already have an account? <Link to="/Login"><span className="text-rose-600">Log in</span></Link>
          </h2>

          <div class="signup__field">
            <input
              class="signup__input"
              type="text"
              name="email"
              id="email"
              autoComplete="off"
              required
            />
            <label class="signup__label" for="email">
              Email
            </label>
          </div>

          <div class="signup__field">
            <input
              class="signup__input"
              type="password"
              name="password"
              id="password"
              required
            />
            <label class="signup__label" for="password">
              Password
            </label>

          
          </div>
          <button className="bg-rose-700 -mt-4 hover:bg-rose-600 text-2xl rounded-xl ">
              Sign in
            </button>
        </form>
      </h1>
    </div>
  );
};

export default SignupPage;
