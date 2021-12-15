import React, { useEffect, useState } from "react";
import ContactTable from "./ContactTable";
import { useDispatch, useSelector } from "react-redux";
import ViewContact from "./ViewContact";
import {
  getAllContactListAction,
  getContactDetailsAction,
} from "../../redux/action/Contact";
import BubblesLoader from "../common/loader/BubblesLoader";
import ReactPaginate from "react-paginate";
import { Next, Prev } from "../../assets/icon/PaginationIcons";

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
      <ViewContact
        show={show}
        setShow={setShow}
        detailsLoader={detailsLoader}
      />
    </>
  );
};

export default Contact;
