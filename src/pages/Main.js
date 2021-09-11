import React, { useContext } from "react";
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
import EmployeeRanking from "./EmployeeRanking";
import LeaderBoardDepartment from "./LeaderBoardDepartment";
import LeaderBoardPractice from "./LeaderBoardPractice";
import Badges from "./Badges";
import TestPage from "./TestPage";
import PageNotFound from "./PageNotFound";
import EditCurrentCycle from "./EditCurrentCycle";
import ParticipatingEmployees from "./ParticipatingEmployees";
import AddNewCycle from "./AddNewCycle";
import Login from "./Login";
import Navbar from "../components/Navbar";
import PrivateRoute from "../components/PrivateRoute";
import { UserContext } from "../Store";

// Admin
import AddActivity from "./AddActivity";

const Main = () => {
  const [user, setUser] = useContext(UserContext);

  if (!user.authed) return <Redirect to="/login" />;

  return (
    <>
      <BrowserRouter>
        <PrivateRoute exact path="/*" component={Navbar} />
        <Switch>
          {/* The Switch decides which component to show based on the current URL.*/}
          <Route exact path="/" component={Slideshow} />
          <Route exact path="/Login" component={Login} />;
          <Route exact path="/AllActivities" component={AllActivities} />
          <Route exact path="/NewActivities" component={NewActivities} />
          <Route exact path="/YourActivities" component={YourActivities} />
          <Route
            exact
            path="/ActivityView/:activityId"
            component={ActivityView}
          />
          <Route exact path="/Departments" component={Departments} />
          <Route exact path="/ReviewActivity" component={ReviewActivity} />
          <Route exact path="/AddActivity" component={AddActivity} />
          <Route exact path="/EditBadge" component={EditBadge} />
          <Route exact path="/CreateBadge" component={CreateBadge} />
          <Route
            exact
            path="/LeaderBoardPractice"
            component={LeaderBoardPractice}
          />
          <Route
            exact
            path="/LeaderBoardDepartment"
            component={LeaderBoardDepartment}
          />
          <Route exact path="/EmployeeRanking" component={EmployeeRanking} />
          <Route exact path="/TestPage" component={TestPage} />
          <Route exact path="/EditCurrentCycle" component={EditCurrentCycle} />
          <Route exact path="/AddNewCycle" component={AddNewCycle} />
          <Route
            exact
            path="/ParticipatingEmployees"
            component={ParticipatingEmployees}
          />
          <PrivateRoute path="/AddActivity" component={AddActivity} />
          <Route exact path="/Badges" component={Badges} />
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Main;
