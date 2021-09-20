import http from "./http-common";

class DepartmentService {
  getAll(data) {
    return http.post("/department/EmployeeDepartments", data);
  }
  getRanking() {
    return http.get("/department/DepartmentRanking");
  }
}

export default new DepartmentService();
