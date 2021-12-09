import Swal from "sweetalert2";
import {
  LoginApi,
  ChangePasswordApi,
  ForgotPasswordApi,
  ResetPasswordApi,
  VerifyEmailApi,
} from "../apis/AuthApis";

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

export const removeLocalStorageTokenAction = (history) => async (dispatch) => {
  try {
    dispatch(removeLocalStorageToken());
    localStorage.setItem("coach-champion-admin", null);
    history.push("/");
    // window.location.reload();
  } catch (error) {}
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

/**
 * password change
 * @returns
 */

export const ChangePasswordAction =
  (data, setLoadingChange, history) => async () => {
    setLoadingChange(true);
    try {
      const response = await ChangePasswordApi(data);
      if (response.success) {
        setLoadingChange(false);
        Swal.fire("Success", "Password Change Successfully", "success");
        setTimeout(Swal.close, 2000);
      } else {
        setLoadingChange(false);
        Swal.fire(
          "Ooops!",
          "You have entered wrong password,Try again!",
          "error"
        );
        setTimeout(Swal.close, 2000);
      }
    } catch (error) {
      setLoadingChange(false);
      Swal.fire("Error!", "Something went wrong", "error");
      setTimeout(Swal.close, 2000);
    }
  };

/**
 * Verify User Name action
 * @param {Object} data
 * @returns
 */
export const ForgotPasswordAction =
  (data, setLoadingVerify, history) => async () => {
    setLoadingVerify(true);
    try {
      const response = await ForgotPasswordApi(data);
      if (response.success) {
        setLoadingVerify(false);
        history.push(`/send/message/${data.email}`);
      } else {
        setLoadingVerify(false);
        Swal.fire("Error!", "No user exits", "error");
        setTimeout(Swal.close, 2000);
      }
    } catch (error) {
      setLoadingVerify(false);
      Swal.fire("Error!", "Something went wrong", "error");
      setTimeout(Swal.close, 2000);
    }
  };

/**
 * Reset password action
 * @param {Object} data
 * @returns
 */
export const ResetPasswordAction =
  (data, setLoadingVerifyLoading, history) => async () => {
    setLoadingVerifyLoading(true);
    try {
      const response = await ResetPasswordApi(data);
      if (response.success) {
        setLoadingVerifyLoading(false);
        history.push("/");
        Swal.fire("Success", "Password Reset Successfully", "error");
        setTimeout(Swal.close, 2000);
      } else {
        setLoadingVerifyLoading(false);
        Swal.fire("Error!", "Something went wrong", "error");
        setTimeout(Swal.close, 2000);
      }
    } catch (error) {
      setLoadingVerifyLoading(false);
      Swal.fire("Error!", "Something went wrong", "error");
      setTimeout(Swal.close, 2000);
    }
  };

/**
 * Reset password action
 * @param {Object} data
 * @returns
 */
export const VerifyEmailAction = (data, setLoadingVerify) => async () => {
  setLoadingVerify(true);
  try {
    const response = await VerifyEmailApi(data);
    if (response.success) {
      setLoadingVerify(false);
    } else {
      setLoadingVerify(false);
      Swal.fire("Error!", "Something went wrong", "error");
      setTimeout(Swal.close, 2000);
    }
  } catch (error) {
    setLoadingVerify(false);
    Swal.fire("Error!", "Something went wrong", "error");
    setTimeout(Swal.close, 2000);
  }
};
