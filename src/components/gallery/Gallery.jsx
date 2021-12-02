import React, { useState } from "react";
import SideBar from "../Sidebar";
import AdminHeader from "../common/AdminHeader";
import MyGallery from "./MyGallery";
import { Modal } from "react-bootstrap";
import { UploadImgIcon } from "../icons/Icons";
const Gallery = () => {
  const [show, setShow] = useState(false);
  const [upload, setUpload] = useState("");

  const handleShow = () => setShow(true);

  const UploadImg = (e) => {
    let img = e.target.files[0];
    let image = URL.createObjectURL(img);
    setUpload(image);
  };
  const handleClose = () => {
    setUpload("");
    setShow(false);
  };
  return (
    <>
      <div className="d-flex bg-dark-grey">
        <SideBar />
        <div className="h-100vh-overflow-auto w-100 ">
          <div className="container mb-5 container-xl">
            <AdminHeader />
            <div className="row">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <h1 className="dashboar-text mt-5 mb-4">My Gallery</h1>
                <button
                  type="button"
                  onClick={() => handleShow()}
                  className=" btn ms-2 rounded-1px fw-700 fs-20 fs-xs-16 px-4 h-50px  bg-dark black-btn-skew btn-skew border-unset d-flex align-items-center justify-content-center"
                >
                  <span className=" skew-text text-white">Add</span>
                </button>
              </div>
            </div>
            <MyGallery />
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
              <h1
                className="modal-title  mt-2 pt-2 mb-0 modal-heading "
                id="exampleModalToggleLabel"
              >
                Upload Gallery
              </h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="image-border image-border-height">
                    <div className="d-flex h-100 justify-content-center flex-column cursor-pointer align-items-center">
                      <input
                        type="file"
                        onChange={(e) => UploadImg(e)}
                        id="upload"
                        hidden
                      />
                      {upload ? (
                        <img
                          className="w-100 h-100 p-3"
                          src={upload}
                          alt="GalleryImg"
                        />
                      ) : (
                        <span className="text-center">
                          {" "}
                          <UploadImgIcon />
                          <p>Upload Image</p>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="modal-footer mx-auto   pb-3 d-flex flex-row justify-content-center">
              <button
                type="button"
                className="btn rounded-1px fw-700 fs-20 fs-xs-16 px-4 h-50px w-xs-110 bg-dark black-btn-skew btn-skew border-unset d-flex align-items-center justify-content-center"
              >
                <label
                  for="upload"
                  className="position-absolute skew-text text-white"
                >
                  {upload ? "Edit" : "  Upload"}
                </label>
              </button>
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

export default Gallery;
