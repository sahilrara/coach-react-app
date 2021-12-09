import Swal from "sweetalert2";
import {
  CreateNewProgramApi,
  DeleteProgramDetailsApi,
  getProgramDetailsApi,
  getProgramListApi,
  updateProgramApi,
} from "../apis/programApi";

export const GET_ALL_PROGRAME_LIST = "GET_ALL_PROGRAME_LIST";
export const GET_PROGRAM_DETAILS = "GET_PROGRAM_DETAILS";
export const DELETE_PROGRAM_DETAILS_BY_ID = "DELETE_PROGRAM_DETAILS_BY_ID";

/**
 * Get all program List Action Creator Function
 * @returns
 */
export const getProgramList = (data) => ({
  type: GET_ALL_PROGRAME_LIST,
  data,
});

export const getProgramListAction =
  (setProgramListLoading, page, setTotalProgram) => async (dispatch) => {
    setProgramListLoading(true);
    try {
      const response = await getProgramListApi(page);
      if (response.success) {
        dispatch(getProgramList(response.programList));
        setTotalProgram(response.totalPrograms);
        setProgramListLoading(false);
      } else {
        setProgramListLoading(false);
      }
    } catch (error) {
      setProgramListLoading(false);
      Swal.fire("Error!", "Something went wrong. Try again!", "error");
      setTimeout(Swal.close, 2000);
    }
  };

/**
 * Create New Program Action Creator Function
 * @returns
 */

export const CreateNewProgramAction =
  (setCreateProgramLoading, data, history, match) => async (dispatch) => {
    setCreateProgramLoading(true);
    try {
      const response = await CreateNewProgramApi(data);
      if (response.success) {
        setCreateProgramLoading(false);
        Swal.fire("Success!", "Program Created successfully.", "success");
        setTimeout(Swal.close, 2000);
        if (
          match.path ===
          "/admin/dashboard/userlist/create-user/programs/:userId"
        ) {
          history.push(`/admin/dashboard/edit-user/userlist/${data.userId}`);
        } else {
          history.push("/admin/dashboard/program");
        }
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
  (setUpadteProgramLoading, programId, data, history, match) => async () => {
    setUpadteProgramLoading(true);
    try {
      const response = await updateProgramApi(programId, data);
      if (response.success) {
        setUpadteProgramLoading(false);
        Swal.fire("Success!", "Program updated successfully.", "success");
        setTimeout(Swal.close, 2000);
        if (
          match.path ===
          "/admin/dashboard/userlist/edit-user/programs/:userId/:programId"
        ) {
          history.push(`/admin/dashboard/edit-user/userlist/${data.userId}`);
        } else {
          history.push("/admin/dashboard/program");
        }
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
