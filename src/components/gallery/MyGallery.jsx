import React from "react";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";

const MyGallery = () => {
  const allGalleryList = useSelector((state) => state.List.allGalleryList);
  return (
    <div className="edit-form px-4 pt-4">
      <div className="row">
        {allGalleryList && allGalleryList.length > 0
          ? allGalleryList.map((gallery, index) => {
              return (
                <>
                  {gallery.isImage ? (
                    <div className="col-lg-3 col-md-6  my-3">
                      <div className="image-border p-2">
                        <img
                          className="w-100 h-100"
                          src={gallery.file}
                          alt=" GalleryImg"
                        />
                      </div>
                    </div>
                  ) : gallery.isVideo ? (
                    <ReactPlayer
                      width="100%"
                      className="br-10"
                      height="100%"
                      stopOnUnmount={true}
                      controls={true}
                      url={gallery.file}
                      // playIcon={<playicon />}
                      playing={false}
                    />
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
