import React from "react";
import { withRouter } from "react-router";

const EditUserTableContent = ({ history }) => {
  return (
    <tr>
      <td className="dash-body-text white-space-norwap ">gdhdjd</td>
      <td className="dash-body-text white-space-norwap ">djjdd</td>
      <td className="dash-body-text white-space-norwap ">djjdd</td>

      <td>
        <div className="d-flex w-100 white-space-norwap justify-content-between ">
          <p className="my-auto dash-body-text ">kjsdjkisjdf</p>
          <div className="">
            <button
              type="button"
              className=" px-4 mx-3 btn edit-btn-dash"
              onClick={() =>
                history.push("/admin/dashboard/userlist/create/programs")
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
