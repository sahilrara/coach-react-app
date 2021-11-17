import React from "react";
import { useProfileJoyrideProvider } from "../useContext/SidebarProvider";
import AdminHeader from "./AdminHeader";
import SideBar from "../Sidebar";
import { Table } from "react-bootstrap";
import { withRouter } from "react-router-dom";
const ProgramPage = ({ history }) => {
  const { setShowSidebar, showSidebar } = useProfileJoyrideProvider();
  const dashboardData = [
    {
      name: "KathMurphy",
      userName: "KathMurphy",
      email: "KathMurphy@gmail.com",
    },
    {
      name: "KathMurphy",
      userName: "KathMurphy",
      email: "KathMurphy@gmail.com",
    },
    {
      name: "KathMurphy",
      userName: "KathMurphy",
      email: "KathMurphy@gmail.com",
    },
    {
      name: "KathMurphy",
      userName: "KathMurphy",
      email: "KathMurphy@gmail.com",
    },
    {
      name: "KathMurphy",
      userName: "KathMurphy",
      email: "KathMurphy@gmail.com",
    },
    {
      name: "KathMurphy",
      userName: "KathMurphy",
      email: "KathMurphy@gmail.com",
    },
    {
      name: "KathMurphy",
      userName: "KathMurphy",
      email: "KathMurphy@gmail.com",
    },
    {
      name: "KathMurphy",
      userName: "KathMurphy",
      email: "KathMurphy@gmail.com",
    },
    {
      name: "KathMurphy",
      userName: "KathMurphy",
      email: "KathMurphy@gmail.com",
    },
  ];

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
          <Table responsive>
            <thead className="Dashboard-table-head  cursor-pointer">
              <tr>
                <th className="dash-input ">
                  {" "}
                  <input
                    className="form-check-input cursor-pointer"
                    type="checkbox"
                    id="flexCheckDefault"
                  />{" "}
                </th>
                <th className="Dashboard-table-head white-space-norwap">
                  Name
                </th>
                <th className="Dashboard-table-head white-space-norwap">
                  Date
                </th>
                <th className="Dashboard-table-head white-space-norwap">
                  Location
                </th>
                <th className="Dashboard-table-head white-space-norwap">
                  Event Types
                </th>
              </tr>
            </thead>
            <tbody className="dashboar-table-body">
              {dashboardData.map((val, i) => {
                return (
                  <tr>
                    <td>
                      {" "}
                      <input
                        className="form-check-input cursor-pointer"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />{" "}
                    </td>
                    <td className="dash-body-text white-space-norwap ">
                      {val.name}
                    </td>
                    <td className="dash-body-text white-space-norwap ">
                      28/12/22
                    </td>
                    <td className="dash-body-text white-space-norwap ">
                      {val.userName}
                    </td>
                    <td>
                      {" "}
                      <div className="d-flex w-100 white-space-norwap justify-content-between ">
                        {" "}
                        <p className="my-auto dash-body-text ">{val.email}</p>
                        <div className="">
                          <button
                            className=" px-4 mx-3 btn edit-btn-dash"
                            onClick={() =>
                              history.push("/admin/dashboard/editprogram")
                            }
                          >
                            Edit
                          </button>
                          <button className="btn  px-4 remove-btn-dash">
                            Remove
                          </button>
                        </div>
                      </div>{" "}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
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
