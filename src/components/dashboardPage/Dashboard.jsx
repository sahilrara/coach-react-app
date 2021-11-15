import React, { useState } from "react";
import SideBar from "../Sidebar";
import { Table, Modal } from "react-bootstrap";
import AdminHeader from "./AdminHeader";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
            <div className="col-6">
              <h1 className="dashboar-text mt-5 mb-4">Dashboard</h1>
            </div>
          </div>
          <Table responsive>
            <thead className="Dashboard-table-head ">
              <tr>
                <th className="dash-input">
                  {" "}
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />{" "}
                </th>
                <th className="Dashboard-table-head white-space-norwap">
                  Name
                </th>
                <th className="Dashboard-table-head white-space-norwap">
                  Username
                </th>
                <th className="Dashboard-table-head white-space-norwap">
                  Email
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
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />{" "}
                    </td>
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
                          <button
                            onClick={handleShow}
                            className=" px-4 mx-3 btn edit-btn-dash"
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

      <Modal
        className="dash-edit-modal"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header>
          <Modal.Title className="mx-auto">
            <h1
              className="modal-title  mt-2 pt-2 mb-0 modal-heading "
              id="exampleModalToggleLabel"
            >
              Edit User
            </h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            className="w-100 edit-input mt-2 ps-3"
            type="text"
            placeholder="Name"
          />
          <input
            className="w-100 edit-input mt-2 ps-3"
            type="text"
            placeholder="Last Name"
          />
          <input
            className="w-100 edit-input mt-2 ps-3"
            type="text"
            placeholder="Username"
          />
        </Modal.Body>
        <Modal.Footer>
          <div className="modal-footer mx-auto   pb-3 d-flex flex-row justify-content-center">
            <button
              type="button"
              className="btn 
                       
                        rounded-1px
                        fw-700
                        fs-20 fs-xs-16
                        px-4
                        h-50px
                        w-xs-110
                        
                bg-dark black-btn-skew
                        btn-skew
                        border-unset
                        d-flex
                        align-items-center
                        justify-content-center
                      "
            >
              <span className="position-absolute skew-text text-white">
                Save
              </span>
            </button>
            <button
              onClick={handleClose}
              type="button"
              className="btn        rounded-1px
                        fw-700

                        fs-20 fs-xs-16 mt-sm-0
                        px-4
                        h-50px
                      w-xs-110
                bg-gray gray-btn-skew ms-4
                        btn-skew
                        border-unset
                        d-flex
                        align-items-center
                        justify-content-center"
              data-bs-dismiss="modal"
            >
              <span className="position-absolute skew-text ">Cancel</span>
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Dashboard;
