import { axiosRequest } from "../helper";
/**
 * put user programs
 * @param {Number} page
 * @returns
 */
// export const GetAllUserListApi = async (page) => {
//   return await axiosRequest("GET", `/admin/all-users?page=${page}&limit=10`);
// };

export const UpdateUserProgramApi = async () => {
  return await axiosRequest("PUT", "/update/program/:programId");
};
