import { axiosRequest } from "../helper";

export const getProgramListApi = async () => {
  return await axiosRequest("GET", `/admin/all-programs`);
};
