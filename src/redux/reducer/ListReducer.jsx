import { GET_ALL_USER_DETAILS, GET_ALL_USER_LIST } from "../action/userAction";

const initialState = {
  allUserList: [],
  allUserDetails: {},
};

export default function ListReducer(state = initialState, action) {
  switch (action.type) {
    // GET ALL USER LIST REDUCER
    case GET_ALL_USER_LIST: {
      return {
        ...state,
        allUserList: action.data,
      };
    }

    // GET ALL USER LIST REDUCER
    case GET_ALL_USER_DETAILS: {
      return {
        ...state,
        allUserDetails: action.data,
      };
    }
    default:
      return state;
  }
}
