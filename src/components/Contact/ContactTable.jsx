import React from "react";
import { Table } from "react-bootstrap";
import ContactTableContent from "./ContactTableContent";
import NoData from "../../assets/img/nodata.svg";
const ContactTable = ({ ViewContactDetails, contactList }) => {
  return (
    <>
      {contactList && contactList.length > 0 ? (
        <Table responsive>
          <thead className="Dashboard-table-head  cursor-pointer">
            <tr>
              <th className="Dashboard-table-head white-space-norwap">Date</th>
              <th className="Dashboard-table-head white-space-norwap">Name</th>
              <th className="Dashboard-table-head white-space-norwap">Phone</th>
              <th className="Dashboard-table-head white-space-norwap">Email</th>
            </tr>
          </thead>
          <tbody className="dashboar-table-body">
            <ContactTableContent
              ViewContactDetails={ViewContactDetails}
              contactList={contactList}
            />
          </tbody>
        </Table>
      ) : (
        <>
          <img
            className="nodata-img d-block mx-auto"
            src={NoData}
            alt="NoData"
          />
          <p className="text-center fw-bold"> You have no contacts list yet.</p>
        </>
      )}
    </>
  );
};

export default ContactTable;
