import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../userDashboard/Dashboard";
import EditProgram from "../dashboardPage/EditProgram";
import Login from "../auth/Login";
import ProfilePage from "../dashboardPage/ProfilePage";
import ProgramPage from "../dashboardPage/ProgramPage";
import SettingPage from "../dashboardPage/SettingPage";

const Router = () => {
  return (
    <div>
      <Switch>
        {/* Main Pages */}
        <Route exact path="/" component={Login} />
        <Route exact path="/admin/dashboard/userlist" component={Dashboard} />
        <Route exact path="/admin/dashboard/profile" component={ProfilePage} />
        <Route
          exact
          path="/admin/dashboard/editprogram"
          component={EditProgram}
        />
        <Route exact path="/admin/dashboard/program" component={ProgramPage} />
        <Route exact path="/admin/dashboard/Setting" component={SettingPage} />
      </Switch>
    </div>
  );
};

export default Router;
