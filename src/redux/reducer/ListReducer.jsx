import { GET_CONTACT_DETAILS, GET_CONTACT_LIST } from "../action/Contact";
import {
  GET_ALL_PROGRAME_LIST,
  GET_PROGRAM_DETAILS,
} from "../action/ProgramAction";
import {
  DELETE_USER_DETAILS,
  GET_ALL_USER_DETAILS,
  GET_ALL_USER_LIST,
} from "../action/userAction";

const initialState = {
  allUserList: [],
  allUserDetails: {},
  allProgramList: [],
  programDetails: {},
  contactList: [],
  contactDetails: {},
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
    case DELETE_USER_DETAILS: {
      const DeleteAllUserList = [...state.allUserList];
      const DeleteUserIndex = DeleteAllUserList.findIndex(
        (user) => user.id === action.data
      );
      DeleteAllUserList.splice(DeleteUserIndex, 1);
      return {
        ...state,
        allUserList: DeleteAllUserList,
      };
    }

    // GET ALL USER LIST REDUCER
    case GET_ALL_USER_DETAILS: {
      return {
        ...state,
        allUserDetails: action.data,
      };
    }

    /**--------------------PROGRAM--------------------- */

    // GET ALL Program LIST REDUCER
    case GET_ALL_PROGRAME_LIST: {
      return {
        ...state,
        allProgramList: action.data,
      };
    }

    // GET Program LIST DETAILS REDUCER
    case GET_PROGRAM_DETAILS: {
      return {
        ...state,
        programDetails: action.data,
      };
    }

    /**------------------------------CONTACT LIST---------------------- */

    // GET ALL Program LIST REDUCER
    case GET_CONTACT_LIST: {
      return {
        ...state,
        contactList: action.data,
      };
    }

    // GET contact DETAILS REDUCER
    case GET_CONTACT_DETAILS: {
      return {
        ...state,
        contactDetails: action.data,
      };
    }

    default:
      return state;
  }
}
