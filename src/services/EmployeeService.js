import http from "./http-common";

class EmployeeService {
  getNonDeveloperRanking() {
    return http.get("/employee/NonDevelopersLeaderBoard");
  }

  getDevelopersRanking() {
    return http.get("/employee/DevelopersLeaderBoard");
  }

  getPoints() {
    return http.get(`/employee/points`, { withCredentials: true });
  }

  getPracticeName() {
    return http.get("/employee/getPracticeName", { withCredentials: true });
  }

  getParticipatingEmployees() {
    return http.get("/employee/getParticipatingEmployees", {
      withCredentials: true,
    });
  }
}

export default new EmployeeService();
