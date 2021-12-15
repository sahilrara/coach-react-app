import { Table } from "react-bootstrap";
import UserDashboardTableContent from "./UserDashboardTableContent";
import BubblesLoader from "../common/loader/BubblesLoader";
import NoData from "../../assets/img/nodata.svg";
const UserDashboardTable = ({ userList, userLoading }) => {
  return (
    <>
      {userLoading ? (
        <div className="d-flex justify-content-center align-items-center h-100 flex-grow-1">
          {" "}
          <BubblesLoader />
        </div>
      ) : (
        <>
          {userList && userList.length > 0 ? (
            <Table responsive>
              <thead className="Dashboard-table-head ">
                <tr>
                  <th className="Dashboard-table-head white-space-norwap">
                    Name
                  </th>
                  <th className="Dashboard-table-head white-space-norwap">
                    Username
                  </th>
                  <th className="Dashboard-table-head white-space-norwap">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody className="dashboar-table-body">
                {userList && !!userList.length
                  ? userList.map((val, index) => {
                      return (
                        <UserDashboardTableContent index={index} val={val} />
                      );
                    })
                  : ""}
              </tbody>
            </Table>
          ) : (
            <>
              <img
                className="nodata-img d-block mx-auto"
                src={NoData}
                alt="NoData"
              />
              <p className="text-center fw-bold"> You don't have any users</p>
            </>
          )}
        </>
      )}
    </>
  );
};
export default UserDashboardTable;
