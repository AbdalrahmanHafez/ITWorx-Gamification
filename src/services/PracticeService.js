import http from "./http-common";

class PracticeService {
  getRanking() {
    return http.get("/practice/PracticeRanking");
  }
}

export default new PracticeService();
