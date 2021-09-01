import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import background from "./Images/bulding_bg_smaller.png";

export default function App() {
  return (
    <>
      <div>
        <Navbar />
        <Main />
      </div>
    </>
  );
}
