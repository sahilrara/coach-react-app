import SideBar from "../Sidebar";
import { withRouter } from "react-router-dom";
import AdminHeader from "../common/AdminHeader";
import ProgramForm from "./ProgramForm";
import { useEffect, useState } from "react";
import { getProgramDetailsAction } from "../../redux/action/ProgramAction";
import { useDispatch } from "react-redux";

function EditProgram({ history, match }) {
  const { programId } = match.params;
  const dispatch = useDispatch();
  const [detailsLoader, setDetailsLoader] = useState(false);
  const mode = window.location.pathname.includes("edit") ? true : false;

  useEffect(() => {
    if (mode) {
      dispatch(getProgramDetailsAction(setDetailsLoader, programId));
    }
  }, [dispatch, programId, mode]);

  return (
    <div className="d-flex bg-dark-grey ">
      <SideBar />
      <div className="h-100vh-overflow-auto w-100 ">
        <div className="container container-xl ">
          {/* HEADER PART STARTS FROM HERE */}
          <AdminHeader />
          {/* ENDS HERE... */}
          <div className="row mt-5 mb-3 ">
            <div className="col-12 d-flex justify-content-between align-items-center">
              <h2 className="edit-program-text">
                {mode ? "Edit Program" : "Create New Program"}
              </h2>
              <button
                onClick={() => history.push("/admin/dashboard/program")}
                type="button"
                className="btn ms-2 rounded-1px fw-700 fs-20 fs-xs-16 px-4 h-50px  bg-dark black-btn-skew btn-skew border-unset d-flex align-items-center justify-content-center "
              >
                <span className=" skew-text text-white">Back</span>
              </button>
            </div>
          </div>
          <ProgramForm
            history={history}
            mode={mode}
            programId={programId}
            detailsLoader={detailsLoader}
          />
        </div>
      </div>
    </div>
  );
}
export default withRouter(EditProgram);