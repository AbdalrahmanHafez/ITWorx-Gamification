import axios from "axios";

export default axios.create({
  baseURL: "https://0mtu5.sse.codesandbox.io/",
  headers: {
    "Content-type": "application/json"
  }
});
