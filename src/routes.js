import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Wizard from "./Components/Wizard/Wizard";
import Step1 from "./Components/Wizard/steps/Step1";
import Step2 from "./Components/Wizard/steps/Step2";
import Step3 from "./Components/Wizard/steps/Step3";
import DisplayHouse from "./Components/DisplayHouse/DisplayHouse";

export default (
  <Switch>
    <Route exact path="/wizard" component={Wizard} />
    <Route path="/wizard/step1" component={Step1} />
    <Route path="/wizard/step2" component={Step2} />
    <Route path="/wizard/step3" component={Step3} />
    <Route path="/displayhouse/:id" component={DisplayHouse} />
    <Route path="/" component={Dashboard} />
  </Switch>
);
