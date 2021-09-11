import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Store from "./Store";
import Login from "./pages/Login";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";

export default function App(props) {
  return (
    <Store>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={Main} />
      </Switch>
      {/* <Main /> */}
    </Store>
  );
}
