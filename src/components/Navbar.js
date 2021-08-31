import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavDropdown, MenuItem } from "react-bootstrap";
import ProfilePic from "./ProfilePic";

import ITWorx_logo from "../Images/ITWorx_logo.png";

const isAdmin = true;

const Navbar = () => {
  return (
    <div>
      <nav
        id="navB"
        className="navbar sticky-top navbar-expand-lg navbar-light bg-light"
      >
        <div className="container-fluid">
          <a href="/">
            <img className="Logo" src={ITWorx_logo} alt="ITWorx Logo" />
          </a>

          <div className="rectangle w-100">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">  */}
              <ul className="navbar-nav nav-left">
                {isAdmin ? (
                  <>
                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title="Activities"
                      menuVariant="dark"
                    >
                      <NavDropdown.Item href="/AllActivities">
                        All Activities
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/NewActivities">
                        New Activities
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/AddActivity">
                        Add Activity
                      </NavDropdown.Item>
                    </NavDropdown>

                    <li className="nav-item">
                      <a
                        className="nav-link active test"
                        aria-current="page"
                        href="/ReviewActivity"
                      >
                        Review Activities
                      </a>
                    </li>

                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title="Badges"
                      menuVariant="dark"
                    >
                      <NavDropdown.Item href="/EditBadge">
                        Edit Badges
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/CreateBadge">
                        Create new Badge
                      </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title="Leader Board"
                      menuVariant="dark"
                    >
                      <NavDropdown.Item href="/LeaderBoardDepartment">
                        Department Leader Board
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/LeaderBoardPractice">
                        Practice Leader Board
                      </NavDropdown.Item>

                      <NavDropdown.Item href="/EmployeeRanking">
                        Employee Ranking
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
                ) : (
                  <>
                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title="Activities"
                      menuVariant="dark"
                    >
                      <NavDropdown.Item href="/AllActivities">
                        All Activities
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/NewActivities">
                        New Activities
                      </NavDropdown.Item>

                      <NavDropdown.Item href="/YourActivities">
                        Your Activities
                      </NavDropdown.Item>
                    </NavDropdown>

                    <li className="nav-item">
                      <a
                        className="nav-link active test"
                        aria-current="page"
                        href="/Departments"
                      >
                        Department
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        className="nav-link active test"
                        aria-current="page"
                        href="/Practice"
                      >
                        Practice
                      </a>
                    </li>
                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title="Leader Board"
                      menuVariant="dark"
                    >
                      <NavDropdown.Item href="/LeaderBoardDepartment">
                        Department Leader Board
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/LeaderBoardPractice">
                        Practice Leader Board
                      </NavDropdown.Item>

                      <NavDropdown.Item href="/EmployeeRanking">
                        Employee Ranking
                      </NavDropdown.Item>
                    </NavDropdown>
                    <li className="nav-item">
                      <a
                        className="nav-link active test"
                        aria-current="page"
                        href="/Badges"
                      >
                        Badges
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
        <ProfilePic />
        <span>practice name</span>
      </nav>
    </div>
  );
};

export default Navbar;
