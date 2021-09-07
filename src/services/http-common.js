import axios from "axios";

export default axios.create({
  // baseURL: "https://0mtu5.sse.codesandbox.io/",
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-type": "application/json",
  },
});
