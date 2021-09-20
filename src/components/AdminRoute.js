import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../Store";

const AdminRoute = ({ component: Component, ...rest }) => {
  const [user, setUser] = useContext(UserContext);

  let { authed, isAdmin } = user;
  console.log("admin route authed: ", isAdmin);

  let letPass = authed && isAdmin;

  return <Route {...rest} component={letPass ? Component : null} />;
};
export default AdminRoute;
