import http from "./http-common";

class ActivityService {
  getInfoAll() {
    return http.get("/activity/getInfoAll");
  }

  getNew() {
    return http.get("/activity/getNew");
  }

  getYours(data) {
    return http.post("/activity/getYours", data);
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

  getNeedsReview() {
    return http.get("/activity/getNeedsReview");
  }
  getDoneReview() {
    return http.get("/activity/getDoneReview");
  }
  setAcception(data) {
    return http.post("/activity/setAcception", data);
  }
}

export default new ActivityService();
