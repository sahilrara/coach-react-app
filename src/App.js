import React from "react";
import "./components/style.css";
import "./components/common.css";
import Dashboard from "./components/dashboardPage/Dashboard";
import ProfileJoyrideProvider from "./components//useContext/SidebarProvider";
import EditProgram from "./components/dashboardPage/EditProgram";

import ProfilePage from "./components/dashboardPage/ProfilePage";
import SettingPage from "./components/dashboardPage/SettingPage";
import ProgramPage from "./components/dashboardPage/ProgramPage";
import Router from "./components/common/Router";

function App() {
  return (
    <ProfileJoyrideProvider>
      <Router />
      {/* <Dashboard /> */}
      {/* <ProgramPage /> */}
      {/* <EditProgram /> */}
      {/* <ProfilePage /> */}
      {/* <SettingPage /> */}
    </ProfileJoyrideProvider>
  );
}

export default App;
