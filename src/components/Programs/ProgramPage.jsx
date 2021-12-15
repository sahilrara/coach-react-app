import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import ProgramTable from "./ProgramTable";
import { getProgramListAction } from "../../redux/action/ProgramAction";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import BubblesLoader from "../common/loader/BubblesLoader";
import { Prev, Next } from "../../assets/icon/PaginationIcons";

const ProgramPage = ({ history }) => {
  const allProgramList = useSelector((state) => state.List.allProgramList);
  const [programListLoading, setProgramListLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [totalProgram, setTotalProgram] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getProgramListAction(setProgramListLoading, page, setTotalProgram)
    );
  }, [dispatch, setProgramListLoading, page, setTotalProgram]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setPage(selectedPage);
  };

  return (
    <>
      <div className="row">
        <div className="col-12 d-flex justify-content-between align-items-center">
          <h1 className="dashboar-text mt-5 mb-4">Programs</h1>
          <button
            onClick={() => history.push("/admin/dashboard/create/program")}
            type="button"
            className=" btn ms-2 rounded-1px fw-700 fs-20 fs-xs-16 px-4 h-50px  bg-dark black-btn-skew btn-skew border-unset d-flex align-items-center justify-content-center"
          >
            <span className=" skew-text text-white">Create New Program</span>
          </button>
        </div>
      </div>
      {programListLoading ? (
        <div className="d-flex justify-content-center align-items-center">
          {" "}
          <BubblesLoader />
        </div>
      ) : (
        <>
          {allProgramList && allProgramList.length > 0 ? (
            <ProgramTable allProgramList={allProgramList} />
          ) : (
            <p className="text-center fw-bold">
              {" "}
              You don't have any program list.
            </p>
          )}
        </>
      )}

      {totalProgram > 10 ? (
        <ReactPaginate
          previousLabel={<Prev />}
          nextLabel={<Next />}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={Math.ceil(totalProgram / 10)}
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
export default withRouter(ProgramPage);
