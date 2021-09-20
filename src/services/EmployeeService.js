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

  update(id, data) {
    return http.put(`/employee/${id}`, data);
  }

  delete(id) {
    return http.delete(`/employee/${id}`);
  }

  deleteAll() {
    return http.delete(`/employee`);
  }

  findByTitle(title) {
    return http.get(`/employee?title=${title}`);
  }
}

export default new EmployeeService();
