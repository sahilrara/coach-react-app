import Swal from "sweetalert2";
import { UpdateUserProgramApi } from "../apis/userProgramsApi";

/**
 * Get all program List Action Creator Function
 * @returns
 */
export const updateProgramListAction = (data) => async () => {
  try {
    const response = await UpdateUserProgramApi();
  } catch (error) {
    Swal.fire("Error!", "Something went wrong. Try again!", "error");
    setTimeout(Swal.close, 2000);
  }
};
