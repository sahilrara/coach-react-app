import React from "react";
import "./components/style.css";
import "./components/common.css";
import Dashboard from "./components/dashboardPage/Dashboard";
import ProfileJoyrideProvider from "./components//useContext/SidebarProvider";
import EditProgram from "./components/dashboardPage/EditProgram";

function App() {
  return (
    <ProfileJoyrideProvider>
      {" "}
      <Dashboard />
      {/* <EditProgram /> */}
    </ProfileJoyrideProvider>
  );
}

export default App;
