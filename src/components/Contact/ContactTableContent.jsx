import React from "react";

const ContactTableContent = ({ handleShow }) => {
  return (
    <tr>
      <td className="dash-body-text white-space-norwap ">fhgfhg</td>
      <td className="dash-body-text white-space-norwap ">asdfghjkl</td>
      <td className="dash-body-text white-space-norwap ">asdfghjk</td>
      <td>
        <div className="d-flex w-100 white-space-norwap justify-content-between ">
          <p className="my-auto dash-body-text ">sdfghjk</p>
          <div className="">
            <button
              className=" px-4 mx-3 btn edit-btn-dash"
              onClick={() => handleShow()}
            >
              View
            </button>
            <button className="btn  px-4 remove-btn-dash">Remove</button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ContactTableContent;
