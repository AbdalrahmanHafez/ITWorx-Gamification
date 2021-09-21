import http from "./http-common";

class AuthenticationService {
  signin(email, password, isadminlogin) {
    return http.post(
      process.env.REACT_APP_NODE_Server_URL+"/login",
      {
        email: email,
        password: password,
        isadminlogin: isadminlogin,
      },
      { withCredentials: true, "Access-Control-Allow-Credentials": true }
    );
  }

  logout() {
    return http.post(
      process.env.REACT_APP_NODE_Server_URL+"/logout",
      {},
      { withCredentials: true, "Access-Control-Allow-Credentials": true }
    );
  }
}

export default new AuthenticationService();
