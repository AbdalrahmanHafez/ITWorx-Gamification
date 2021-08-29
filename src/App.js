import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Slideshow from "./pages/Slideshow";
import Main from "./pages/Main";

const background = require("../Images/bulding_bg_smaller.png");

export default function App() {
  return (
    <>
      <div
        style={{
          // backgroundColor: "gray",
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% auto"
        }}
      >
        <Navbar />
        <Main />
      </div>
    </>
  );
}
