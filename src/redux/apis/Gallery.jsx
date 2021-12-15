import { axiosRequest } from "../helper";

/**
 * get all Gallery list Api
 * @param {Number} page
 * @returns
 */
export const GetAllGalleryListApi = async (page) => {
  return await axiosRequest("GET", `/list/gallery?page=${page}&limit=10`);
};

/**
 * Create Gallery list Api
 * @param {Object} data
 * @returns
 */
export const CreateGalleryListApi = async (data) => {
  return await axiosRequest("POST", `/admin/create/gallery`, data);
};

/**
 * Delete Gallery list Api
 * @param {Number} galleryId
 * @returns
 */
export const DeleteGalleryListApi = async (galleryId) => {
  return await axiosRequest("DELETE", `/admin/delete/gallery/${galleryId}`);
};
