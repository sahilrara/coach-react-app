import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import { getAllUserDetailsAction } from "../../redux/action/userAction";

const EditUserForm = ({ match }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const { userId } = match.params;
  const [UserDetailsLoading, setUserDetailsLoading] = useState(false);
  const [editUserData, setEditUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
  });
  const editUserHandler = () => {
    setError(true);
    if (
      editUserData.firstname &&
      editUserData.lastname &&
      editUserData.username !== ""
    ) {
      setEditUser(editUserData);
    }
  };
  useEffect(() => {
    dispatch(getAllUserDetailsAction(setUserDetailsLoading, userId));
  }, []);
  return (
    <div className="edit-form rounded-0  px-sm-4 px-2 pt-4">
      <p className="mb-3 mt-5">Event Details</p>
      <div className="row">
        <div className="col-lg-6 col-12 mt-2">
          <input
            className="w-100 edit-input"
            type="text"
            placeholder="First Name"
            onChange={(e) =>
              setEditUser({
                ...editUserData,
                firstname: e.target.value,
              })
            }
          />
          {error && editUserData.firstname === "" ? (
            <span className="text-danger text-start">
              <p>FirstName is Required</p>
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="col-lg-6 col-12 mt-2">
          <input
            className="w-100 edit-input"
            type="text"
            placeholder="Last Name"
            onChange={(e) =>
              setEditUser({
                ...editUserData,
                lastname: e.target.value,
              })
            }
          />
          {error && editUserData.lastname === "" ? (
            <span className="text-danger text-start">
              <p>LastName is Required</p>
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="col-lg-6 col-12 mt-2">
          <input
            className="w-100 edit-input"
            type="text"
            placeholder="Username"
            onChange={(e) =>
              setEditUser({
                ...editUserData,
                username: e.target.value,
              })
            }
          />
          {error && editUserData.username === "" ? (
            <span className="text-danger text-start">
              <p>UserName is Required</p>
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="col-lg-6 col-12 mt-2">
          <div className=" pt-2 d-flex flexs-row pb-5 align-items-center align-items-sm-start">
            <button
              onClick={() => editUserHandler()}
              type="button"
              className="btn ms-2 rounded-1px fw-700 fs-20 fs-xs-16 px-4 h-50px  bg-dark black-btn-skew btn-skew border-unset d-flex align-items-center justify-content-center "
            >
              <span className=" skew-text text-white">Save</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(EditUserForm);
