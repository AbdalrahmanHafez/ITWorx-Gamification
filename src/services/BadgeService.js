import http from "./http-common";

class BadgeService {
  getAll(data) {
    return http.post("/badge/EmployeeGainedBadges", data);
  }

  Create(data) {
    return http.post("/badge/CreateBadge", data);
  }
}

export default new BadgeService();
