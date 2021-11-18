import React, { useState } from "react";
import { Modal } from "react-bootstrap";
const EditModal = ({ show, handleClose }) => {
  const [error, seterror] = useState(false);
  const [editUserData, setEditUserData] = useState({
    firstname: "",
    lastname: "",
    username: "",
  });
  const editUserSave = () => {
    seterror(true);
    if (
      editUserData.firstname &&
      editUserData.lastname &&
      editUserData.username !== ""
    ) {
      setEditUserData(editUserData);
    }
  };
  return (
    <Modal
      className="dash-edit-modal"
      centered
      show={show}
      onHide={handleClose}
    >
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
          placeholder="FirstName"
          onChange={(e) =>
            setEditUserData({
              ...editUserData,
              firstname: e.target.value,
            })
          }
        />
        <span className="text-danger">
          {error && editUserData.firstname === "" ? (
            <p>FirstName is Required</p>
          ) : (
            ""
          )}
        </span>
        <input
          className="w-100 edit-input mt-2 ps-3"
          type="text"
          placeholder="Last Name"
          onChange={(e) =>
            setEditUserData({
              ...editUserData,
              lastname: e.target.value,
            })
          }
        />
        <span className="text-danger">
          {error && editUserData.lastname === "" ? (
            <p>LastName is Required</p>
          ) : (
            ""
          )}
        </span>
        <input
          className="w-100 edit-input mt-2 ps-3"
          type="text"
          placeholder="Username"
          onChange={(e) =>
            setEditUserData({
              ...editUserData,
              username: e.target.value,
            })
          }
        />
        <span className="text-danger">
          {error && editUserData.username === "" ? (
            <p>UserName is Required</p>
          ) : (
            ""
          )}
        </span>
      </Modal.Body>
      <Modal.Footer>
        <div className="modal-footer mx-auto   pb-3 d-flex flex-row justify-content-center">
          <button
            onClick={editUserSave}
            type="button"
            className="btn 
                       
                        rounded-1px
                        fw-700
                        fs-20 fs-xs-16
                        px-4
                        h-50px
                        w-xs-110
                        
                bg-dark black-btn-skew
                        btn-skew
                        border-unset
                        d-flex
                        align-items-center
                        justify-content-center
                      "
          >
            <span className="position-absolute skew-text text-white">Save</span>
          </button>
          <button
            onClick={handleClose}
            type="button"
            className="btn  rounded-1px
                        fw-700

                        fs-20 fs-xs-16 mt-sm-0
                        px-4
                        h-50px
                      w-xs-110
                bg-gray gray-btn-skew ms-4
                        btn-skew
                        border-unset
                        d-flex
                        align-items-center
                        justify-content-center"
            data-bs-dismiss="modal"
          >
            <span className="position-absolute skew-text ">Cancel</span>
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
