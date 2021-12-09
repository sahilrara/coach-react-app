import { axiosRequest } from "../helper";

/**
 * Get User Program List Api
 * @param {Number} userId
 * @returns
 */

export const GetUserProgramListApi = async (page) => {
  return await axiosRequest(
    "GET",
    `/admin/user/list/program?page=${page}&limit=10`
  );
};

/**
 * Get User Program List Api
 * @param {Number} userId
 * @returns
 */

export const uploadImageApi = async (file, type) => {
  return await axiosRequest("POST", `/upload?folder=${type}`, file);
};
