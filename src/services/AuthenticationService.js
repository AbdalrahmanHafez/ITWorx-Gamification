import http from "./http-common";

class AuthenticationService {
  signin(email, password, isadminlogin) {
    return http.post(
      "http://localhost:8080/login",
      {
        email: email,
        password: password,
        isadminlogin: isadminlogin,
      },
      { withCredentials: true, "Access-Control-Allow-Credentials": true }
    );
  }
}

export default new AuthenticationService();
