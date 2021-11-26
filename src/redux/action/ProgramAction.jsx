import { getProgramListApi } from "../apis/programApi";

export const GET_PROGRAM_LIST = "GET_PROGRAM_LIST";

export const getProgramListAction = () => {
  try {
    const response = await getProgramListApi();
    console.log("response0", response);
  } catch (error) {
    setUserLoading(false);
  }
};
