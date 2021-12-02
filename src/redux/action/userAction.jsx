import Swal from "sweetalert2";
import {
  DeleteUserApi,
  GetAllUserListApi,
  getUserDetailsApi,
  updateUserDetailsApi,
} from "../apis/userApis";

export const GET_USER_DETAILS = "GET_USER_DETAILS";
export const GET_ALL_USER_LIST = "GET_ALL_USER_LIST";
export const GET_ALL_USER_DETAILS = "GET_ALL_USER_DETAILS";
export const UPDATE_USER_DETAILS = "UPDATE_USER_DETAILS";
export const DELETE_USER_DETAILS_BY_ID = "DELETE_USER_DETAILS_BY_ID";

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
export const updateUserDetails = (data, userId) => ({
  type: UPDATE_USER_DETAILS,
  payload: {
    userId: userId,
    data: data,
  },
});

export const updateUserDetailsAction =
  (setUpdateUserLoading, userId, data, handleClose) => async (dispatch) => {
    setUpdateUserLoading(true);
    try {
      const response = await updateUserDetailsApi(userId, data);
      if (!!response.success) {
        dispatch(updateUserDetails(response.user, userId));
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

/**
 * delete all User List Action Creator Function
 * @returns
 */
export const DeleteUser = (data) => ({
  type: DELETE_USER_DETAILS_BY_ID,
  data,
});

export const DeleteUserAction =
  (setUserDeletedLoader, userId) => async (dispatch) => {
    setUserDeletedLoader(true);
    try {
      const response = await DeleteUserApi(userId);
      if (response.success) {
        console.log(userId, "userId--");
        dispatch(DeleteUser(userId));
        setUserDeletedLoader(false);
        Swal.fire("Success!", "User Deleted successfully.", "success");
        setTimeout(Swal.close, 2000);
      } else {
        setUserDeletedLoader(false);
      }
    } catch (error) {
      setUserDeletedLoader(false);
      Swal.fire("Error!", "Something went wrong. Try again!", "error");
      setTimeout(Swal.close, 2000);
    }
  };
