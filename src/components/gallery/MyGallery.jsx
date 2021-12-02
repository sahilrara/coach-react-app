import React from "react";
import GalleryImg from "../../assets/img/bani.png";

const MyGallery = () => {
  return (
    <div className="edit-form px-4 pt-4">
      <div className="row">
        <div className="col-lg-3 col-md-6  my-3">
          <div className="image-border p-2">
            <img className="w-100" src={GalleryImg} alt=" GalleryImg" />
          </div>
        </div>
        <div className="col-lg-3  col-md-6 my-3">
          <div className="image-border p-2">
            <img className="w-100" src={GalleryImg} alt=" GalleryImg" />
          </div>
        </div>
        <div className="col-lg-3  col-md-6 my-3">
          <div className="image-border p-2">
            <img className="w-100" src={GalleryImg} alt=" GalleryImg" />
          </div>
        </div>
        <div className="col-lg-3  col-md-6 my-3">
          <div className="image-border p-2">
            <img className="w-100" src={GalleryImg} alt=" GalleryImg" />
          </div>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-lg-3  col-md-6 my-3">
          <div className="image-border p-2">
            <img className="w-100" src={GalleryImg} alt=" GalleryImg" />
          </div>
        </div>
        <div className="col-lg-3  col-md-6 my-3">
          <div className="image-border p-2">
            <img className="w-100" src={GalleryImg} alt=" GalleryImg" />
          </div>
        </div>
        <div className="col-lg-3  col-md-6 my-3">
          <div className="image-border p-2">
            <img className="w-100" src={GalleryImg} alt=" GalleryImg" />
          </div>
        </div>
        <div className="col-lg-3  col-md-6 my-3">
          <div className="image-border p-2">
            <img className="w-100" src={GalleryImg} alt=" GalleryImg" />
          </div>
        </div>
      </div>

      <div className="pb-5"></div>
    </div>
  );
};

export default MyGallery;
