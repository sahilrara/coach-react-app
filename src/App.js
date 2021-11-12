import React from "react";

import "./components/common.css";
import Dashboard from "./components/dashboardPage/Dashboard";
import ProfileJoyrideProvider from "./components//useContext/SidebarProvider";

function App() {
  return (
    <ProfileJoyrideProvider>
      <Dashboard />
    </ProfileJoyrideProvider>
  );
}

export default App;
