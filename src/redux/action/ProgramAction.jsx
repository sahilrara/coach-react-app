import Swal from "sweetalert2";
import {
  CreateNewProgramApi,
  getProgramDetailsApi,
  getProgramListApi,
  updateProgramApi,
} from "../apis/programApi";

export const GET_ALL_PROGRAME_LIST = "GET_ALL_PROGRAME_LIST";
export const GET_PROGRAM_DETAILS = "GET_PROGRAM_DETAILS";

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

// /**
//  * Get User Details Action Creator Function
//  * @returns
//  */
// export const getUserDetails = (data) => ({
//   type: GET_USER_DETAILS,
//   data,
// });

// export const getUserDetailsAction =
//   (setUserLoading, value) => async (dispatch) => {
//     setUserLoading(true);
//     try {
//       const response = await getUserDetailsApi(value);
//       if (response.success) {
//         dispatch(getUserDetails(response.user));
//         setUserLoading(false);
//       } else {
//         setUserLoading(false);
//       }
//     } catch (error) {
//       setUserLoading(false);
//     }
//   };

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
        dispatch(getProgramDetails(response.user));
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

// /**
//  * delete all User List Action Creator Function
//  * @returns
//  */
// export const DeleteUser = (data) => ({
//   type: DELETE_USER_DETAILS,
//   data,
// });

// export const DeleteUserAction =
//   (setUserDeletedLoader, userId) => async (dispatch) => {
//     setUserDeletedLoader(true);
//     try {
//       const response = await DeleteUserApi(userId);
//       if (response.success) {
//         dispatch(DeleteUser(userId));
//         setUserDeletedLoader(false);
//         Swal.fire("Success!", "User Deleted successfully.", "success");
//         setTimeout(Swal.close, 2000);
//       } else {
//         setUserDeletedLoader(false);
//       }
//     } catch (error) {
//       setUserDeletedLoader(false);
//       Swal.fire("Error!", "Something went wrong. Try again!", "error");
//       setTimeout(Swal.close, 2000);
//     }
//   };
