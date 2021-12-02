import React from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import BubblesLoader from "../common/loader/BubblesLoader";

const ViewContact = ({ show, setShow, detailsLoader }) => {
  const handleClose = () => setShow(false);
  const contactDetails = useSelector((state) => state.List.contactDetails);

  return (
    <Modal
      className="dash-edit-modal"
      centered
      show={show}
      onHide={handleClose}
    >
      <>
        <Modal.Header>
          <Modal.Title className="mx-auto">
            <h5
              className="modal-title  mt-2 pt-2 mb-0 modal-heading "
              id="exampleModalToggleLabel"
            >
              View Contact
            </h5>
          </Modal.Title>
        </Modal.Header>
        {detailsLoader ? (
          <div className="d-flex justify-content-center align-items-center">
            <BubblesLoader />
          </div>
        ) : (
          <Modal.Body>
            <div className="container">
              <div className="row">
                <div className="col d-flex justify-content-between">
                  <h5>Name :</h5>
                  <p>{contactDetails.name ? contactDetails.name : "N/A"}</p>
                </div>
              </div>
              <div className="row">
                <div className="col d-flex justify-content-between">
                  <h5>Phone :</h5>
                  <p>{contactDetails.phone ? contactDetails.phone : "N/A"}</p>
                </div>
              </div>
              <div className="row">
                <div className="col d-flex justify-content-between">
                  <h5>E-mail :</h5>
                  <p>{contactDetails.email ? contactDetails.email : "N/A"}</p>
                </div>
              </div>
              <div className="row">
                <div className="col d-flex flex-column align-items-center">
                  <h3 className="mt-3">Message </h3>
                  <p className="image-border p-2">
                    {contactDetails.message ? contactDetails.message : "N/A"}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col d-flex flex-column ">
                  <p className="image-border p-2 w-100">
                    {contactDetails.message ? contactDetails.message : "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </Modal.Body>
        )}
        <Modal.Footer>
          <div className="modal-footer mx-auto   pb-3 d-flex flex-row justify-content-center">
            <button
              onClick={() => handleClose()}
              type="button"
              className="btn rounded-1px fw-700 fs-20 fs-xs-16 mt-sm-0 px-4 h-50px w-xs-110 bg-gray gray-btn-skew ms-4 btn-skew border-unset d-flex align-items-center justify-content-center"
              data-bs-dismiss="modal"
            >
              <span className="position-absolute skew-text ">Cancel</span>
            </button>
          </div>
        </Modal.Footer>
      </>
    </Modal>
  );
};

export default ViewContact;
