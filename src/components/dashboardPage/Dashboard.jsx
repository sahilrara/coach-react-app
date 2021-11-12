import React from "react";
import SideBar from "../Sidebar";
import { Table } from "react-bootstrap";
import { getDefaultNormalizer } from "@testing-library/dom";
import { useProfileJoyrideProvider } from "../useContext/SidebarProvider";

const Dashboard = () => {
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
    <div className="d-flex">
      <SideBar />
      <div className="container">
        <div className="row">
          <div
            class="
          col-xxl-2
          order-2 order-sm-1
          col-lg-4 col-sm-5 col-12
          ps-0
          position-relative
          mt-3 mt-sm-0
        "
          >
            <input
              class="w-100 search-input"
              type="text"
              placeholder="Enter keywords ..."
            />
            <span class="search-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  stroke="#B9B9B9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.0004 20.9999L16.6504 16.6499"
                  stroke="#B9B9B9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h1 className="dashboar-text">Dashboard</h1>
          </div>
          <div className="col-6">
            <p
              onClick={() => setShowSidebar(true)}
              className="text-end d-lg-none "
            >
              Navbar show
            </p>
          </div>
        </div>
        <Table responsive>
          <thead className="Dashboard-table-head ">
            <tr>
              <th className="Dashboard-table-head white-space-norwap">Name</th>
              <th className="Dashboard-table-head white-space-norwap">
                Username
              </th>
              <th className="Dashboard-table-head white-space-norwap">Email</th>
            </tr>
          </thead>
          <tbody>
            {dashboardData.map((val, i) => {
              return (
                <tr>
                  <td className="dash-body-text white-space-norwap ">
                    {val.name}
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
                        <button className=" px-4 mx-3 btn edit-btn-dash">
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
          <span className="pagination-text-next  ms-3 "> Next &#62;&#62; </span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
