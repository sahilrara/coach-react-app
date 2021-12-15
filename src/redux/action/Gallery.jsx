import Swal from "sweetalert2";
import {
  CreateGalleryListApi,
  DeleteGalleryListApi,
  GetAllGalleryListApi,
} from "../apis/Gallery";
import { RemoveFileUrlAction } from "../UploadFile";

export const GET_ALL_GALLERY_LIST = "GET_ALL_GALLERY_LIST";
export const DELETE_GALLERY_DETAILS_BY_ID = "DELETE_GALLERY_DETAILS_BY_ID";
export const CREATE_GALLERY_LIST = "CREATE_GALLERY_LIST";

/**
 * Get all program List Action Creator Function
 * @returns
 */
export const GetAllGalleryList = (data) => ({
  type: GET_ALL_GALLERY_LIST,
  data,
});

export const GetAllGalleryListAction =
  (setGalleryListLoading, page, setTotalGallery) => async (dispatch) => {
    setGalleryListLoading(true);
    try {
      const response = await GetAllGalleryListApi(page);
      if (response.success) {
        dispatch(GetAllGalleryList(response.galleryList));
        setTotalGallery(response.totalGallery);
        setGalleryListLoading(false);
      } else {
        setGalleryListLoading(false);
      }
    } catch (error) {
      setGalleryListLoading(false);
      Swal.fire("Error!", "Something went wrong. Try again!", "error");
      setTimeout(Swal.close, 2000);
    }
  };

/**
 * Create New Program Action Creator Function
 * @returns
 */
export const CreateGalleryList = (data) => ({
  type: CREATE_GALLERY_LIST,
  data,
});

export const CreateGalleryListAction =
  (setCreateGalleryLoading, data, setShow) => async (dispatch) => {
    setCreateGalleryLoading(true);
    try {
      const response = await CreateGalleryListApi(data);
      if (response.success) {
        setCreateGalleryLoading(false);
        Swal.fire("Success!", "Gallery Created successfully.", "success");
        setTimeout(Swal.close, 2000);
        setShow(false);
        dispatch(CreateGalleryList(response.gallery));
        dispatch(RemoveFileUrlAction());
      }
    } catch (error) {
      setCreateGalleryLoading(false);
      Swal.fire("Error!", "Something went wrong. Try again!", "error");
      setTimeout(Swal.close, 2000);
    }
  };

/**
 * delete all program List Action Creator Function
 * @returns
 */
export const DeleteGalleryList = (data) => ({
  type: DELETE_GALLERY_DETAILS_BY_ID,
  data,
});

export const DeleteGalleryListAction = (programId) => async (dispatch) => {
  try {
    const response = await DeleteGalleryListApi(programId);
    if (response.success) {
      dispatch(DeleteGalleryList(programId));
      Swal.fire("Success!", "Program Deleted successfully.", "success");
      setTimeout(Swal.close, 2000);
    }
  } catch (error) {
    Swal.fire("Error!", "Something went wrong. Try again!", "error");
    setTimeout(Swal.close, 2000);
  }
};
