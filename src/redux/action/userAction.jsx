import Swal from "sweetalert2";
import {
  GetAllUserListApi,
  getUserDetailsApi,
  updateUserDetailsApi,
} from "../apis/userApis";

export const GET_USER_DETAILS = "GET_USER_DETAILS";
export const GET_ALL_USER_LIST = "GET_ALL_USER_LIST";
export const GET_ALL_USER_DETAILS = "GET_ALL_USER_DETAILS";
export const UPDATE_USER_DETAILS = "UPDATE_USER_DETAILS";

/**
 * Get User Details Action Creator Function
 * @returns
 */
export const getUserDetails = (data) => ({
  type: GET_USER_DETAILS,
  data,
});

export const getUserDetailsAction =
  (setUserLoading, value) => async (dispatch) => {
    setUserLoading(true);
    try {
      const response = await getUserDetailsApi(value);
      if (response.success) {
        dispatch(getUserDetails(response.user));
        setUserLoading(false);
      } else {
        setUserLoading(false);
      }
    } catch (error) {
      setUserLoading(false);
    }
  };

/**
 * Get all User List Action Creator Function
 * @returns
 */
export const GetAllUserList = (data) => ({
  type: GET_ALL_USER_LIST,
  data,
});

export const GetAllUserListAction =
  (setUserLoading, page, setTotalUsers) => async (dispatch) => {
    setUserLoading(true);
    try {
      const response = await GetAllUserListApi(page);
      if (response.success) {
        dispatch(GetAllUserList(response.userList));
        setTotalUsers(response.totalUsers);
        setUserLoading(false);
      } else {
        setUserLoading(false);
      }
    } catch (error) {
      setUserLoading(false);
      Swal.fire("Error!", "Something went wrong. Try again!", "error");
      setTimeout(Swal.close, 2000);
    }
  };

/**
 * Get all User List Action Creator Function
 * @returns
 */
export const getAllUserDetails = (data) => ({
  type: GET_ALL_USER_DETAILS,
  data,
});

export const getAllUserDetailsAction =
  (setUserDetailsLoading, value) => async (dispatch) => {
    setUserDetailsLoading(true);
    try {
      const response = await getUserDetailsApi(value);
      if (response.success) {
        dispatch(getAllUserDetails(response.user));
        setUserDetailsLoading(false);
      } else {
        setUserDetailsLoading(false);
      }
    } catch (error) {
      setUserDetailsLoading(false);
      Swal.fire("Error!", "Something went wrong. Try again!", "error");
      setTimeout(Swal.close, 2000);
    }
  };

/**
 * update all User List Action Creator Function
 * @returns
 */
export const updateUserDetails = (data) => ({
  type: UPDATE_USER_DETAILS,
  data,
});

export const updateUserDetailsAction =
  (setUpdateUserLoading, userId, data, handleClose) => async (dispatch) => {
    setUpdateUserLoading(true);
    try {
      const response = await updateUserDetailsApi(userId, data);
      if (response.success) {
        dispatch(updateUserDetails(response.user));
        setUpdateUserLoading(false);
        handleClose();
        Swal.fire("Success!", "User updated successfully.", "success");
        setTimeout(Swal.close, 2000);
      } else {
        setUpdateUserLoading(false);
      }
    } catch (error) {
      setUpdateUserLoading(false);
      Swal.fire("Error!", "Something went wrong. Try again!", "error");
      setTimeout(Swal.close, 2000);
    }
  };
