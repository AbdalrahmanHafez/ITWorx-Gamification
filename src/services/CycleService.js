import http from "./http-common";

class CycleService {
  getAll() {
    return http.get("/AllActivities");
  }

  getPlanned() {
    return http.get("cycle/getPlanned");
  }

  getYours(data) {
    return http.post("/YourActivities", data);
  }

  get(id) {
    return http.get(`/employee/${id}`);
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

export default new CycleService();
