import React, { useState } from "react";
import { withRouter } from "react-router";
import { EmailRegex } from "./Validation";

const ForgotPassword = ({ history }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const sendEmail = () => {
    setError(true);
    if (email !== "") {
      setEmail(email);
      history.push(`/reset/password/${email}`);
    }
  };
  return (
    <div className="d-flex bg-dark">
      <div className="h-100vh-overflow-auto w-100 ">
        <div className="container h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-lg-6 col-sm-10 col">
              <div className={" bg-151515"}>
                <div className="form text-center mx-auto">
                  <h1 className="form-heading mb-0">Forgot Password</h1>{" "}
                  <p className="fs-16 fw-normal mb-4 mt-3">
                    Enter your email address and we’ll send you a link to reset
                    your password{" "}
                  </p>
                  <div className="my-4">
                    {" "}
                    <input
                      className="w-100  login-input"
                      type="email"
                      placeholder="Email address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="text-danger text-start">
                      {error && email === "" ? (
                        <p>Email is Required</p>
                      ) : error && EmailRegex.test(email) === false ? (
                        <p>Email is not Valid</p>
                      ) : (
                        ""
                      )}
                    </span>
                    <div className="mt-4 pt-2 d-flex justify-content-center text-center">
                      <button
                        onClick={() => sendEmail()}
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
                          Send email
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

export default withRouter(ForgotPassword);
