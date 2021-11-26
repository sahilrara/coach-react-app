import React, { useState } from "react";
import SideBar from "../Sidebar";
import { withRouter } from "react-router-dom";
import AdminHeader from "../common/AdminHeader";

function EditProgram({ history }) {
  const [error, setError] = useState(false);
  const [editProgram, setEditProgram] = useState({
    name: "",
    date: "",
    location: "",
    event: "",
    eventdeatils: "",
    detail2: "",
    detail3: "",
    detail4: "",
    desc: "",
  });
  const editProgramHandler = () => {
    setError(true);
    if (
      editProgram.name &&
      editProgram.date &&
      editProgram.location &&
      editProgram.event &&
      editProgram.eventdeatils &&
      editProgram.detail2 &&
      editProgram.detail3 &&
      editProgram.detail4 &&
      editProgram.desc !== ""
    ) {
      setEditProgram(editProgram);
    }
  };
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
              <h2 className="edit-program-text">Edit Program</h2>
              <button
                onClick={() => history.push("/admin/dashboard/program")}
                type="button"
                className=" btn ms-2 rounded-1px fw-700 fs-20 fs-xs-16 px-4
                        h-50px  bg-dark black-btn-skew btn-skew border-unset d-flex align-items-center
                        justify-content-center "
              >
                <span className=" skew-text text-white">Back</span>
              </button>
            </div>
          </div>
          <div className="edit-form mb-5 px-4 pt-4">
            {/* <p className="mt-5">Change user information here</p> */}
            <div className="row">
              <div className="col-lg-6 col-12 mt-2">
                <input
                  className="w-100 edit-input"
                  type="text"
                  placeholder="Name"
                  onChange={(e) =>
                    setEditProgram({
                      ...editProgram,
                      name: e.target.value,
                    })
                  }
                />
                <span className="text-danger text-start">
                  {error && editProgram.name === "" ? (
                    <p>Name is Required</p>
                  ) : (
                    ""
                  )}
                </span>
              </div>
              <div className="col-lg-6 col-12 mt-2">
                <input
                  className="w-100 edit-input"
                  type="text"
                  placeholder="Date"
                  onChange={(e) =>
                    setEditProgram({
                      ...editProgram,
                      date: e.target.value,
                    })
                  }
                />
                <span className="text-danger text-start">
                  {error && editProgram.date === "" ? (
                    <p>Date is Required</p>
                  ) : (
                    ""
                  )}
                </span>
              </div>
              <div className="col-lg-6 col-12 mt-2">
                <input
                  className="w-100 edit-input"
                  type="text"
                  placeholder="Location"
                  onChange={(e) =>
                    setEditProgram({
                      ...editProgram,
                      location: e.target.value,
                    })
                  }
                />
                <span className="text-danger text-start">
                  {error && editProgram.location === "" ? (
                    <p> Location is Required</p>
                  ) : (
                    ""
                  )}
                </span>
              </div>
              <div className="col-lg-6 col-12 mt-2">
                <input
                  className="w-100 edit-input"
                  type="text"
                  placeholder="Event"
                  onChange={(e) =>
                    setEditProgram({
                      ...editProgram,
                      event: e.target.value,
                    })
                  }
                />
                <span className="text-danger text-start">
                  {error && editProgram.event === "" ? (
                    <p> Event is Required</p>
                  ) : (
                    ""
                  )}
                </span>
              </div>
            </div>
            <p className="mb-3 mt-5">Event Details</p>
            <div className="row">
              <div className="col-lg-6 col-12 mt-2">
                <input
                  className="w-100 edit-input"
                  type="text"
                  placeholder="Detail-1"
                  onChange={(e) =>
                    setEditProgram({
                      ...editProgram,
                      eventdeatils: e.target.value,
                    })
                  }
                />
                <span className="text-danger text-start">
                  {error && editProgram.eventdeatils === "" ? (
                    <p> Detail1 is Required</p>
                  ) : (
                    ""
                  )}
                </span>
              </div>
              <div className="col-lg-6 col-12 mt-2">
                <input
                  className="w-100 edit-input"
                  type="text"
                  placeholder="Detail-2"
                  onChange={(e) =>
                    setEditProgram({
                      ...editProgram,
                      detail2: e.target.value,
                    })
                  }
                />
                <span className="text-danger text-start">
                  {error && editProgram.detail2 === "" ? (
                    <p> Detail2 is Required</p>
                  ) : (
                    ""
                  )}
                </span>
              </div>
              <div className="col-lg-6 col-12 mt-2">
                <input
                  className="w-100 edit-input"
                  type="text"
                  placeholder="Detail-3"
                  onChange={(e) =>
                    setEditProgram({
                      ...editProgram,
                      detail3: e.target.value,
                    })
                  }
                />
                <span className="text-danger text-start">
                  {error && editProgram.detail3 === "" ? (
                    <p> Detail3 is Required</p>
                  ) : (
                    ""
                  )}
                </span>
              </div>
              <div className="col-lg-6 col-12 mt-2">
                <input
                  className="w-100 edit-input"
                  type="text"
                  placeholder="Detail-4"
                  onChange={(e) =>
                    setEditProgram({
                      ...editProgram,
                      detail4: e.target.value,
                    })
                  }
                />
                <span className="text-danger text-start">
                  {error && editProgram.detail4 === "" ? (
                    <p> Detail4 is Required</p>
                  ) : (
                    ""
                  )}
                </span>
              </div>
            </div>
            <div>
              <p className="mt-5 pb-2">Description :</p>
              <textarea
                onChange={(e) =>
                  setEditProgram({
                    ...editProgram,
                    desc: e.target.value,
                  })
                }
                className="form-control"
                rows="7"
                placeholder="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil labore illo, est pariatur maiores, ducimus ab quis quod illum sit optio blanditiis provident sint ullam! Quis quod suscipit veritatis eveniet?"
                id="floatingTextarea2"
              />
              <span className="text-danger text-start">
                {error && editProgram.desc === "" ? (
                  <p> Description is Required</p>
                ) : (
                  ""
                )}
              </span>
            </div>
            <div className="mt-4 pt-2 d-flex flexs-row pb-5 align-items-center align-items-sm-start">
              <button
                onClick={() => editProgramHandler()}
                type="button"
                className=" btn ms-2 rounded-1px fw-700 fs-20 fs-xs-16 px-4
                        h-50px  bg-dark black-btn-skew btn-skew border-unset d-flex align-items-center
                        justify-content-center "
              >
                <span className=" skew-text text-white">Save</span>
              </button>

              <button
                type="button"
                className="
                        btn
                        ms-4
                        rounded-1px
                        fw-700
                        fs-20 fs-xs-16 
                        px-4
                        h-50px
                        
                bg-gray gray-btn-skew
                        btn-skew
                        border-unset
                        d-flex
                        align-items-center
                        justify-content-center
                      "
              >
                <span className="position-absolute skew-text ">Cancel</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(EditProgram);
