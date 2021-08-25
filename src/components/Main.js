import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Slideshow";
import AllActivities from "./AllActivities";
import NewActivities from "./NewActivities";
import YourActivities from "./YourActivities";

const Main = () => {
  return (
    <Switch>
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/AllActivities" component={AllActivities}></Route>
      <Route exact path="/NewActivities" component={NewActivities}></Route>
      <Route exact path="/YourActivities" component={YourActivities}></Route>
    </Switch>
  );
};

export default Main;
