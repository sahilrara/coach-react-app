import React from "react";
import { withRouter } from "react-router";
import SideBar from "../Sidebar";
import AdminHeader from "./AdminHeader";

const Login = ({ history }) => {
  const path = window.location.pathname;
  return (
    <div className="d-flex bg-dark">
      {/* <SideBar /> */}
      <div className="h-100vh-overflow-auto w-100 ">
        <div className="container mb-5 container-xl">
          {/* <AdminHeader /> */}
          <div className={`${path === "/login" ? "" : "title"} bg-151515 `}>
            <div className="container my-5">
              <div className="form text-center mx-auto">
                <h1 className="form-heading mb-0">Log In</h1>

                {/* <p className="fs-16 fw-normal mb-4 mt-3">
                  Have an account?
                  <span
                    className="text-green cursor-pointer"
                    onClick={() => history.push("/signup")}
                  >
                    {" "}
                    Sign up{" "}
                  </span>
                </p> */}
                <div className="my-4">
                  <input
                    className="w-100 mt-2"
                    type="text"
                    placeholder="Username"
                  />

                  <input
                    id="password-field-2"
                    type="password"
                    className="w-100 d-block mt-2"
                    name="password"
                    placeholder="Password"
                  />

                  <span className="fa fa-fw fa-eye field-icon toggle-password"></span>
                  <div className="mt-4 pt-2 d-flex justify-content-center text-center">
                    <button
                      type="button"
                      className="
                      btn
                      ms-2
                      rounded-1px
                      fw-700
                      fs-20 fs-xs-16
                      px-4
                      h-50px
                      w-200 w-xs-130
                      bg-dark
                      btn-skew
                      border-unset
                      d-flex
                      align-items-center
                      justify-content-center
                    "
                    >
                      <span
                        className="position-absolute skew-text text-white"
                        onClick={() =>
                          history.push("/admin/dashboard/userlist")
                        }
                      >
                        Log in
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
