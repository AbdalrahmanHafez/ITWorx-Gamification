import { React, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { Link, NavLink, Redirect } from "react-router-dom";
import { AuthContext } from "../Store";

import MicrosoftLogin from "react-microsoft-login";
import ActionBugReport from "material-ui/svg-icons/action/bug-report";

const Login = () => {
  const [auth, setauth] = useContext(AuthContext);
  const YOUR_CLIENT_ID = "4e78d60f-d1e8-441f-bcff-efae8a5511e3";
  const [msalInstance, onMsalInstanceChange] = useState();

  const loginHandler = (err, data, msal) => {
    console.log("Login Handler", err, data);
    if (!err && data) {
      // onMsalInstanceChange(msal);
      setauth({ msalInstance: msal });
    }
  };
  const logoutHandler = () => {
    console.log("Logging the User Out");
    // msalInstance.logout();
    auth.msalInstance.logout();
  };

  return (
    <div className="container my-5">
      <div
        className="card mx-5"
        style={{
          filter: "drop-shadow(0 0 0.2rem #000000)",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ height: "10vh" }}></div>

          <h1>Authentication</h1>
          {auth.msalInstance ? (
            <Button className="m-3" onClick={logoutHandler}>
              Logout
            </Button>
          ) : (
            <MicrosoftLogin
              clientId={YOUR_CLIENT_ID}
              authCallback={loginHandler}
              redirectUri="http://localhost:3000/login"
            />
          )}
          {/* <MicrosoftLogin
            clientId={YOUR_CLIENT_ID}
            authCallback={authHandler}
          />
          <Button className="m-3" onClick={logoutHandle}>
            Logout
          </Button> */}
          <div style={{ height: "10vh" }}></div>
        </div>
        <Form className="mx-5" action="http://localhost:8080/Login"
          method="POST">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="font-weight-bold pe-2">Sign in as</Form.Label>
            <select name="type">
              <option value="Admin">Admin</option>
              <option value="Employee">Employee</option>
            </select>
          </Form.Group>
          <Button className="mb-3" style={{ textAlign: "center" }} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

// const loginButton = () => {
//   return msalInstance ? (
//     <button onClick={logoutHandler}>Logout</button>
//   ) : (
//     <MicrosoftLogin clientId={clientId} authCallback={loginHandler} />
//   );
// };

export default Login;
