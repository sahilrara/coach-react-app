import {
  GET_LOCAL_STORAGE_TOKEN,
  REMOVE_LOCAL_STORAGE_TOKEN,
  LOGIN_SUCCESSFULLY,
} from "../action/AuthAction";
import { GET_USER_DETAILS, UPDATE_USER_ME_DETAILS } from "../action/userAction";

const initialState = {
  token: "",
  userData: {},
  auth: false,
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    // USER DETAILS REDUCER TO SAVE USER DATA
    case GET_USER_DETAILS: {
      return {
        ...state,
        userData: action.data,
      };
    }

    // USER DETAILS REDUCER TO SAVE USER DATA
    case UPDATE_USER_ME_DETAILS: {
      return {
        ...state,
        userData: action.data,
      };
    }
    // LOGIN REDUCER TO SAVE USER DATA
    case LOGIN_SUCCESSFULLY: {
      return {
        ...state,
        userData: action.data.user,
        token: action.data["x-access-token"],
        auth: true,
      };
    }

    //Save token and auth
    case GET_LOCAL_STORAGE_TOKEN: {
      return {
        ...state,
        token: action.token,
        auth: !action.token ? false : true,
      };
    }

    //Remove token and auth
    case REMOVE_LOCAL_STORAGE_TOKEN: {
      return {
        ...state,
        token: null,
        auth: false,
      };
    }

    default:
      return state;
  }
}
