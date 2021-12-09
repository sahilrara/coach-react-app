import Swal from "sweetalert2";
import {
  CreateNewProgramApi,
  DeleteProgramDetailsApi,
  getProgramDetailsApi,
  getProgramListApi,
  updateProgramApi,
} from "../apis/programApi";
import { GetUserProgramListApi } from "../apis/userProgramsApi";

export const GET_USER_PROGRAM_LIST = "GET_USER_PROGRAM_LIST";
export const GET_PROGRAM_DETAILS = "GET_PROGRAM_DETAILS";
export const DELETE_PROGRAM_DETAILS_BY_ID = "DELETE_PROGRAM_DETAILS_BY_ID";

/**
 * Get all user program List Action Creator Function
 * @returns
 */
export const GetUserProgramList = (data) => ({
  type: GET_USER_PROGRAM_LIST,
  data,
});

export const GetUserProgramListAction =
  (setUserProgramLoading, page, setTotalUserProgram) => async (dispatch) => {
    setUserProgramLoading(true);
    try {
      const response = await GetUserProgramListApi(page);
      if (response.success) {
        dispatch(GetUserProgramList(response.programList));
        setTotalUserProgram(response.totalPrograms);
        setUserProgramLoading(false);
      } else {
        setUserProgramLoading(false);
      }
    } catch (error) {
      setUserProgramLoading(false);
      Swal.fire("Error!", "Something went wrong. Try again!", "error");
      setTimeout(Swal.close, 2000);
    }
  };

/**
 * Create New Program Action Creator Function
 * @returns
 */

export const CreateNewProgramAction =
  (setCreateProgramLoading, data, history) => async (dispatch) => {
    setCreateProgramLoading(true);
    try {
      const response = await CreateNewProgramApi(data);
      if (response.success) {
        setCreateProgramLoading(false);
        Swal.fire("Success!", "Program Created successfully.", "success");
        setTimeout(Swal.close, 2000);
        history.push("/admin/dashboard/program");
      } else {
        setCreateProgramLoading(false);
      }
    } catch (error) {
      setCreateProgramLoading(false);
      Swal.fire("Error!", "Something went wrong. Try again!", "error");
      setTimeout(Swal.close, 2000);
    }
  };

/**
 * Get all User List Action Creator Function
 * @returns
 */
export const getProgramDetails = (data) => ({
  type: GET_PROGRAM_DETAILS,
  data,
});

export const getProgramDetailsAction =
  (setDetailsLoader, programId) => async (dispatch) => {
    setDetailsLoader(true);
    try {
      const response = await getProgramDetailsApi(programId);
      if (response.success) {
        dispatch(getProgramDetails(response.program));
        setDetailsLoader(false);
      } else {
        setDetailsLoader(false);
      }
    } catch (error) {
      setDetailsLoader(false);
      Swal.fire("Error!", "Something went wrong. Try again!", "error");
      setTimeout(Swal.close, 2000);
    }
  };

/**
 * update all User List Action Creator Function
 * @returns
 */

export const updateProgramAction =
  (setUpadteProgramLoading, programId, data, history) => async () => {
    setUpadteProgramLoading(true);
    try {
      const response = await updateProgramApi(programId, data);
      if (response.success) {
        setUpadteProgramLoading(false);
        Swal.fire("Success!", "Program updated successfully.", "success");
        setTimeout(Swal.close, 2000);
        history.push("/admin/dashboard/program");
      } else {
        setUpadteProgramLoading(false);
      }
    } catch (error) {
      setUpadteProgramLoading(false);
      Swal.fire("Error!", "Something went wrong. Try again!", "error");
      setTimeout(Swal.close, 2000);
    }
  };

/**
 * delete all program List Action Creator Function
 * @returns
 */
export const DeleteProgramDetails = (data) => ({
  type: DELETE_PROGRAM_DETAILS_BY_ID,
  data,
});

export const DeleteProgramDetailsAction = (programId) => async (dispatch) => {
  try {
    const response = await DeleteProgramDetailsApi(programId);
    if (response.success) {
      dispatch(DeleteProgramDetails(programId));
      Swal.fire("Success!", "Program Deleted successfully.", "success");
      setTimeout(Swal.close, 2000);
    }
  } catch (error) {
    Swal.fire("Error!", "Something went wrong. Try again!", "error");
    setTimeout(Swal.close, 2000);
  }
};
