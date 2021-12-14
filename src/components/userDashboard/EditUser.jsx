import React, { useEffect, useState } from "react";
import SideBar from "../Sidebar";
import ReactPaginate from "react-paginate";
import AdminHeader from "../common/AdminHeader";
import EditUserTable from "./EditUserTable";
import EditUserForm from "./EditUserForm";
import { withRouter } from "react-router";
import { GetUserProgramListAction } from "../../redux/action/userProgramsAction";
import { useDispatch, useSelector } from "react-redux";
import BubblesLoader from "../common/loader/BubblesLoader";

const EditUser = ({ match }) => {
  const { userId } = match.params;
  const dispatch = useDispatch();
  const userProgramList = useSelector((state) => state.List.userProgramList);
  const [userProgramLoading, setUserProgramLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [totalUserProgram, setTotalUserProgram] = useState(0);

  useEffect(() => {
    if (userId) {
      dispatch(
        GetUserProgramListAction(
          setUserProgramLoading,
          page,
          setTotalUserProgram,
          userId
        )
      );
    }
  }, [userId, dispatch, page]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setPage(selectedPage);
  };

  return (
    <div className="d-flex bg-dark-grey">
      <SideBar />
      <div className="h-100vh-overflow-auto w-100 ">
        <div className="container mb-5 container-xl">
          <AdminHeader />
          <div className="row">
            <div className="col-12 d-flex justify-content-between align-items-center">
              <h1 className="dashboar-text mt-5 mb-4">Edit User</h1>
            </div>
          </div>
          <EditUserForm />
          {userProgramLoading ? (
            <div className="d-flex justify-content-center align-items-center">
              <BubblesLoader />
            </div>
          ) : (
            <>
              {userProgramList && userProgramList.length > 0 ? (
                <EditUserTable
                  userId={userId}
                  userProgramList={userProgramList}
                />
              ) : (
                <p className="text-center fw-bold pt-5">
                  You don't have any program list.
                </p>
              )}
            </>
          )}
          {totalUserProgram > 10 ? (
            <ReactPaginate
              previousLabel={<Prev />}
              nextLabel={<Next />}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={Math.ceil(totalUserProgram / 10)}
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
        </div>
      </div>
    </div>
  );
};
export default withRouter(EditUser);

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
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13 5L20 12L13 19"
        stroke="white"
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
