import {
  DELETE_CONTACT_DETAILS_BY_ID,
  GET_COACH_DETAILS_LIST,
  GET_CONTACT_DETAILS,
  GET_CONTACT_LIST,
} from "../action/Contact";
import { GET_ALL_GALLERY_LIST } from "../action/Gallery";
import {
  DELETE_PROGRAM_DETAILS_BY_ID,
  GET_ALL_PROGRAME_LIST,
  GET_PROGRAM_DETAILS,
} from "../action/ProgramAction";
import {
  DELETE_USER_DETAILS_BY_ID,
  GET_ALL_USER_DETAILS,
  GET_ALL_USER_LIST,
  UPDATE_USER_DETAILS,
} from "../action/userAction";
import { GET_USER_PROGRAM_LIST } from "../action/userProgramsAction";
import { REMOVE_FILE_URL, UPLOAD_IAMGE } from "../UploadFile";

const initialState = {
  allUserList: [],
  allUserDetails: {},
  allProgramList: [],
  programDetails: {},
  contactList: [],
  contactDetails: {},
  coachDetails: {},
  fileUrl: "",
  userProgramList: [],
  allGalleryList: [],
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
      const updateAllUserList = [...state.allUserList];
      const updateUserIndex = updateAllUserList.findIndex(
        (user) => user._id === action.payload.userId
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

    case DELETE_PROGRAM_DETAILS_BY_ID: {
      const deleteProgramList = [...state.allProgramList];
      const deleteProgramIndex = deleteProgramList.findIndex(
        (user) => user._id === action.data
      );
      deleteProgramList.splice(deleteProgramIndex, 1);
      return {
        ...state,
        allProgramList: deleteProgramList,
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

    //Delete contact details by id reducer
    case DELETE_CONTACT_DETAILS_BY_ID: {
      const deleteContactDetails = [...state.contactList];
      const deleteUserIndex = deleteContactDetails.findIndex(
        (user) => user._id === action.data
      );
      deleteContactDetails.splice(deleteUserIndex, 1);
      return {
        ...state,
        contactList: deleteContactDetails,
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
    // GET Upload Image
    case UPLOAD_IAMGE: {
      return {
        ...state,
        fileUrl: action.file,
      };
    }
    //REMOVE FILE URL
    case REMOVE_FILE_URL: {
      return {
        ...state,
        fileUrl: "",
      };
    }
    /**USER PROGRAM LIST */

    case GET_USER_PROGRAM_LIST: {
      return {
        ...state,
        userProgramList: action.data,
      };
    }

    case DELETE_PROGRAM_DETAILS_BY_ID: {
      const deleteProgramList = [...state.userProgramList];
      const deleteProgramIndex = deleteProgramList.findIndex(
        (user) => user._id === action.data
      );
      deleteProgramList.splice(deleteProgramIndex, 1);
      return {
        ...state,
        userProgramList: deleteProgramList,
      };
    }

    /** Gallery List */
    case GET_ALL_GALLERY_LIST: {
      return {
        ...state,
        allGalleryList: action.data,
      };
    }

    default:
      return state;
  }
}
