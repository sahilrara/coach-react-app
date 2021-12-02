import moment from "moment";
import { withRouter } from "react-router";

const ProgramTableContent = ({ val, history }) => {
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
            <button className="btn  px-4 remove-btn-dash">Remove</button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default withRouter(ProgramTableContent);
