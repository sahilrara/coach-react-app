import {
  GET_COACH_DETAILS_LIST,
  GET_CONTACT_DETAILS,
  GET_CONTACT_LIST,
} from "../action/Contact";
import {
  GET_ALL_PROGRAME_LIST,
  GET_PROGRAM_DETAILS,
} from "../action/ProgramAction";
import {
  DELETE_USER_DETAILS_BY_ID,
  GET_ALL_USER_DETAILS,
  GET_ALL_USER_LIST,
  UPDATE_USER_DETAILS,
} from "../action/userAction";

const initialState = {
  allUserList: [],
  allUserDetails: {},
  allProgramList: [],
  programDetails: {},
  contactList: [],
  contactDetails: {},
  coachDetails: {},
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

    // DELETE USER LIST REDUCER
    case DELETE_USER_DETAILS_BY_ID: {
      const deleteAllUserList = [...state.allUserList];
      const deleteUserIndex = deleteAllUserList.findIndex(
        (user) => user.id === action.data
      );
      deleteAllUserList.splice(deleteUserIndex, 1);
      return {
        ...state,
        allUserList: deleteAllUserList,
      };
    }

    // GET ALL USER LIST REDUCER
    case GET_ALL_USER_DETAILS: {
      return {
        ...state,
        allUserDetails: action.data,
      };
    }

    //Update user details by id reducer
    case UPDATE_USER_DETAILS: {
      console.log("action.data", action.payload);
      const updateAllUserList = [...state.allUserList];
      const updateUserIndex = updateAllUserList.findIndex(
        (user) => user.id === action.payload.userId
      );
      updateAllUserList[updateUserIndex] = action.payload.data;
      return {
        ...state,
        allUserList: updateAllUserList,
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

    /**---------------------------GET COACH DETAILS-------------------- */
    // GET ALL coach details LIST REDUCER
    case GET_COACH_DETAILS_LIST: {
      return {
        ...state,
        coachDetails: action.data,
      };
    }

    default:
      return state;
  }
}
