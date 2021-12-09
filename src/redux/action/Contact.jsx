import Swal from "sweetalert2";
import {
  DeleteContactListApi,
  GetAllConactListApi,
  GetCoachDetailsApi,
  getContactDetailsApi,
  UpdateCoachDetailsApi,
} from "../apis/Contact";

export const GET_CONTACT_LIST = "GET_CONTACT_LIST";
export const GET_CONTACT_DETAILS = "GET_CONTACT_DETAILS";
export const GET_COACH_DETAILS_LIST = "GET_COACH_DETAILS_LIST";
export const DELETE_CONTACT_DETAILS_BY_ID = "DELETE_CONTACT_DETAILS_BY_ID";

/**
 * Get User Details Action Creator Function
 * @returns
 */
export const getAllContactList = (data) => ({
  type: GET_CONTACT_LIST,
  data,
});

export const getAllContactListAction =
  (setContactLoading, page, setTotalContact) => async (dispatch) => {
    setContactLoading(true);
    try {
      const response = await GetAllConactListApi(page);
      if (response.success) {
        dispatch(getAllContactList(response.contacts));
        setTotalContact(response.totalContacts);
        setContactLoading(false);
      } else {
        setContactLoading(false);
      }
    } catch (error) {
      setContactLoading(false);
    }
  };

/**
 * GET CONTACT DETAILS ACTION CREATOR FUNCTION
 * @returns
 */
export const getContactDetails = (data) => ({
  type: GET_CONTACT_DETAILS,
  data,
});

export const getContactDetailsAction =
  (setDetailsLoader, contactId) => async (dispatch) => {
    setDetailsLoader(true);
    try {
      const response = await getContactDetailsApi(contactId);
      if (response.success) {
        dispatch(getContactDetails(response.detail));
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
 * delete all User List Action Creator Function
 * @returns
 */
export const DeleteContactList = (data) => ({
  type: DELETE_CONTACT_DETAILS_BY_ID,
  data,
});

export const DeleteContactListAction = (userId) => async (dispatch) => {
  try {
    const response = await DeleteContactListApi(userId);
    if (response.success) {
      dispatch(DeleteContactList(userId));
      Swal.fire("Success!", "Contact Deleted successfully.", "success");
      setTimeout(Swal.close, 2000);
    }
  } catch (error) {
    Swal.fire("Error!", "Something went wrong. Try again!", "error");
    setTimeout(Swal.close, 2000);
  }
};

/**---------------COACH DETAILS ACTION---------------*/

/**
 * Get coach Details Action Creator Function
 * @returns
 */
export const GetCoachDetails = (data) => ({
  type: GET_COACH_DETAILS_LIST,
  data,
});

export const GetCoachDetailsAction = (setLoadingCoach) => async (dispatch) => {
  setLoadingCoach(true);
  try {
    const response = await GetCoachDetailsApi();
    if (response.status) {
      dispatch(GetCoachDetails(response.about));
      setLoadingCoach(false);
    } else {
      setLoadingCoach(false);
    }
  } catch (error) {
    setLoadingCoach(false);
  }
};

/**
 * update coach details Action Creator Function
 * @returns
 */

export const UpdateCoachDetailsAction =
  (setUpdateDetails, data) => async () => {
    setUpdateDetails(true);
    try {
      const response = await UpdateCoachDetailsApi(data);
      if (response.success) {
        setUpdateDetails(false);
        Swal.fire("Success!", "Details updated successfully.", "success");
        setTimeout(Swal.close, 2000);
      } else {
        setUpdateDetails(false);
      }
    } catch (error) {
      setUpdateDetails(false);
      Swal.fire("Error!", "Something went wrong. Try again!", "error");
      setTimeout(Swal.close, 2000);
    }
  };
