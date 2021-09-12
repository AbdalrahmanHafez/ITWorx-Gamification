import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../Store";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [user, setUser] = useContext(UserContext);

  let { authed } = user;
  console.log("private route authed: ", authed);

  return <Route {...rest} component={user.authed ? Component : null} />;
};
export default PrivateRoute;
