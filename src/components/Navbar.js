import React, { useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavDropdown, MenuItem } from "react-bootstrap";
import ProfilePic from "./ProfilePic";
import { NavLink, Link, Redirect, useHistory } from "react-router-dom";
import { UserContext } from "../Store";

import ITWorx_logo from "../Images/ITWorx_logo.png";
import EmployeeService from "../services/EmployeeService";

const Navbar = () => {
  const [user, setUser] = useContext(UserContext);
  const { isAdmin } = user;
  const getPoints = () => {
    return EmployeeService.getPoints().then(async (response) => {
      console.log("Success ========>", response.data);

      setUser((olduser) => {
        return { ...olduser, points: parseInt(response.data) };
      });
    });
  };

  const getPracticeName = () => {
    return EmployeeService.getPracticeName()
      .then((response) => {
        console.log("Success ========>", response.data);
        setUser((olduser) => {
          return { ...olduser, practiceName: response.data };
        });
      })
      .catch((error) => {
        console.log("Error ========>", error);
      });
  };

  useEffect(() => {
    getPoints();
    getPracticeName();
  }, []);

  return (
    <div>
      <nav
        id="navB"
        className="navbar sticky-top navbar-expand-lg navbar-light bg-light"
      >
        <div className="container-fluid">
          <Link className="" to="/">
            <img className="Logo" src={ITWorx_logo} alt="ITWorx Logo" />
          </Link>
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
              <ul className="navbar-nav nav-left">
                {isAdmin ? (
                  <>
                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title="Activities"
                      menuVariant="dark"
                    >
                      <NavDropdown.Item as={Link} to="/AllActivities">
                        All Activities
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/NewActivities">
                        New Activities
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/AddActivity">
                        Add Activity
                      </NavDropdown.Item>
                    </NavDropdown>

                    <li className="nav-item">
                      <Link
                        className="link nav-item nav-link active"
                        to="/ReviewActivity"
                      >
                        Review Activities
                      </Link>
                    </li>

                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title="Badges"
                      menuVariant="dark"
                    >
                      <NavDropdown.Item as={Link} to="/EditBadge">
                        Edit Badges
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/CreateBadge">
                        Create new Badge
                      </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title="Leader Board"
                      menuVariant="dark"
                    >
                      <NavDropdown.Item as={Link} to="/LeaderBoardDepartment">
                        Department Leader Board
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/LeaderBoardPractice">
                        Practice Leader Board
                      </NavDropdown.Item>

                      <NavDropdown.Item as={Link} to="/EmployeeRanking">
                        Employee Ranking
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title="Cycle"
                      menuVariant="dark"
                    >
                      <NavDropdown.Item as={Link} to="/EditCurrentCycle">
                        Edit Current
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/AddNewCycle">
                        Add New Cycle
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/ParticipatingEmployees">
                        Participating Employees
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
                      <NavDropdown.Item as={Link} to="/AllActivities">
                        All Activities
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/NewActivities">
                        New Activities
                      </NavDropdown.Item>

                      <NavDropdown.Item as={Link} to="/YourActivities">
                        Your Activities
                      </NavDropdown.Item>
                    </NavDropdown>

                    <li className="nav-item">
                      <Link className="link nav-link active" to="/Departments">
                        Department
                      </Link>
                    </li>
                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title="Leader Board"
                      menuVariant="dark"
                    >
                      <NavDropdown.Item as={Link} to="/LeaderBoardDepartment">
                        Department Leader Board
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/LeaderBoardPractice">
                        Practice Leader Board
                      </NavDropdown.Item>

                      <NavDropdown.Item as={Link} to="/EmployeeRanking">
                        Employee Ranking
                      </NavDropdown.Item>
                    </NavDropdown>
                    <li className="nav-item">
                      <Link className="link nav-link active" to="/Badges">
                        Badges
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
        <ProfilePic points={user.points} />
        <span>{user.practiceName + " Practice"}</span>
        {isAdmin && <span>Admin</span>}
      </nav>
    </div>
  );
};

export default Navbar;
