import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../auth/Login";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import Mail from "./Mail";

const AuthRouter = () => {
  return (
    <Switch>
      {/* Main Pages */}
      <Route exact path="/" component={Login} />
      <Route exact path="/send/message/:email" component={Mail} />
      <Route exact path="/forgot/password" component={ForgotPassword} />
      <Route
        exact
        path="/reset/password/:token/:userId"
        component={ResetPassword}
      />
    </Switch>
  );
};

export default AuthRouter;
