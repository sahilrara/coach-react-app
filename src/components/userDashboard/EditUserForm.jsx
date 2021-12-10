import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import {
  getAllUserDetailsAction,
  updateUserDetailsAction,
} from "../../redux/action/userAction";
import Loader from "../common/loader/Loader";

const insialState = {
  firstName: "",
  lastName: "",
  username: "",
};

const EditUserForm = ({ match, history }) => {
  const { userId } = match.params;
  const dispatch = useDispatch();
  const allUserDetails = useSelector((state) => state.List.allUserDetails);
  const [userDetails, setUserDetails] = useState(insialState);
  const [userDetailsLoading, setUserDetailsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [updateDetailsLoading, setUpdateUserLoading] = useState(false);

  useEffect(() => {
    if (allUserDetails) {
      setUserDetails(allUserDetails);
    }
  }, [allUserDetails]);

  useEffect(() => {
    if (userId) {
      dispatch(getAllUserDetailsAction(setUserDetailsLoading, userId));
    }
  }, [userId]);

  const updateUserDetails = () => {
    setError(true);
    dispatch(
      updateUserDetailsAction(setUpdateUserLoading, userId, userDetails)
    );
  };

  return (
    <div className="edit-form rounded-0  px-sm-4 px-2 pt-4">
      <p className="mb-3 mt-5">Event Details</p>
      <div className="row">
        <div className="col-lg-6 col-12 mt-2">
          <input
            className="w-100 edit-input"
            type="text"
            placeholder="First Name"
            value={userDetails.firstName}
            onChange={(e) =>
              setUserDetails({
                ...userDetails,
                firstName: e.target.value,
              })
            }
          />
          {error && userDetails.firstName === "" ? (
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
            value={userDetails.lastName}
            onChange={(e) =>
              setUserDetails({
                ...userDetails,
                lastName: e.target.value,
              })
            }
          />
          {error && userDetails.lastName === "" ? (
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
            value={userDetails.username}
            onChange={(e) =>
              setUserDetails({
                ...userDetails,
                username: e.target.value,
              })
            }
          />
          {error && userDetails.username === "" ? (
            <span className="text-danger text-start">
              <p>UserName is Required</p>
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="col-lg-6 col-12 mt-2">
          <div className=" pt-2 d-flex flex-sm-row flex-column pb-5 align-items-center align-items-sm-start">
            <button
              onClick={() => updateUserDetails()}
              type="button"
              className="btn ms-sm-2 rounded-1px my-sm-0 my-3 fw-700 fs-20 fs-xs-16 px-4 h-50px  bg-dark black-btn-skew btn-skew border-unset d-flex align-items-center justify-content-center "
            >
              <span className=" skew-text text-white">
                {updateDetailsLoading ? <Loader /> : "Save"}
              </span>
            </button>
            <button
              onClick={() =>
                history.push(
                  `/admin/dashboard/userlist/create-user/programs/${userId}`
                )
              }
              type="button"
              className=" btn ms-sm-2 rounded-1px fw-700 fs-20 fs-xs-16 px-4 h-50px  bg-dark black-btn-skew btn-skew border-unset d-flex align-items-center justify-content-center"
            >
              <span className=" skew-text text-white">New Program</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(EditUserForm);
