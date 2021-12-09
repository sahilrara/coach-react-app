import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../userDashboard/Dashboard";
import EditProgram from "../Programs/EditProgram";
import Login from "../auth/Login";
import ProfilePage from "../profile/ProfilePage";
import ProgramPage from "../Programs/ProgramPage";
import SettingPage from "../setting/SettingPage";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import Mail from "./Mail";
import Contact from "../Contact/Contact";
import Gallery from "../gallery/Gallery";
import EditUser from "../userDashboard/EditUser";

const Router = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Switch>
        {/* Main Pages */}
        <Route exact path="/" component={Login} />
        <Route exact path="/send/message/:email" component={Mail} />
        <Route exact path="/admin/dashboard/userlist">
          <Dashboard
            setShow={setShow}
            show={show}
            handleShow={handleShow}
            handleClose={handleClose}
          />
        </Route>
        <Route
          exact
          path="/admin/dashboard/edit-user/userlist/:userId"
          component={EditUser}
        />
        <Route exact path="/admin/dashboard/contact" component={Contact} />
        <Route exact path="/admin/dashboard/profile" component={ProfilePage} />
        <Route
          exact
          path="/admin/dashboard/edit/program/:programId"
          component={EditProgram}
        />
        <Route exact path="/admin/dashboard/gallery" component={Gallery} />
        <Route
          exact
          path="/admin/dashboard/create/program"
          component={EditProgram}
        />
        <Route
          exact
          path="/admin/dashboard/userlist/create-user/programs/:userId"
          component={EditProgram}
        />
        <Route
          exact
          path="/admin/dashboard/userlist/edit-user/programs/:userId/:programId"
          component={EditProgram}
        />
        <Route exact path="/admin/dashboard/program">
          <ProgramPage setShow={setShow} show={show} handleShow={handleShow} />
        </Route>
        <Route exact path="/admin/dashboard/Setting" component={SettingPage} />
        <Route exact path="/forgot/password" component={ForgotPassword} />
        <Route
          exact
          path="/reset/password/:token/:userId"
          component={ResetPassword}
        />
      </Switch>
    </div>
  );
};

export default Router;
