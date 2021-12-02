import React, { useState } from "react";
import SideBar from "../Sidebar";
import AdminHeader from "../common/AdminHeader";
import ContactTable from "./ContactTable";
import { Modal } from "react-bootstrap";

const Contact = () => {
  const handleClose = () => setShow(false);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="d-flex bg-dark-grey">
        <SideBar />
        <div className="h-100vh-overflow-auto w-100 ">
          <div className="container mb-5 container-xl">
            <AdminHeader />
            <div className="row">
              <div className="col-6">
                <h1 className="dashboar-text mt-5 mb-4">Contact</h1>
              </div>
            </div>
            <ContactTable handleShow={handleShow} />
          </div>
        </div>
      </div>
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
          <Modal.Body>
            <div className="container">
              <div className="row">
                <div className="col d-flex justify-content-between">
                  <h5>Name :</h5>
                  <p>Muskan</p>
                </div>
              </div>
              <div className="row">
                <div className="col d-flex justify-content-between">
                  <h5>Phone :</h5>
                  <p>1234567890</p>
                </div>
              </div>
              <div className="row">
                <div className="col d-flex justify-content-between">
                  <h5>E-mail :</h5>
                  <p>muskansaini758@gmail.com</p>
                </div>
              </div>
              <div className="row">
                <div className="col d-flex flex-column align-items-center">
                  <h3 className="mt-3">Message </h3>
                  <p className="image-border p-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Possimus facilis facere nulla quidem quo iure? Pariatur enim
                    sunt, mollitia error ut accusamus delectus fuga esse
                    adipisci placeat molestias! Esse, eveniet!
                  </p>
                </div>
              </div>
            </div>
          </Modal.Body>
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
    </>
  );
};

export default Contact;
const Next = () => (
  <span className="pagination-number">
    {" "}
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12H20"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13 5L20 12L13 19"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </span>
);

const Prev = () => (
  <span className="pagination-number ">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.4 7L6 12.4L11.4 17.8M18 12.4H6H18Z"
        stroke="black"
        stroke-width="2"
      />
    </svg>
  </span>
);
