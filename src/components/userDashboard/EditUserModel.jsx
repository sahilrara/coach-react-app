import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateUserDetailsAction } from "../../redux/action/userAction";
import BubblesLoader from "../common/loader/BubblesLoader";
import Loader from "../common/loader/Loader";

const insialState = {
  firstName: "",
  lastName: "",
  username: "",
};

const EditUserModel = ({ handleClose, show, userDetailsLoading, userId }) => {
  const dispacth = useDispatch();
  const allUserDetails = useSelector((state) => state.List.allUserDetails);
  const [userDetails, setUserDetails] = useState(insialState);
  const [updateDetailsLoading, setUpdateUserLoading] = useState(false);

  useEffect(() => {
    if (allUserDetails) {
      setUserDetails(allUserDetails);
    }
  }, [allUserDetails]);

  const updateUserDetails = () => {
    dispacth(
      updateUserDetailsAction(
        setUpdateUserLoading,
        userId,
        userDetails,
        handleClose
      )
    );
  };

  return (
    <Modal
      className="dash-edit-modal"
      centered
      show={show}
      onHide={handleClose}
    >
      {userDetailsLoading ? (
        <div className="d-flex align-items-center justify-content-center py-4">
          {" "}
          <BubblesLoader />
        </div>
      ) : (
        <>
          <Modal.Header>
            <Modal.Title className="mx-auto">
              <h1
                className="modal-title  mt-2 pt-2 mb-0 modal-heading "
                id="exampleModalToggleLabel"
              >
                Edit User
              </h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              className="w-100 edit-input mt-2 ps-3"
              type="text"
              value={userDetails.firstName}
              placeholder="Name"
              onChange={(e) => {
                setUserDetails({
                  ...userDetails,
                  firstName: e.target.value,
                });
              }}
            />
            <input
              className="w-100 edit-input mt-2 ps-3"
              type="text"
              value={userDetails.lastName}
              placeholder="Last Name"
              onChange={(e) => {
                setUserDetails({
                  ...userDetails,
                  lastName: e.target.value,
                });
              }}
            />
            <input
              className="w-100 edit-input mt-2 ps-3"
              type="text"
              value={userDetails.username}
              placeholder="Username"
              onChange={(e) => {
                setUserDetails({
                  ...userDetails,
                  username: e.target.value,
                });
              }}
            />
          </Modal.Body>
          <Modal.Footer>
            <div className="modal-footer mx-auto   pb-3 d-flex flex-row justify-content-center">
              <button
                type="button"
                onClick={() => updateUserDetails()}
                disabled={updateDetailsLoading}
                className="btn rounded-1px fw-700 fs-20 fs-xs-16 px-4 h-50px w-xs-110 bg-dark black-btn-skew btn-skew border-unset d-flex align-items-center justify-content-center"
              >
                <span className="position-absolute skew-text text-white">
                  {updateDetailsLoading ? <Loader /> : "Save"}
                </span>
              </button>
              <button
                onClick={handleClose}
                type="button"
                className="btn rounded-1px fw-700 fs-20 fs-xs-16 mt-sm-0 px-4 h-50px w-xs-110 bg-gray gray-btn-skew ms-4 btn-skew border-unset d-flex align-items-center justify-content-center"
                data-bs-dismiss="modal"
              >
                <span className="position-absolute skew-text ">Cancel</span>
              </button>
            </div>
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
};
export default EditUserModel;
