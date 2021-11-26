const UserDashboardTableContent = ({ index, val, editUserDetails }) => {
  return (
    <tr key={index}>
      <td>
        <input
          className="form-check-input cursor-pointer"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
      </td>
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
            <button className="btn  px-4 remove-btn-dash">Remove</button>
          </div>
        </div>
      </td>
    </tr>
  );
};
export default UserDashboardTableContent;
