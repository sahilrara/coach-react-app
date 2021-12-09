import React, { useEffect, useState } from "react";
import SideBar from "../Sidebar";
import AdminHeader from "../common/AdminHeader";
import EditUserTable from "./EditUserTable";
import EditUserForm from "./EditUserForm";
import { withRouter } from "react-router";
import { GetUserProgramListAction } from "../../redux/action/userProgramsAction";
import { useDispatch, useSelector } from "react-redux";

const EditUser = ({ history, match }) => {
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
          setTotalUserProgram
        )
      );
    }
  }, [userId]);

  return (
    <div className="d-flex bg-dark-grey">
      <SideBar />
      <div className="h-100vh-overflow-auto w-100 ">
        <div className="container mb-5 container-xl">
          <AdminHeader />
          <div className="row">
            <div className="col-12 d-flex justify-content-between align-items-center">
              <h1 className="dashboar-text mt-5 mb-4">Edit User</h1>
              <button
                onClick={() =>
                  history.push(
                    `/admin/dashboard/userlist/create-user/programs/${userId}`
                  )
                }
                type="button"
                className=" btn ms-2 rounded-1px fw-700 fs-20 fs-xs-16 px-4 h-50px  bg-dark black-btn-skew btn-skew border-unset d-flex align-items-center justify-content-center"
              >
                <span className=" skew-text text-white">New Program</span>
              </button>
            </div>
          </div>
          <EditUserForm />
          <EditUserTable userId={userId} userProgramList={userProgramList} />
        </div>
      </div>
    </div>
  );
};

export default withRouter(EditUser);
