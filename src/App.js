import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Navbar from "./components/Navbar";

const bg = require("../../Images/bulding_bg_smaller.png");

export default function App() {
  return (
    <>
      <div className="App" styles={{ backgroundImage: `${bg}` }}>
        <Navbar />
      </div>

      <img src={bg} />
    </>
  );
}
