import { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { DeleteUserAction } from "../../redux/action/userAction";
import Loader from "../common/loader/Loader";

const UserDashboardTableContent = ({ index, val, editUserDetails }) => {
  const dispatch = useDispatch();
  const [userDeletedLoader, setUserDeletedLoader] = useState(false);
  const deleteUserDetails = (userId) => {
    if (!!userId) {
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
          text: "You want to delete This User.",
          icon: "Error",
          showCancelButton: true,
          confirmButtonText: `${userDeletedLoader ? <Loader /> : "Yes"}`,
          cancelButtonText: "No",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            dispatch(DeleteUserAction(setUserDeletedLoader, userId));
          }
        });
    }
  };

  return (
    <tr key={index}>
      
      <td className="dash-body-text white-space-norwap ">{val.firstName}</td>
      <td className="dash-body-text white-space-norwap ">{val.username}</td>
      <td>
        <div className="d-flex w-100 white-space-norwap justify-content-between ">
          <p className="my-auto dash-body-text ">{val.email}</p>
          <div className="">
            <button
              onClick={() => editUserDetails(val._id)}
              className=" px-4 mx-3 btn edit-btn-dash"
            >
              Edit
            </button>
            <button
              className="btn  px-4 remove-btn-dash"
              onClick={() => deleteUserDetails(val._id)}
            >
              Remove
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
};
export default UserDashboardTableContent;
