import React, { useContext, useEffect } from "react";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import Slideshow from "./Slideshow";
import AllActivities from "./AllActivities";
import NewActivities from "./NewActivities";
import YourActivities from "./YourActivities";
import ActivityView from "./ActivityView";
import EditBadge from "./EditBadge";
import CreateBadge from "./CreateBadge";
import ReviewActivity from "./ReviewActivity";
import Departments from "./Departments";
import LeaderBoardNonDeveloper from "./LeaderBoardNonDeveloper";
import LeaderBoardDepartment from "./LeaderBoardDepartment";
import LeaderBoardPractice from "./LeaderBoardPractice";
import Badges from "./Badges";
import TestPage from "./TestPage";
import PageNotFound from "./PageNotFound";
import EditCurrentCycle from "./EditCurrentCycle";
import ParticipatingEmployees from "./ParticipatingEmployees";
import AddNewCycle from "./AddNewCycle";
import LeaderBoardDeveloper from "./LeaderBoardDeveloper";

import Login from "./Login";
import Navbar from "../components/Navbar";
import PrivateRoute from "../components/PrivateRoute";

import { UserContext } from "../Store";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

// Admin
import AddActivity from "./AddActivity";
import AdminRoute from "../components/AdminRoute";

const Main = () => {
  const [user, setUser] = useContext(UserContext);

  let authcookie = Cookies.get("auth");
  if (authcookie == undefined) {
    // window.location.replace("/login");
    return <Redirect to="/login" />;
  } else {
    // Don't really know why but this works
    authcookie = authcookie.slice(2).split(".").slice(0, 3).join(".");
    const { isAdmin, isDeveloper } = jwt.verify(authcookie, "gutreohwgcrewp");

    // setUser({ ...user, authed: true, isAdmin: isAdmin });
    user.authed = true;
    user.isAdmin = isAdmin;
    user.isDeveloper = isDeveloper;
  }

  return (
    <>
      <BrowserRouter>
        <PrivateRoute exact path="/*" component={Navbar} />
        {/* <Route exact path="/*" component={Navbar} /> */}
        <Switch>
          {/* The Switch decides which component to show based on the current URL.*/}
          <PrivateRoute exact path="/" component={Slideshow} />
          <Route exact path="/Login" component={Login} />;
          <PrivateRoute exact path="/AllActivities" component={AllActivities} />
          <PrivateRoute exact path="/NewActivities" component={NewActivities} />
          <PrivateRoute
            exact
            path="/YourActivities"
            component={YourActivities}
          />
          <PrivateRoute
            exact
            path="/ActivityView/:activityId"
            component={ActivityView}
          />
          <PrivateRoute exact path="/Departments" component={Departments} />
          <PrivateRoute
            exact
            path="/ReviewActivity"
            component={ReviewActivity}
          />
          <AdminRoute exact path="/AddActivity" component={AddActivity} />
          <AdminRoute exact path="/EditBadge" component={EditBadge} />
          <AdminRoute exact path="/CreateBadge" component={CreateBadge} />
          <PrivateRoute
            exact
            path="/LeaderBoardPractice"
            component={LeaderBoardPractice}
          />
          <PrivateRoute
            exact
            path="/LeaderBoardDepartment"
            component={LeaderBoardDepartment}
          />
          <PrivateRoute
            exact
            path="/LeaderBoardDeveloper"
            component={LeaderBoardDeveloper}
          />
          <PrivateRoute
            exact
            path="/LeaderBoardNonDeveloper"
            component={LeaderBoardNonDeveloper}
          />
          <AdminRoute exact path="/TestPage" component={TestPage} />
          <AdminRoute
            exact
            path="/EditCurrentCycle"
            component={EditCurrentCycle}
          />
          <AdminRoute exact path="/AddNewCycle" component={AddNewCycle} />
          <PrivateRoute
            exact
            path="/ParticipatingEmployees"
            component={ParticipatingEmployees}
          />
          <PrivateRoute exact path="/Badges" component={Badges} />
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Main;
