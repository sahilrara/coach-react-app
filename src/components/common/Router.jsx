import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../userDashboard/Dashboard";
import EditProgram from "../Programs/EditProgram";
import Login from "../auth/Login";
import ProfilePage from "../dashboardPage/ProfilePage";
import ProgramPage from "../Programs/ProgramPage";
import SettingPage from "../dashboardPage/SettingPage";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";

const Router = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Switch>
        {/* Main Pages */}
        <Route exact path="/" component={Login} />
        <Route exact path="/admin/dashboard/userlist">
          <Dashboard
            setShow={setShow}
            show={show}
            handleShow={handleShow}
            handleClose={handleClose}
          />
        </Route>
        <Route exact path="/admin/dashboard/profile" component={ProfilePage} />
        <Route
          exact
          path="/admin/dashboard/editprogram"
          component={EditProgram}
        />
        <Route exact path="/admin/dashboard/program">
          <ProgramPage setShow={setShow} show={show} handleShow={handleShow} />
        </Route>
        <Route exact path="/admin/dashboard/Setting" component={SettingPage} />
        <Route exact path="/forgot/password" component={ForgotPassword} />
        <Route exact path="/reset/password" component={ResetPassword} />
      </Switch>
    </div>
  );
};

export default Router;
