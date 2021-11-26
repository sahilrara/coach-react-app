import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./components/style.css";
import "./components/common.css";
import ProfileJoyrideProvider from "./components//useContext/SidebarProvider";
import Router from "./components/common/Router";
import BubblesLoader from "./components/common/loader/BubblesLoader";
import { getLocalStorageToken } from "./redux/action/AuthAction";
import { getUserDetailsAction } from "./redux/action/userAction";
import ChampLogo from "./assets/img/coachlogo.png";

function App() {
  const token = localStorage.getItem("coach-champion-admin");
  const dispatch = useDispatch();
  const [userLoading, setUserLoading] = useState(false);

  useEffect(() => {
    if (token) {
      const value = "me";
      dispatch(getLocalStorageToken(token));
      dispatch(getUserDetailsAction(setUserLoading, value));
    }
  }, [token, dispatch]);

  return (
    <div>
      {!!token ? (
        <>
          {userLoading ? (
            <div className="h-100vh d-flex justify-content-center align-items-center flex-column w-50">
              <div className="mb-5">
                <img src={ChampLogo} alt="" />
              </div>
              <BubblesLoader />
            </div>
          ) : (
            <ProfileJoyrideProvider>
              <Router />
            </ProfileJoyrideProvider>
          )}
        </>
      ) : (
        <ProfileJoyrideProvider>
          <Router />
        </ProfileJoyrideProvider>
      )}
    </div>
  );
}

export default App;
