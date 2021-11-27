import React from "react";
import { Table } from "react-bootstrap";
import ProgramTableContent from "./ProgramTableContent";

const ProgramTable = ({ allProgramList }) => {
  return (
    <Table responsive>
      <thead className="Dashboard-table-head  cursor-pointer">
        <tr>
          <th className="dash-input ">
            <input
              className="form-check-input cursor-pointer"
              type="checkbox"
              id="flexCheckDefault"
            />
          </th>
          <th className="Dashboard-table-head white-space-norwap">Name</th>
          <th className="Dashboard-table-head white-space-norwap">Date</th>
          <th className="Dashboard-table-head white-space-norwap">Location</th>
          <th className="Dashboard-table-head white-space-norwap">
            Event Types
          </th>
        </tr>
      </thead>
      <tbody className="dashboar-table-body">
        {allProgramList.map((val, index) => {
          return <ProgramTableContent val={val} index={index} />;
        })}
      </tbody>
    </Table>
  );
};

export default ProgramTable;
