import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import EditUserTable from "./EditUserTable";
import EditUserForm from "./EditUserForm";
import { withRouter } from "react-router";
import { GetUserProgramListAction } from "../../redux/action/userProgramsAction";
import { useDispatch, useSelector } from "react-redux";
import BubblesLoader from "../common/loader/BubblesLoader";
import { Prev, Next } from "../../assets/icon/PaginationIcons";

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
    <>
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
            <EditUserTable userId={userId} userProgramList={userProgramList} />
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
    </>
  );
};
export default withRouter(EditUser);
