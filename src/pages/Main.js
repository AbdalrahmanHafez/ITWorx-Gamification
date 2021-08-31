import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Slideshow";
import AllActivities from "./AllActivities";
import NewActivities from "./NewActivities";
import YourActivities from "./YourActivities";

import Departments from "./Departments";
import Practice from "./Practice";
import LeaderBoardAll from "./LeaderBoardAll";
import LeaderBoardDepartment from "./LeaderBoardDepartment";
import LeaderBoardPractice from "./LeaderBoardPractice";
import Badges from "./Badges";
import TestPage from "./TestPage";

const Main = () => {
  return (
    <Switch>
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/AllActivities" component={AllActivities}></Route>
      <Route exact path="/NewActivities" component={NewActivities}></Route>
      <Route exact path="/YourActivities" component={YourActivities}></Route>

      <Route exact path="/Departments" component={Departments}></Route>
      <Route exact path="/Practice" component={Practice}></Route>
      <Route
        exact
        path="/LeaderBoardPractice"
        component={LeaderBoardPractice}
      ></Route>
      <Route
        exact
        path="/LeaderBoardDepartment"
        component={LeaderBoardDepartment}
      ></Route>
      <Route exact path="/LeaderBoardAll" component={LeaderBoardAll}></Route>

      <Route exact path="/Badges" component={Badges}></Route>

      <Route exact path="/TestPage" component={TestPage}></Route>
    </Switch>
  );
};

export default Main;
