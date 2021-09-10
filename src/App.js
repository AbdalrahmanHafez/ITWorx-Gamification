import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import background from "./Images/bulding_bg_smaller.png";

import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
export default function App(props) {
  return (
    <>
      <Route
        render={({ location }) =>
          ["/login"].includes(location.pathname) ? null : <Navbar />
        }
      />
      <Main />
    </>
  );
}
