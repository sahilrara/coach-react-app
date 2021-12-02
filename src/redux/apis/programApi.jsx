import { axiosRequest } from "../helper";

/**
 * Get program list Api
 * @param {Number} page
 * @returns
 */
export const getProgramListApi = async (page) => {
  return await axiosRequest("GET", `/admin/all-programs?page=${page}&limit=10`);
};

/**
 * Create new program details api
 * @param {Object} data
 * @returns
 */
export const CreateNewProgramApi = async (data) => {
  return await axiosRequest("POST", `/admin/add/program`, data);
};

/**
 * get program details api
 * @param {Object} data
 * @returns
 */
export const getProgramDetailsApi = async (programId) => {
  return await axiosRequest("GET", `/admin/detail/program/${programId}`);
};

/**
 * Update user details api
 * @param {Object} data
 * @returns
 */
export const updateProgramApi = async (programId, data) => {
  return await axiosRequest("POST", `/admin/update/program/${programId}`, data);
};

/**
 * Delete user details api
 * @param {Object} data
 * @returns
 */
export const DeleteUserApi = async (userId) => {
  return await axiosRequest("DELETE", `/admin/user/delete/${userId}`);
};

/**
 * Delete contact details api
 * @param {Number} programId
 * @returns
 */
export const DeleteProgramDetailsApi = async (programId) => {
  return await axiosRequest("DELETE", `/admin/delete/program/${programId}`);
};
