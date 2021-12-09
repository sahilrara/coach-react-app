import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import {
  ResetPasswordAction,
  VerifyEmailAction,
} from "../../redux/action/AuthAction";
import { HideEye, ShowEye } from "../icons/Icons";
import BubblesLoader from "./loader/BubblesLoader";
import Loader from "./loader/Loader";
import { PasswordRegex } from "./Validation";

const ResetPassword = ({ history, match }) => {
  const dispatch = useDispatch();
  const { userId, token } = match.params;
  const [error, setError] = useState(false);
  const [loadingVerify, setLoadingVerify] = useState(false);
  const [loadingVerifyLoading, setLoadingVerifyLoading] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setConfirmPassword] = useState(false);
  const [resetPasswordData, setResetPasswordData] = useState({
    password: "",
    confirmpassword: "",
  });
  const ResetPassword = () => {
    setError(true);
    if (
      !!resetPasswordData.password &&
      resetPasswordData.password === resetPasswordData.confirmpassword
    ) {
      const data = { password: resetPasswordData.password, userId: userId };
      dispatch(ResetPasswordAction(data, setLoadingVerifyLoading, history));
    }
  };

  useEffect(() => {
    const data = { userId: userId, token: token };
    dispatch(VerifyEmailAction(data, setLoadingVerify));
  }, [dispatch]);

  return (
    <div className="d-flex bg-dark">
      <div className="h-100vh-overflow-auto w-100 ">
        <div className="container h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-lg-6 col-sm-10 col">
              <div className={" bg-151515"}>
                <div className="form text-center mx-auto">
                  <h1 className="form-heading mb-0">Reset Password</h1>{" "}
                  {loadingVerify ? (
                    <div className="d-flex justify-content-center align-items-center">
                      <BubblesLoader />
                    </div>
                  ) : (
                    <div className="my-4">
                      <div className="position-relative">
                        <input
                          id="password-field"
                          type={showNewPassword ? "text" : "password"}
                          className="w-100 mt-2 login-input"
                          name="password"
                          placeholder=" New Password"
                          onChange={(e) =>
                            setResetPasswordData({
                              ...resetPasswordData,
                              password: e.target.value,
                            })
                          }
                        />
                        <span className="text-danger text-start">
                          {error && resetPasswordData.password === "" ? (
                            <p>New Password is Required</p>
                          ) : error &&
                            PasswordRegex.test(resetPasswordData.password) ===
                              false ? (
                            <p>New Password is not valid</p>
                          ) : (
                            ""
                          )}
                        </span>
                        <span
                          className="reset-eye-icon cursor-pointer"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                        >
                          {showNewPassword ? <ShowEye /> : <HideEye />}
                        </span>
                      </div>
                      <div className="position-relative">
                        <input
                          id="password-field-2"
                          type={showConfirmPassword ? "text" : "password"}
                          className="w-100 mt-2 login-input"
                          name="password"
                          placeholder="Confirm Password"
                          onChange={(e) =>
                            setResetPasswordData({
                              ...resetPasswordData,
                              confirmpassword: e.target.value,
                            })
                          }
                        />
                        <span className="text-danger text-start">
                          {error && resetPasswordData.confirmpassword === "" ? (
                            <p>Confirm Password is Required</p>
                          ) : error &&
                            PasswordRegex.test(
                              resetPasswordData.confirmpassword
                            ) === false ? (
                            <p>Confirm Password is not valid</p>
                          ) : error &&
                            resetPasswordData.confirmpassword !==
                              resetPasswordData.password ? (
                            <p>Password not match</p>
                          ) : (
                            ""
                          )}
                        </span>
                        <span
                          className="reset-eye-icon cursor-pointer"
                          onClick={() =>
                            setConfirmPassword(!showConfirmPassword)
                          }
                        >
                          {showConfirmPassword ? <ShowEye /> : <HideEye />}
                        </span>
                      </div>
                      <div className="mt-4 pt-2 d-flex justify-content-center text-center">
                        <button
                          onClick={() => ResetPassword()}
                          type="button"
                          className="btn ms-2 rounded-1px fw-700 fs-20 fs-xs-16 px-4 h-50px w-200 w-xs-150 bg-dark btn-skew border-unset d-flex align-items-center justify-content-center"
                        >
                          <span className="position-absolute skew-text text-white">
                            {loadingVerifyLoading ? (
                              <Loader />
                            ) : (
                              "Reset Password"
                            )}
                          </span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ResetPassword);
