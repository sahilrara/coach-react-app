import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import Swal from "sweetalert2";
import { DeleteProgramDetailsAction } from "../../redux/action/userProgramsAction";

const EditUserTableContent = ({ history, userId, value }) => {
  const dispatch = useDispatch();

  const deleteProgram = (contactId) => {
    if (!!contactId) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-success",
        },
        buttonsStyling: false,
      });
      swalWithBootstrapButtons
        .fire({
          title: "Are You Sure ?",
          text: "You want to delete This Program.",
          icon: "Error",
          showCancelButton: true,
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            dispatch(DeleteProgramDetailsAction(contactId));
          }
        });
    }
  };
  return (
    <tr>
      <td className="dash-body-text white-space-norwap ">{value.name}</td>
      <td className="dash-body-text white-space-norwap ">
        {moment(value.date).format("DD/MM/YY")}
      </td>
      <td className="dash-body-text white-space-norwap ">{value.location}</td>

      <td>
        <div className="d-flex w-100 white-space-norwap justify-content-between ">
          <p className="my-auto dash-body-text ">{value.event}</p>
          <div className="">
            <button
              type="button"
              className=" px-4 mx-3 btn edit-btn-dash"
              onClick={() =>
                history.push(
                  `/admin/dashboard/userlist/edit-user/programs/${userId}/${value._id}`
                )
              }
            >
              Edit
            </button>
            <button
              type="button"
              className="btn  px-4 remove-btn-dash"
              onClick={() => deleteProgram(value._id)}
            >
              Remove
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default withRouter(EditUserTableContent);
