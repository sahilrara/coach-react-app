import React from "react";
import { Table } from "react-bootstrap";
import ContactTableContent from "./ContactTableContent";

const ContactTable = ({ handleShow }) => {
  return (
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
        <ContactTableContent handleShow={handleShow} />
      </tbody>
    </Table>
  );
};

export default ContactTable;
