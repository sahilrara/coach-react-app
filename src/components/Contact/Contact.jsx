import React, { useEffect, useState } from "react";
import SideBar from "../Sidebar";
import AdminHeader from "../common/AdminHeader";
import ContactTable from "./ContactTable";
import { useDispatch, useSelector } from "react-redux";
import ViewContact from "./ViewContact";
import {
  getAllContactListAction,
  getContactDetailsAction,
} from "../../redux/action/Contact";
import BubblesLoader from "../common/loader/BubblesLoader";
import ReactPaginate from "react-paginate";

const Contact = () => {
  const contactList = useSelector((state) => state.List.contactList);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [contactLoading, setContactLoading] = useState(false);
  const [detailsLoader, setDetailsLoader] = useState(false);
  const [page, setPage] = useState(0);
  const [totalContact, setTotalContact] = useState(0);

  const ViewContactDetails = (contactId) => {
    setShow(true);
    if (contactId) {
      dispatch(getContactDetailsAction(setDetailsLoader, contactId));
    }
  };

  useEffect(() => {
    dispatch(getAllContactListAction(setContactLoading, page, setTotalContact));
  }, [dispatch, page, setTotalContact]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setPage(selectedPage);
  };

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
            {contactLoading ? (
              <div className="d-flex justify-content-center align-items-center">
                <BubblesLoader />
              </div>
            ) : (
              <ContactTable
                ViewContactDetails={ViewContactDetails}
                contactList={contactList}
              />
            )}
          </div>
        </div>
      </div>
      <ViewContact
        show={show}
        setShow={setShow}
        detailsLoader={detailsLoader}
      />
      {totalContact > 10 ? (
        <ReactPaginate
          previousLabel={<Prev />}
          nextLabel={<Next />}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={Math.ceil(totalContact / 10)}
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
