import React, { useState } from "react";
import { withRouter } from "react-router";
import { useDispatch } from "react-redux";
import { HideEye, ShowEye } from "../icons/Icons";
import { EmailRegex, PasswordRegex } from "../common/Validation";
import { loginAction } from "../../redux/action/AuthAction";
import Loader from "../common/loader/Loader";

const LoginForm = ({ history }) => {
  const dispatch = useDispatch();
  const [showPassword, setshowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const submitLoginDetails = () => {
    setError(true);
    if (
      !!loginDetails.email &&
      !!loginDetails.password &&
      EmailRegex.test(loginDetails.email) === true &&
      PasswordRegex.test(loginDetails.password) === true
    ) {
      setError(false);
      dispatch(loginAction(loginDetails, setLoading, history));
    }
  };

  return (
    <div className="form text-center mx-auto">
      <h1 className="form-heading mb-0">Log In</h1>

      <div className="my-4">
        <input
          className="w-100 mt-2 login-input"
          type="text"
          onChange={(e) =>
            setLoginDetails({
              ...loginDetails,
              email: e.target.value,
            })
          }
          placeholder="Username@gmail.com"
        />
        <span className="text-danger text-start">
          {error && loginDetails.email === "" ? (
            <p>Email is Required</p>
          ) : error && EmailRegex.test(loginDetails.email) === false ? (
            <p>Email is not Valid</p>
          ) : (
            ""
          )}
        </span>

        <div className="position-relative">
          <input
            id="password-field-2 "
            type={showPassword ? "text" : "password"}
            className="w-100 d-block mt-2 login-input"
            name="password"
            placeholder="Password"
            onChange={(e) =>
              setLoginDetails({
                ...loginDetails,
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
            {error && loginDetails.password === "" ? (
              <p>Password is Required</p>
            ) : error && PasswordRegex.test(loginDetails.password) === false ? (
              <p> Password Must be storng</p>
            ) : error && loginDetails.password.length < 8 ? (
              <p>Password must be at least 8 characters long</p>
            ) : null}
          </span>
        </div>
        <p
          className="text-end py-2 forgot-password-text cursor-pointer"
          onClick={() => history.push("/forgot/password")}
        >
          Forgot Password?
        </p>
        <span className="fa fa-fw fa-eye field-icon toggle-password"></span>
        <div className="mt-4 pt-2 d-flex justify-content-center text-center">
          <button
            type="button"
            className=" btn ms-2 rounded-1px fw-700 fs-20 fs-xs-16 px-4 h-50px w-200 w-xs-130 bg-dark btn-skew border-unset d-flex align-items-center justify-content-center"
            onClick={() => submitLoginDetails()}
            disabled={loading}
          >
            <span className="position-absolute skew-text text-white">
              {loading ? <Loader /> : "Log in"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default withRouter(LoginForm);
