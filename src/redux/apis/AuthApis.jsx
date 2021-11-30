import { axiosRequest } from "../helper";

/**
 * Login Api
 * @param {Object} data
 * @returns
 */
export const LoginApi = async (data) => {
  return await axiosRequest("POST", `/login`, data);
};

/**
 * Change password Api
 * @param {Object} data
 * @returns
 */
export const ChangePasswordApi = async (data) => {
  return await axiosRequest("POST", `/change/password`, data);
};
