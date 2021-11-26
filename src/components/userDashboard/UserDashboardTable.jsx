import { Table } from "react-bootstrap";
import UserDashboardTableContent from "./UserDashboardTableContent";
import BubblesLoader from "../common/loader/BubblesLoader";

const UserDashboardTable = ({ userList, editUserDetails, userLoading }) => {
  return (
    <>
      {userLoading ? (
        <BubblesLoader />
      ) : (
        <>
          {userList && userList.length > 0 ? (
            <Table responsive>
              <thead className="Dashboard-table-head ">
                <tr>
                  <th className="dash-input">
                    <input
                      className="form-check-input cursor-pointer"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </th>
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
                        <UserDashboardTableContent
                          index={index}
                          val={val}
                          editUserDetails={editUserDetails}
                        />
                      );
                    })
                  : ""}
              </tbody>
            </Table>
          ) : (
            ""
          )}
        </>
      )}
    </>
  );
};
export default UserDashboardTable;
