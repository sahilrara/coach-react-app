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
 * get Coach Details Api
 * @returns
 */
export const GetCoachDetailsApi = async () => {
  return await axiosRequest("GET", `/about`);
};

/**
 * update Coach Details Api
 * @returns
 */
export const UpdateCoachDetailsApi = async (data) => {
  return await axiosRequest("PUT", `/admin/edit/about`, data);
};

/**
 * get Contact details api
 * @param {Object} data
 * @returns
 */
export const getContactDetailsApi = async (contactId) => {
  return await axiosRequest("GET", `/admin/detail/contact/${contactId}`);
};

/**
 * Delete contact details api
 * @param {Object} data
 * @returns
 */
export const DeleteContactListApi = async (contactId) => {
  return await axiosRequest("DELETE", `/admin/delete/contact/${contactId}`);
};
