import { axiosRequest } from "../helper";

/**
 * get all user list Api
 * @param {Number} page
 * @returns
 */
export const GetAllUserListApi = async (page) => {
  return await axiosRequest("GET", `/admin/all-users?page=${page}&limit=10`);
};

/**
 * User details api
 * @param {Object} data
 * @returns
 */
export const getUserDetailsApi = async (value) => {
  return await axiosRequest("GET", `/user/detail/${value}`);
};

/**
 * Update user details api
 * @param {Object} data
 * @returns
 */
export const updateUserDetailsApi = async (userId, data) => {
  return await axiosRequest("PUT", `/update/user/${userId}`, data);
};

/**
 * Delete user details api
 * @param {Object} data
 * @returns
 */
export const DeleteUserApi = async (userId) => {
  return await axiosRequest("DELETE", `/admin/user/delete/${userId}`);
};
