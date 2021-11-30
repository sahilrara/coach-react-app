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

/**
 *  forgot password api
 * @param {Object} data
 * @returns
 */
export const ForgotPasswordApi = async (data) => {
  return await axiosRequest("POST", `/forgot/password`, data);
};

/**
 *  forgot password api
 * @param {Object} data
 * @returns
 */
export const ResetPasswordApi = async (data) => {
  return await axiosRequest("POST", `/reset/password`, data);
};
