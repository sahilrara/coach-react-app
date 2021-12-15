import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from "react-player";
import { DeleteIcon, VideoIcon } from "../icons/Icons";
import { DeleteGalleryListAction } from "../../redux/action/Gallery";

const MyGallery = () => {
  const dispatch = useDispatch();
  const allGalleryList = useSelector((state) => state.List.allGalleryList);

  const DeleteClick = (id) => {
    dispatch(DeleteGalleryListAction(id));
  };

  return (
    <div className="edit-form px-4 pt-4">
      <div className="row">
        {allGalleryList && allGalleryList.length > 0
          ? allGalleryList.map((gallery, index) => {
              return (
                <>
                  {gallery.isImage ? (
                    <div className="col-lg-3 col-md-6  my-3">
                      <div className="image-border image-border-height p-2 position-relative">
                        <img
                          className="w-100 h-100"
                          src={gallery.file}
                          alt=" GalleryImg"
                        />
                        <div
                          className="image-gallery-shadow position-absolute h-100 w-100 d-flex justify-content-center align-items-center cursor-pointer"
                          onClick={() => DeleteClick(gallery._id)}
                        >
                          <DeleteIcon />
                        </div>
                      </div>
                    </div>
                  ) : gallery.isVideo ? (
                    <div className="col-lg-3 col-md-6  my-3">
                      <div className="image-border image-border-height p-2 position-relative">
                        <ReactPlayer
                          width="100%"
                          className="br-10"
                          height="100%"
                          stopOnUnmount={true}
                          controls={true}
                          url={gallery.file}
                          playIcon={<VideoIcon />}
                          playing={false}
                        />
                        <div className="image-gallery-shadow position-absolute h-100 w-100 d-flex justify-content-center align-items-center cursor-pointer">
                          <span onClick={() => DeleteClick(gallery._id)}>
                            <DeleteIcon />
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </>
              );
            })
          : ""}
      </div>
      <div className="pb-5"></div>
    </div>
  );
};
export default MyGallery;
