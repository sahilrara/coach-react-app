import React, { useEffect, useState } from "react";
import MyGallery from "./MyGallery";
import AddNewImageInGallery from "./AddNewImageInGallery";
import { useDispatch } from "react-redux";
import { GetAllGalleryListAction } from "../../redux/action/Gallery";
import BubblesLoader from "../common/loader/BubblesLoader";
import ReactPaginate from "react-paginate";
import { Next, Prev } from "../../assets/icon/PaginationIcons";

const Gallery = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [galleryListLoading, setGalleryListLoading] = useState(false);
  const [page, setPage] = useState(false);
  const [totalGallery, setTotalGallery] = useState(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(
      GetAllGalleryListAction(setGalleryListLoading, page, setTotalGallery)
    );
  }, [dispatch, page]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setPage(selectedPage);
  };

  return (
    <>
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
      {galleryListLoading ? (
        <div className="d-flex justify-content-center align-items-center">
          <BubblesLoader />
        </div>
      ) : (
        <MyGallery />
      )}
      {totalGallery > 10 ? (
        <ReactPaginate
          previousLabel={<Prev />}
          nextLabel={<Next />}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={Math.ceil(totalGallery / 10)}
          marginPagesDisplayed={3}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={"pagination paginationContainerStyle"}
          subContainerClassName={"pages pagination"}
          activeClassName={"activePage"}
          initialPage={page}
        />
      ) : (
        ""
      )}
      <AddNewImageInGallery show={show} setShow={setShow} />
    </>
  );
};

export default Gallery;
