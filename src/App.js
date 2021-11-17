import React from "react";
import "./components/style.css";
import "./components/common.css";

import ProfileJoyrideProvider from "./components//useContext/SidebarProvider";

import Router from "./components/common/Router";

function App() {
  return (
    <ProfileJoyrideProvider>
      <Router />
    </ProfileJoyrideProvider>
  );
}

export default App;
