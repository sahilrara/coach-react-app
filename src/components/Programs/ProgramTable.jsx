import React from "react";
import { Table } from "react-bootstrap";
import ProgramTableContent from "./ProgramTableContent";
import NoData from "../../assets/img/nodata.svg";

const ProgramTable = ({ allProgramList }) => {
  return (
    <>
      {allProgramList && allProgramList > 0 ? (
        <Table responsive>
          <thead className="Dashboard-table-head  cursor-pointer">
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
            {allProgramList.map((val, index) => {
              return <ProgramTableContent val={val} index={index} />;
            })}
          </tbody>
        </Table>
      ) : (
        <>
          <img
            className="nodata-img d-block mx-auto"
            src={NoData}
            alt="NoData"
          />
          <p className="text-center fw-bold"> You have no programs</p>
        </>
      )}
    </>
  );
};

export default ProgramTable;
