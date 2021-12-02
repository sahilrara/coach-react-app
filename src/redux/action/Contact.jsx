import Swal from "sweetalert2";
import {
  GetAllConactListApi,
  GetCoachDetailsApi,
  getContactDetailsApi,
} from "../apis/Contact";

export const GET_CONTACT_LIST = "GET_CONTACT_LIST";
export const GET_CONTACT_DETAILS = "GET_CONTACT_DETAILS";
export const GET_COACH_DETAILS_LIST = "GET_COACH_DETAILS_LIST";

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
    if (response.success) {
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
