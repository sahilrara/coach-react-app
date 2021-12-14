import React, { useState } from "react";
import SideBar from "../Sidebar";
import AdminHeader from "../common/AdminHeader";
import MyGallery from "./MyGallery";
import AddNewImageInGallery from "./AddNewImageInGallery";

const Gallery = () => {
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
      <AddNewImageInGallery show={show} setShow={setShow} />
    </>
  );
};

export default Gallery;
