import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { DeleteContactListAction } from "../../redux/action/Contact";

const ContactTableContent = ({ ViewContactDetails, contactList }) => {
  const dispatch = useDispatch();

  const deleteContact = (contactId) => {
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
          text: "You want to delete This Contact.",
          icon: "Error",
          showCancelButton: true,
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            dispatch(DeleteContactListAction(contactId));
          }
        });
    }
  };

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
                  <button
                    className="btn  px-4 remove-btn-dash"
                    type="button"
                    onClick={() => deleteContact(contact._id)}
                  >
                    Remove
                  </button>
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
