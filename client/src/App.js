import React from "react";  
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import ActivityInfo from "../src/pages/activity-info/index";
import CreateActivity from "../src/pages/create-activity/index";
import CreateOrSelect from "./pages/create-select-activities";
import DaySchedule from "./pages/day-schedule/index";
import LoginPage from "./pages/login-create-acct/index";
import SelectActivity from "./pages/select-activity";

function App() {
  return (
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>
  );
}

export default App;