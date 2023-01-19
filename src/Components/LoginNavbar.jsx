import React from "react";
import { Link } from "react-router-dom";

const LoginNavbar = () => {
  return (
    <>
      <div className="">
        <div className="row">
          <div className="col-12 mx-auto">
            <nav className="navbar navbar-expand-lg bg-white h-12">
              <Link className="navbar-brand" to="/">
                <img
                  src="images/bistro1.png"
                  alt="bistro logo"
                  height="100"
                  width="140"
                />
              
              </Link>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/home">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/explore">
                      Explore Now
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link" to="/Login">
                      Login
                    </Link>
                   
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/About">
                      Sign up
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginNavbar;
