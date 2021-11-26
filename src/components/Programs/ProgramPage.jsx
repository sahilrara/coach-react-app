import React from "react";
import AdminHeader from "../common/AdminHeader";
import SideBar from "../Sidebar";
import { withRouter } from "react-router-dom";
import ProgramTable from "./ProgramTable";

const ProgramPage = ({ history }) => {
  return (
    <div className="d-flex bg-dark-grey">
      <SideBar />
      <div className="h-100vh-overflow-auto w-100 ">
        <div className="container mb-5 container-xl">
          <AdminHeader />
          <div className="row">
            <div className="col-12 d-flex justify-content-between align-items-center">
              <h1 className="dashboar-text mt-5 mb-4">Programs</h1>
              <button
                onClick={() => history.push("/")}
                type="button"
                className=" btn ms-2 rounded-1px fw-700 fs-20 fs-xs-16 px-4
                        h-50px  bg-dark black-btn-skew btn-skew border-unset d-flex align-items-center
                        justify-content-center "
              >
                <span className=" skew-text text-white">Back</span>
              </button>
            </div>
          </div>
          <ProgramTable />
          <div className="d-flex mt-4 justify-content-end">
            <span className="pagination-text-dash-active">1</span>
            <span className="pagination-text-dash mx-3 ">2</span>
            <span className="pagination-text-dash">3</span>
            <span className="pagination-text-next  ms-3 ">
              {" "}
              Next &#62;&#62;{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ProgramPage);
