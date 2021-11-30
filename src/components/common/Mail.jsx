import React from "react";
import { withRouter } from "react-router";

const Mail = ({ history }) => {
  return (
    <div className="bg-dark h-100vh">
      <div class="d-flex align-items-center flex-grow-1 justify-content-center flex-column">
        <div class="container my-5">
          <div class="form text-center mx-auto">
            <h1 class="form-heading mb-0">Welcome Coach Champion</h1>
            <p class="fs-16 fw-normal mb-4 mt-3">Get Started</p>
            <p class="fs-16 fw-normal mb-4 mt-3">E-mail Sent Successfully</p>
            <p class="fs-16 fw-normal mb-4 mt-3">
              A reset email has been sent to <span></span> Please look for the
              reset password email email in your inbox and click the link in
              that email{" "}
            </p>
            <p class="fs-16 fw-normal mb-4 mt-3">
              Please check your email for further process.
            </p>
            <div class="mt-4 pt-2 d-flex justify-content-center text-center ">
              <button
                onClick={() => history.push("/")}
                type="button"
                class=" btn ms-2 rounded-1px fw-700 fs-20 fs-xs-16 px-4 h-50px w-200 w-xs-130 bg-dark btn-skew border-unset d-flex align-items-center justify-content-center"
              >
                <span class="position-absolute skew-text text-white">
                  Go To Home
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Mail);
