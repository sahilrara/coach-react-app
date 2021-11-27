import React, { useState } from "react";
import { ShowEye, HideEye } from "../icons/Icons";
import { PasswordRegex } from "../common/Validation";

const ChangePasswordForm = () => {
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [changePasswordDetails, setChangePasswordDetails] = useState({
    password: "",
    newPassword: "",
  });

  const SettingDataHandler = () => {
    setError(true);
    if (
      changePasswordDetails.password !== "" &&
      changePasswordDetails.newPassword !== "" &&
      confirmPassword !== "" &&
      changePasswordDetails.newPassword === confirmPassword
    ) {
      setError(false);
    }
  };

  return (
    <div className="edit-form px-4 pt-4">
      <div className="row">
        <div className="col-lg-6 col-12 mt-2 position-relative">
          <input
            className="w-100 edit-input"
            type={showPassword ? "text" : "password"}
            placeholder="Password:"
            onChange={(e) =>
              setChangePasswordDetails({
                ...changePasswordDetails,
                password: e.target.value,
              })
            }
          />
          <span
            className="eye-icon cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <ShowEye /> : <HideEye />}
          </span>
          <span className="text-danger">
            {error && changePasswordDetails.password === "" ? (
              <p>Password No is Required</p>
            ) : error &&
              PasswordRegex.test(changePasswordDetails.password) === false ? (
              <p>Password not strong</p>
            ) : (
              ""
            )}
          </span>
        </div>
        <div className="col-lg-6 col-12 mt-2 position-relative">
          <input
            className="w-100 edit-input"
            type={newPassword ? "text" : "password"}
            placeholder="New Password:"
            onChange={(e) =>
              setChangePasswordDetails({
                ...changePasswordDetails,
                newpassword: e.target.value,
              })
            }
          />
          <span
            className="eye-icon cursor-pointer"
            onClick={() => setNewPassword(!newPassword)}
          >
            {newPassword ? <ShowEye /> : <HideEye />}
          </span>
          <span className="text-danger">
            {error && changePasswordDetails.newpassword === "" ? (
              <p>New Password is Required</p>
            ) : error &&
              PasswordRegex.test(changePasswordDetails.newpassword) ===
                false ? (
              <p>New Password is not strong</p>
            ) : (
              ""
            )}
          </span>
        </div>
        <div className="col-lg-6 col-12 mt-2 position-relative">
          <input
            className="w-100 edit-input"
            type={confirmPasswordShow ? "text" : "password"}
            placeholder="Confirm Password:"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span
            className="eye-icon cursor-pointer"
            onClick={() => setConfirmPasswordShow(!confirmPasswordShow)}
          >
            {confirmPasswordShow ? <ShowEye /> : <HideEye />}
          </span>
          <span className="text-danger">
            {error && confirmPassword === "" ? (
              <p>Confirm Password is Required</p>
            ) : error && PasswordRegex.test(confirmPassword) === false ? (
              <p>Confirm Password is not strong</p>
            ) : (
              ""
            )}
          </span>
        </div>
      </div>
      <div className="mt-4 pt-2 d-flex  flex-row pb-5 align-items-center align-items-sm-start">
        <button
          onClick={() => SettingDataHandler()}
          type="button"
          className="btn ms-2 rounded-1px fw-700 fs-20 fs-xs-16 h-50px bg-dark black-btn-skew btn-skew border-unset d-flex align-items-center justify-content-center"
        >
          <span className="position-absolute skew-text text-white">Save</span>
        </button>

        <button
          type="button"
          className="btn ms-4 rounded-1px fw-700 fs-20 fs-xs-16 px-4 h-50px bg-gray gray-btn-skew btn-skew border-unset d-flex align-items-center justify-content-center"
        >
          <span className="position-absolute skew-text ">Cancel</span>
        </button>
      </div>
      <div className="pb-5"></div>
    </div>
  );
};
export default ChangePasswordForm;
