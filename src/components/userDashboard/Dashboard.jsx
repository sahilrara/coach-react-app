import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import UserDashboardTable from "./UserDashboardTable";
import { GetAllUserListAction } from "../../redux/action/userAction";
import { Next, Prev } from "../../assets/icon/PaginationIcons";

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
