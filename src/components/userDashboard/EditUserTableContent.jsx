import moment from "moment";
import React from "react";
import { withRouter } from "react-router";

const EditUserTableContent = ({ history, userId, value }) => {
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
            <button className="btn  px-4 remove-btn-dash">Remove</button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default withRouter(EditUserTableContent);
