import React, { useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavDropdown } from "react-bootstrap";
import ProfilePic from "./ProfilePic";
import { NavLink, Link, Redirect, useHistory } from "react-router-dom";
import { UserContext } from "../Store";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import PersonIcon from "@mui/icons-material/Person";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import MenuItem from "@mui/material/MenuItem";

import ITWorx_logo from "../Images/ITWorx_logo.png";
import EmployeeService from "../services/EmployeeService";
import { makeStyles, Dialog } from "@material-ui/core";
import AuthenticationService from "../services/AuthenticationService";

function AccountMenu(props) {
  const { open, setOpen, handleClose, logoutHandler } = props;
  const openst = Boolean(open);

  return (
    <React.Fragment>
      <Menu
        anchorEl={open}
        open={openst}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={logoutHandler}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

const Navbar = () => {
  const [user, setUser] = useContext(UserContext);
  const { isAdmin, isDeveloper } = user;
  const [open, setOpen] = React.useState(null);

  const logoutHandler = () => {
    AuthenticationService.logout()
      .then((res) => {
        console.log("ok loggint out");
        window.location.href = "/";
      })
      .catch((err) => console.log(err));
  };
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const getPoints = () => {
    return EmployeeService.getPoints().then((response) => {
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
    if (!user.isAdmin) {
      getPoints();
      getPracticeName();
    }
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

                      <NavDropdown.Item as={Link} to="/LeaderBoardNonDeveloper">
                        Non Developers Ranking
                      </NavDropdown.Item>

                      <NavDropdown.Item as={Link} to="/LeaderBoardDeveloper">
                        Developers Ranking
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
                      {isDeveloper ? (
                        <NavDropdown.Item as={Link} to="/LeaderBoardDeveloper">
                          Developer Ranking
                        </NavDropdown.Item>
                      ) : (
                        <NavDropdown.Item
                          as={Link}
                          to="/LeaderBoardNonDeveloper"
                        >
                          NonDeveloper Ranking
                        </NavDropdown.Item>
                      )}
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

        <ProfilePic points={user.points} onClick={handleClick} />
        {!isAdmin && <span>{user.practiceName + " Practice"}</span>}
        {isAdmin && <span>Admin</span>}
      </nav>
      <AccountMenu
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        logoutHandler={logoutHandler}
      />
    </div>
  );
};

export default Navbar;
