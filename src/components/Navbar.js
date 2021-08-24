import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavDropdown } from "react-bootstrap";
import ProfilePic from "./ProfilePic";

const profile_pic = require("../../Images/profile_pic.png");

const Navbar = () => {
  return (
    <div>
      <nav id="navB" class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a href="/">
            <img
              class="Logo"
              src={require("../../Images/ITWorx_logo.png")}
              alt="ITWorx Logo"
            />
          </a>

          <div className="rectangle w-100">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">  */}
              <ul class="navbar-nav nav-left">
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Activities"
                  menuVariant="dark"
                >
                  <NavDropdown.Item href="#action/3.2">
                    All Activities
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    New Activities
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#action/3.4">
                    Your Activities
                  </NavDropdown.Item>
                </NavDropdown>

                <li class="nav-item">
                  <a class="nav-link active test" aria-current="page" href="#">
                    Department
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active test" aria-current="page" href="#">
                    Practice
                  </a>
                </li>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Leader Board"
                  menuVariant="dark"
                >
                  <NavDropdown.Item href="#action/3.2">
                    Department Leader Board
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Practice Leader Board
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#action/3.4">
                    All Leader Board
                  </NavDropdown.Item>
                </NavDropdown>
                <li class="nav-item">
                  <a class="nav-link active test" aria-current="page" href="#">
                    Badges
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ProfilePic />
      </nav>
    </div>
  );
};

export default Navbar;
