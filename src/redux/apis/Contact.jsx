import { axiosRequest } from "../helper";

/**
 * get all Contact user list Api
 * @param {Number} page
 * @returns
 */
export const GetAllConactListApi = async (page) => {
  return await axiosRequest("GET", `/admin/contacts?page=${page}&limit=10`);
};

/**
 * get Contact details api
 * @param {Object} data
 * @returns
 */
export const getContactDetailsApi = async (contactId) => {
  return await axiosRequest("GET", `/admin/detail/contact/${contactId}`);
};

// /**
//  * Update user details api
//  * @param {Object} data
//  * @returns
//  */
// export const updateUserDetailsApi = async (userId, data) => {
//   return await axiosRequest("PUT", `/update/user/${userId}`, data);
// };

// /**
//  * Delete user details api
//  * @param {Object} data
//  * @returns
//  */
// export const DeleteUserApi = async (userId) => {
//   return await axiosRequest("DELETE", `/admin/user/delete/${userId}`);
// };
