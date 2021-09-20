import http from "./http-common";

class CycleService {
  getAll() {
    return http.get("/AllActivities");
  }

  getPlanned() {
    return http.get("/cycle/getPlanned");
  }

  getCurrent() {
    return http.get("/cycle/getCurrent");
  }

  editCurrent(data) {
    return http.post("/cycle/editCurrent", data);
  }

  addNew(data) {
    return http.post("/cycle/addNew", data);
  }
}

export default new CycleService();
