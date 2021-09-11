import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Store from "./Store";

export default function App(props) {
  return (
    <Store>
      <Main />
    </Store>
  );
}
