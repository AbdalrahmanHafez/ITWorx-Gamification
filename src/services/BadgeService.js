import http from "./http-common";

class BadgeService {
  empGetAll() {
    return http.get("/badge/EmployeeGainedBadges");
  }

  adminGetBadges() {
    return http.get("/badge/adminGetBadges");
  }

  Create(data) {
    return http.post("/badge/CreateBadge", data);
  }

  editBadge(data) {
    return http.post("/badge/editBadge", data);
  }
}

export default new BadgeService();
