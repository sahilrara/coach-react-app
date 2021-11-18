import React, { useState } from "react";
import { withRouter } from "react-router";
import { HideEye, ShowEye } from "../icons/Icons";
import { EmailRegex, PasswordRegex } from "../common/Validation";
const Login = ({ history }) => {
  const [showPassword, setshowPassword] = useState(false);
  const [error, seterror] = useState(false);
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const InputDataHandler = () => {
    seterror(true);
    if (inputData.email && inputData.password !== "") {
      setInputData(inputData);
      history.push("/admin/dashboard/userlist");
    }
  };
  const path = window.location.pathname;
  return (
    <div className="d-flex bg-dark">
      <div className="h-100vh-overflow-auto w-100 ">
        <div className="container h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-lg-6 col-sm-10 col">
              <div className={`${path === "/" ? "" : "title"} bg-151515 `}>
                <div className="form text-center mx-auto">
                  <h1 className="form-heading mb-0">Log In</h1>

                  <div className="my-4">
                    <input
                      className="w-100 mt-2 login-input"
                      type="text"
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          email: e.target.value,
                        })
                      }
                      placeholder="Username"
                    />
                    <span className="text-danger text-start">
                      {error && inputData.email === "" ? (
                        <p>Email is Required</p>
                      ) : error &&
                        EmailRegex.test(inputData.email) === false ? (
                        <p>Email is not Valid</p>
                      ) : (
                        ""
                      )}
                    </span>

                    <div className="position-relative">
                      {" "}
                      <input
                        id="password-field-2 "
                        type={showPassword ? "text" : "password"}
                        className="w-100 d-block mt-2 login-input"
                        name="password"
                        placeholder="Password"
                        onChange={(e) =>
                          setInputData({
                            ...inputData,
                            password: e.target.value,
                          })
                        }
                      />
                      <span
                        className="eye-icon cursor-pointer"
                        onClick={() => setshowPassword(!showPassword)}
                      >
                        {showPassword ? <ShowEye /> : <HideEye />}
                      </span>
                      <span className="text-danger text-start">
                        {error && inputData.password === "" ? (
                          <p>Password is Required</p>
                        ) : error &&
                          PasswordRegex.test(inputData.password) === false ? (
                          <p>Password is not strong</p>
                        ) : (
                          ""
                        )}
                      </span>
                    </div>
                    <p
                      className="text-end py-2 forgot-password-text cursor-pointer"
                      onClick={() => history.push("/forgot/password")}
                    >
                      Forgot Password?
                    </p>
                    <div className="mt-4 pt-2 d-flex justify-content-center text-center">
                      <button
                        onClick={() => InputDataHandler()}
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
                        <span className="position-absolute skew-text text-white">
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
    </div>
  );
};

export default withRouter(Login);
