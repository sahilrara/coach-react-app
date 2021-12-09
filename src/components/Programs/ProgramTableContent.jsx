import moment from "moment";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import Swal from "sweetalert2";
import { DeleteProgramDetailsAction } from "../../redux/action/ProgramAction";

const ProgramTableContent = ({ val, history }) => {
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
      <td className="dash-body-text white-space-norwap ">{val.name}</td>
      <td className="dash-body-text white-space-norwap ">
        {moment(val.createdAt).format("DD/MM/YY")}
      </td>
      <td className="dash-body-text white-space-norwap ">{val.location}</td>
      <td>
        <div className="d-flex w-100 white-space-norwap justify-content-between ">
          <p className="my-auto dash-body-text ">{val.event}</p>
          <div className="">
            <button
              className=" px-4 mx-3 btn edit-btn-dash"
              onClick={() =>
                history.push(`/admin/dashboard/edit/program/${val._id}`)
              }
            >
              Edit
            </button>
            <button
              className="btn  px-4 remove-btn-dash"
              onClick={() => deleteProgram(val._id)}
            >
              Remove
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default withRouter(ProgramTableContent);
