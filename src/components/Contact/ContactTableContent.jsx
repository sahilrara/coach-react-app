import moment from "moment";
import React from "react";

const ContactTableContent = ({ ViewContactDetails, contactList }) => {
  return (
    <>
      {contactList.map((contact, index) => {
        return (
          <tr key={index}>
            <td className="dash-body-text white-space-norwap ">
              {moment(contact.createdAt).format("DD/MMMM/YYYY")}
            </td>
            <td className="dash-body-text white-space-norwap ">
              {contact.name}
            </td>
            <td className="dash-body-text white-space-norwap ">
              {contact.phone}
            </td>
            <td>
              <div className="d-flex w-100 white-space-norwap justify-content-between ">
                <p className="my-auto dash-body-text ">{contact.email}</p>
                <div>
                  <button
                    className=" px-4 mx-3 btn edit-btn-dash"
                    onClick={() => ViewContactDetails(contact._id)}
                  >
                    View
                  </button>
                  <button className="btn  px-4 remove-btn-dash">Remove</button>
                </div>
              </div>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default ContactTableContent;
