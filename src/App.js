import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./components/style.css";
import "./components/common.css";
import ProfileJoyrideProvider from "./components//useContext/SidebarProvider";
import Router from "./components/common/Router";
import BubblesLoader from "./components/common/loader/BubblesLoader";
import { getLocalStorageToken } from "./redux/action/AuthAction";
import { getUserDetailsAction } from "./redux/action/userAction";
import LoaderImg from "./assets/img/loaderimg.png";
import AuthRouter from "./components/common/AuthRouter";

function App() {
  const token = localStorage.getItem("coach-champion-admin");
  const dispatch = useDispatch();
  const [userLoading, setUserLoading] = useState(false);
  const auth = useSelector((state) => state.Auth);
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
            <div className="h-100vh d-flex justify-content-center align-items-center flex-column ">
              <div className="mb-5">
                <img className="loader-img" src={LoaderImg} alt="LoaderImg" />
              </div>
              <BubblesLoader />
            </div>
          ) : (
            <ProfileJoyrideProvider>
              {auth.token !== "null" && auth.auth === true ? (
                <Router />
              ) : (
                <AuthRouter />
              )}
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
