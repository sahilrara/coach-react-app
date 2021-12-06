import React from "react";
import { Table } from "react-bootstrap";
import EditUserTableContent from "./EditUserTableContent";

const EditUserTable = () => {
  return (
    <>
      <Table responsive>
        <thead className="Dashboard-table-head ">
          <tr>
            <th className="Dashboard-table-head white-space-norwap">Name</th>
            <th className="Dashboard-table-head white-space-norwap">Date</th>
            <th className="Dashboard-table-head white-space-norwap">
              Location
            </th>
            <th className="Dashboard-table-head white-space-norwap">
              Event Types
            </th>
          </tr>
        </thead>
        <tbody className="dashboar-table-body">
          <EditUserTableContent />
        </tbody>
      </Table>
    </>
  );
};

export default EditUserTable;
