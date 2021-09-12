import http from "./http-common";

class ActivityService {
  getInfoAll() {
    return http.get("activity/getInfoAll");
  }

  getNew() {
    return http.get("/NewActivities");
  }

  getYours(data) {
    return http.post("/YourActivities", data);
  }

  getInfo(data) {
    return http.post("/activity/getInfo", data);
  }
}

export default new ActivityService();
