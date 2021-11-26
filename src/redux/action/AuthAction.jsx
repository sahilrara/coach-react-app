import Swal from "sweetalert2";
import { LoginApi } from "../apis/AuthApis";

export const LOGIN_SUCCESSFULLY = "LOGIN_SUCCESSFULLY";
export const REMOVE_LOCAL_STORAGE_TOKEN = "REMOVE_LOCAL_STORAGE_TOKEN";
export const GET_LOCAL_STORAGE_TOKEN = "GET_LOCAL_STORAGE_TOKEN";

/**
 * get Local Storage Token
 * @returns
 */
export const getLocalStorageToken = () => ({
  type: GET_LOCAL_STORAGE_TOKEN,
  token: localStorage.getItem("coach-champion-admin"),
});

/**
 * get Local Storage Token
 * @returns
 */
const removeLocalStorageToken = (token) => ({
  type: REMOVE_LOCAL_STORAGE_TOKEN,
  token,
});

export const removeLocalStorageTokenAction =
  (setLoadingLogOut, history) => async (dispatch) => {
    setLoadingLogOut(true);
    try {
      dispatch(removeLocalStorageToken());
      localStorage.setItem("coach-champion-admin", null);
      setLoadingLogOut(false);
      history.push("/");
      // window.location.reload();
    } catch (error) {
      setLoadingLogOut(false);
    }
  };

/**
 * Login action
 * @param {Object} data
 * @returns
 */
export const LoginSuccess = (data) => ({
  type: LOGIN_SUCCESSFULLY,
  data,
});

export const loginAction = (data, setLoading, history) => async (dispatch) => {
  setLoading(true);
  try {
    const response = await LoginApi(data);
    if (response.success) {
      if (response.user.isAdmin === true) {
        dispatch(LoginSuccess(response));
        localStorage.setItem(
          "coach-champion-admin",
          response["x-access-token"]
        );
        setLoading(false);
        history.push("/admin/dashboard/userlist");
      } else {
        setLoading(false);
        Swal.fire("Error!", "Something went wrong. Try again!", "error");
        setTimeout(Swal.close, 2000);
      }
    } else {
      setLoading(false);
      Swal.fire(
        "Error!",
        `${
          response && response.response && response.response.data
            ? response.response.data.message
            : "You have entered wrong email or password"
        }`,
        "error"
      );
      setTimeout(Swal.close, 2000);
    }
  } catch (error) {
    setLoading(false);
    Swal.fire("Error!", "Something went wrong", "error");
    setTimeout(Swal.close, 2000);
  }
};
