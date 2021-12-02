import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CreateNewProgramAction,
  updateProgramAction,
} from "../../redux/action/ProgramAction";
import Loader from "../common/loader/Loader";
import Bani from "../../assets/img/bani.png";
const insialState = {
  name: "",
  date: "",
  location: "",
  event: "",
  detail_1: "",
  detail_2: "",
  detail_3: "",
  detail_4: "",
  description: "",
};

const ProgramForm = ({ history, mode, programId }) => {
  const [uploadImg, setUploadImg] = useState("");

  const dispatch = useDispatch();
  const programDetails = useSelector((state) => state.List.programDetails);
  const [error, setError] = useState(false);
  const [createProgramLoading, setCreateProgramLoading] = useState(false);
  const [upadteProgramLoading, setUpadteProgramLoading] = useState(false);
  const [editProgram, setEditProgram] = useState(insialState);

  useEffect(() => {
    if (mode && !!programDetails) {
      setEditProgram(programDetails);
    }
  }, [programDetails, mode]);

  const SubmitNewProgramDetails = () => {
    setError(true);
    if (
      editProgram.name &&
      editProgram.date &&
      editProgram.location &&
      editProgram.event &&
      editProgram.detail_1 &&
      editProgram.detail_2 &&
      editProgram.detail_3 &&
      editProgram.detail_4 &&
      editProgram.description !== ""
    ) {
      dispatch(
        CreateNewProgramAction(setCreateProgramLoading, editProgram, history)
      );
    }
  };

  const UpdateProgramDetails = () => {
    setError(true);
    dispatch(
      updateProgramAction(
        setUpadteProgramLoading,
        programId,
        editProgram,
        history
      )
    );
  };
  const UploadImg = (e) => {
    let img = e.target.files[0];
    let image = URL.createObjectURL(img);
    setUploadImg(image);
  };
  return (
    <div className="edit-form mb-5 px-sm-4 px-2 pt-4">
      {/**<div className="row">
        <div className=" col-12 mt-2">
          <div className="d-flex  my-4 align-items-center flex-column ">
            <div className="me-3">
              <span className=" d-block">
                {uploadImg ? (
                  <img
                    className="edit-program-image w-100"
                    src={uploadImg}
                    alt=""
                  />
                ) : (
                  <img
                    className="edit-program-image w-100"
                    src={Bani}
                    alt="image"
                  />
                )}
              </span>
            </div>
            <div className="mx-3 mt-3 mt-lg-0 text-center text-md-start">
              <p className="mb-0 fs-24 fw-600 py-3">Upload Program Image</p>
            </div>
            <input
              type="file"
              id="file-input"
              onChange={(e) => UploadImg(e)}
              hidden
            />
            <div className="mt-3 mt-lg-0">
              <button
                type="button"
                className="btn ms-lg-4 rounded-1px fw-700 fs-20 fs-xs-16 px-4 h-50px w-200 w-101 bg-dark black-btn-skew btn-skew border-unset d-flex align-items-center justify-content-center"
              >
                <label
                  for="file-input"
                  className="position-absolute skew-text text-white cursor-pointer"
                >
                  Upload
                </label>
              </button>
            </div>{" "}
          </div>
        </div>
                </div>*/}
      <div className="row">
        <div className="col-lg-6 col-12 mt-2">
          <input
            className="w-100 edit-input"
            type="text"
            value={editProgram.name}
            placeholder="Name"
            onChange={(e) =>
              setEditProgram({
                ...editProgram,
                name: e.target.value,
              })
            }
          />
          <span className="text-danger text-start">
            {error && editProgram.name === "" ? <p>Name is Required</p> : ""}
          </span>
        </div>
        <div className="col-lg-6 col-12 mt-2">
          <input
            className="w-100 edit-input"
            type="date"
            value={editProgram.date}
            placeholder="Date"
            onChange={(e) =>
              setEditProgram({
                ...editProgram,
                date: e.target.value,
              })
            }
          />
          <span className="text-danger text-start">
            {error && editProgram.date === "" ? <p>Date is Required</p> : ""}
          </span>
        </div>
        <div className="col-lg-6 col-12 mt-2">
          <input
            className="w-100 edit-input"
            type="text"
            value={editProgram.location}
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
            value={editProgram.event}
            placeholder="Event"
            onChange={(e) =>
              setEditProgram({
                ...editProgram,
                event: e.target.value,
              })
            }
          />
          <span className="text-danger text-start">
            {error && editProgram.event === "" ? <p> Event is Required</p> : ""}
          </span>
        </div>
      </div>
      <p className="mb-3 mt-5">Event Details</p>
      <div className="row">
        <div className="col-lg-6 col-12 mt-2">
          <input
            className="w-100 edit-input"
            type="text"
            value={editProgram.detail_1}
            placeholder="Detail-1"
            onChange={(e) =>
              setEditProgram({
                ...editProgram,
                detail_1: e.target.value,
              })
            }
          />
          <span className="text-danger text-start">
            {error && editProgram.detail_1 === "" ? (
              <p> Detail-1 is Required</p>
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
            value={editProgram.detail_2}
            onChange={(e) =>
              setEditProgram({
                ...editProgram,
                detail_2: e.target.value,
              })
            }
          />
          <span className="text-danger text-start">
            {error && editProgram.detail_2 === "" ? (
              <p> Detail-2 is Required</p>
            ) : (
              ""
            )}
          </span>
        </div>
        <div className="col-lg-6 col-12 mt-2">
          <input
            className="w-100 edit-input"
            type="text"
            value={editProgram.detail_3}
            placeholder="Detail-3"
            onChange={(e) =>
              setEditProgram({
                ...editProgram,
                detail_3: e.target.value,
              })
            }
          />
          <span className="text-danger text-start">
            {error && editProgram.detail_3 === "" ? (
              <p> Detail-3 is Required</p>
            ) : (
              ""
            )}
          </span>
        </div>
        <div className="col-lg-6 col-12 mt-2">
          <input
            className="w-100 edit-input"
            type="text"
            value={editProgram.detail_4}
            placeholder="Detail-4"
            onChange={(e) =>
              setEditProgram({
                ...editProgram,
                detail_4: e.target.value,
              })
            }
          />
          <span className="text-danger text-start">
            {error && editProgram.detail_4 === "" ? (
              <p> Detail-4 is Required</p>
            ) : (
              ""
            )}
          </span>
        </div>
      </div>
      <div>
        <p className="mt-5 pb-2">Description :</p>
        <textarea
          value={editProgram.description}
          onChange={(e) =>
            setEditProgram({
              ...editProgram,
              description: e.target.value,
            })
          }
          className="form-control"
          rows="7"
          placeholder="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil labore illo, est pariatur maiores, ducimus ab quis quod illum sit optio blanditiis provident sint ullam! Quis quod suscipit veritatis eveniet?"
          id="floatingTextarea2"
        />
        <span className="text-danger text-start">
          {error && editProgram.description === "" ? (
            <p> Description is Required</p>
          ) : (
            ""
          )}
        </span>
      </div>
      <div className="mt-4 pt-2 d-flex flexs-row pb-5 align-items-center align-items-sm-start">
        {mode ? (
          <button
            onClick={() => UpdateProgramDetails()}
            type="button"
            disabled={upadteProgramLoading}
            className="btn ms-2 rounded-1px fw-700 fs-20 fs-xs-16 px-4 h-50px  bg-dark black-btn-skew btn-skew border-unset d-flex align-items-center justify-content-center "
          >
            <span className=" skew-text text-white">
              {upadteProgramLoading ? <Loader /> : "Update"}
            </span>
          </button>
        ) : (
          <button
            onClick={() => SubmitNewProgramDetails()}
            type="button"
            disabled={createProgramLoading}
            className="btn ms-2 rounded-1px fw-700 fs-20 fs-xs-16 px-4 h-50px  bg-dark black-btn-skew btn-skew border-unset d-flex align-items-center justify-content-center "
          >
            <span className=" skew-text text-white">
              {createProgramLoading ? <Loader /> : "Save"}
            </span>
          </button>
        )}

        <button
          type="button"
          className=" btn ms-4 rounded-1px fw-700 fs-20 fs-xs-16 px-4 h-50px bg-gray gray-btn-skew btn-skew border-unset d-flex align-items-center justify-content-center"
        >
          <span className="position-absolute skew-text ">Cancel</span>
        </button>
      </div>
    </div>
  );
};
export default ProgramForm;
