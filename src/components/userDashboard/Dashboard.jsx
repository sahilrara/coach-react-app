import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import AdminHeader from "../common/AdminHeader";
import UserDashboardTable from "./UserDashboardTable";
import { GetAllUserListAction } from "../../redux/action/userAction";

const Dashboard = () => {
  const userList = useSelector((state) => state.List.allUserList);
  const [userLoading, setUserLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllUserListAction(setUserLoading, page, setTotalUsers));
  }, [dispatch, page, setUserLoading]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setPage(selectedPage);
  };

  return (
    <>
      <div className="row">
        <div className="col-6">
          <h1 className="dashboar-text mt-5 mb-4">Dashboard</h1>
        </div>
      </div>
      <UserDashboardTable userList={userList} userLoading={userLoading} />
      {totalUsers > 10 ? (
        <ReactPaginate
          previousLabel={<Prev />}
          nextLabel={<Next />}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={Math.ceil(totalUsers / 10)}
          marginPagesDisplayed={3}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={"pagination paginationContainerStyle"}
          subContainerClassName={"pages pagination "}
          activeClassName={"activePage"}
          initialPage={page}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Dashboard;
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
        stroke="white"
        stroke-width="2"
      />
    </svg>
  </span>
);
