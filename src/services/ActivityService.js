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

  subscribe(data) {
    return http.post("/activity/subscribe", data);
  }
  unsubscribe(data) {
    return http.post("/activity/unsubscribe", data);
  }

  querySubscibed(data) {
    return http.post("/activity/querySubscibed", data);
  }
}

export default new ActivityService();
