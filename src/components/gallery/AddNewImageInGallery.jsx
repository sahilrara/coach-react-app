import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { uploadImage } from "../../redux/UploadFile";
import Loader from "../common/loader/Loader";
import { UploadImgIcon } from "../icons/Icons";

const AddNewImageInGallery = ({ show, setShow }) => {
  const dispatch = useDispatch();
  const [upload, setUpload] = useState("");
  const [loading, setLoader] = useState("");

  const UploadImg = (e) => {
    const type = "gallery";
    dispatch(uploadImage(e, setLoader, type));
    let img = e.target.files[0];
    let image = URL.createObjectURL(img);
    setUpload(image);
  };

  const handleClose = () => {
    setUpload("");
    setShow(false);
  };

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
            <h1
              className="modal-title  mt-2 pt-2 mb-0 modal-heading "
              id="exampleModalToggleLabel"
            >
              Upload Image
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
            {upload ? (
              <button
                type="button"
                className="btn rounded-1px fw-700 fs-20 fs-xs-16 px-4 h-50px w-xs-110 bg-dark black-btn-skew btn-skew border-unset d-flex align-items-center justify-content-center"
              >
                <label
                  for="upload"
                  className="position-absolute skew-text text-white"
                >
                  {loading ? <Loader /> : "Edit"}
                </label>
              </button>
            ) : (
              <button
                type="button"
                className="btn rounded-1px fw-700 fs-20 fs-xs-16 px-4 h-50px w-xs-110 bg-dark black-btn-skew btn-skew border-unset d-flex align-items-center justify-content-center"
              >
                <label
                  for="upload"
                  className="position-absolute skew-text text-white"
                >
                  Upload
                </label>
              </button>
            )}
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
export default AddNewImageInGallery;
