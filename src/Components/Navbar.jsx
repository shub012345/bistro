import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="">
        <div className="row">
          <div className="col-12 mx-auto">
            <nav className="navbar navbar-expand-lg ">
              <Link className="navbar-brand" to="/">
              <img src="images/bistro1.png" alt="image" height="100" width="140"/>
              {/* bistro */}
              </Link>
             
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav flex flex-end justify-end">
                  <li className="nav-item active">
                    <Link className="nav-link text-white" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="#">
                      Add restaurant
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link text-white" to="/Login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/About">
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

export default Navbar;
