import { React, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

import axios from "axios";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import loginBackground from "../Images/loginBackground.jpg";
import { UserContext } from "../Store";
import AuthenticationService from "../services/AuthenticationService";
import AlertMsg from "../components/AlertMsg";

const loginHandler = () => {
  axios
    .post(
      process.env.REACT_APP_NODE_Server_URL+"/login",
      {
        email: "ahmed_khalid@gmail.com",
        password: "pass123",
        isadminlogin: false,
      },
      { withCredentials: true, "Access-Control-Allow-Credentials": true }
    )
    .then((response) => console.log("Success ========>", response))
    .catch((error) => {
      console.log("Error ========>", error);
    });
};
const loginAdminHandler = () => {
  axios
    .post(
      process.env.REACT_APP_NODE_Server_URL+"/login",
      {
        email: "admin1@gmail.com",
        password: "admin123",
        isadminlogin: true,
      },
      { withCredentials: true, "Access-Control-Allow-Credentials": true }
    )
    .then((response) => console.log("Success ========>", response))
    .catch((error) => {
      console.log("Error ========>", error);
    });
};
const getAdminHandler = () => {
  axios
    .get(process.env.REACT_APP_NODE_Server_URL+"/db", { withCredentials: true })
    .then((response) => console.log("Success ========>", response))
    .catch((error) => {
      console.log("Error ========>", error);
    });
};
const logoutHandler = () => {
  axios
    .post(
      process.env.REACT_APP_NODE_Server_URL+"/logout",
      {},
      { withCredentials: true, "Access-Control-Allow-Credentials": true }
    )
    .then((response) => console.log("Success ========>", response))
    .catch((error) => {
      console.log("Error ========>", error);
    });
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${loginBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login(props) {
  const [user, setUser] = useContext(UserContext);
  const [adminLogin, setadminLogin] = useState(false);
  const [alertOpen, setalertOpen] = useState(false);
  const [alertMsg, setalertMsg] = useState("");

  const lblAdminClick = () => {
    if (adminLogin) setadminLogin(false);
    else setadminLogin(true);
  };

  const popUpAlert = (message) => {
    setalertMsg(message);
    setalertOpen(true);
    setTimeout(() => {
      setalertOpen(false);
    }, 1000);
  };

  const handleSubmit = (event) => {
    console.log(user);
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log("logging", email, password);
    AuthenticationService.signin(email, password, adminLogin)
      .then((response) => {
        console.log("Success ========>", response);
        setUser({ authed: true, isAdmin: adminLogin });
        // window.location.href = "http://localhost:3000/";
        // history.push("/");
        props.history.push("/");
      })
      .catch((error) => {
        console.log("Error ========>", error);
        popUpAlert("Invalid Credentials");
      });
  };

  const classes = useStyles();

  return (
    <>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {adminLogin ? "Admin Sign in" : "Sign in"}
            </Typography>
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                required
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                required
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign in
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs></Grid>
                <Grid item>
                  <Link href="#" variant="body2" onClick={lblAdminClick}>
                    {adminLogin ? "Employee Login?" : "Admin Login?"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  align="center"
                >
                  {"Copyright © "}
                  <Link color="inherit" href="/">
                    ITWorx
                  </Link>{" "}
                  {new Date().getFullYear()}
                  {"."}
                </Typography>
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
      <AlertMsg open={alertOpen} setOpen={setalertOpen} msg={alertMsg} />
    </>
  );
}

// const loginButton = () => {
//   return msalInstance ? (
//     <button onClick={logoutHandler}>Logout</button>
//   ) : (
//     <MicrosoftLogin clientId={clientId} authCallback={loginHandler} />
//   );
// };

export default Login;
