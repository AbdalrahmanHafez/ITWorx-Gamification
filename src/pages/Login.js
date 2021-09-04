import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Link, NavLink, Redirect } from "react-router-dom";
import MicrosoftLogin from "react-microsoft-login";

const Login = () => {
  const YOUR_CLIENT_ID = "4e78d60f-d1e8-441f-bcff-efae8a5511e3";

  const [msalInstance, onMsalInstanceChange] = useState();

  const loginHandler = (err, data) => {
    console.log("Login Handler", err, data);
    if (!err && data) {
      onMsalInstanceChange(msal);
    }
  };
  const logoutHandler = () => {
    console.log("Logging the User Out");
    msalInstance.logout();
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
          {msalInstance ? (
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
