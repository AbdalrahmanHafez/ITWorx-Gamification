import http from "./http-common";

class EmployeeService {
  getRanking() {
    return http.get("/EmployeeRanking");
  }

  get(id) {
    return http.get(`/employee/${id}`);
  }

  create(data) {
    return http.post("/employee", data);
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
