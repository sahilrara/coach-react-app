import React from "react";
import { Table } from "react-bootstrap";
import { withRouter } from "react-router";
import { useDispatch } from "react-redux";
const ProgramTable = ({ history }) => {
  const dispatch = useDispatch();

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
          <th className="Dashboard-table-head white-space-norwap">Name</th>
          <th className="Dashboard-table-head white-space-norwap">Date</th>
          <th className="Dashboard-table-head white-space-norwap">Location</th>
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
              <td className="dash-body-text white-space-norwap ">{val.name}</td>
              <td className="dash-body-text white-space-norwap ">28/12/22</td>
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
  );
};

export default withRouter(ProgramTable);
