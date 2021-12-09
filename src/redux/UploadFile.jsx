import Swal from "sweetalert2";
import { uploadImageApi } from "./apis/userProgramsApi";

export const UPLOAD_IAMGE = "UPLOAD_IAMGE";

const uploadImageSuccess = (file) => ({
  type: UPLOAD_IAMGE,
  file,
});

export const uploadImage = (e, setLoader, type) => async (dispatch) => {
  setLoader(true);
  try {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      const fileSize = file.size / 1024 / 1024;

      if (fileSize > 20) {
        Swal.fire("Opps!", "File must be less than 20 MB", "error");
        setTimeout(Swal.close, 2000);
        return;
      }
      // FORM DATA
      const form = new FormData();
      form.append("file", file);
      const response = await uploadImageApi(form, type);
      if (response.success) {
        setLoader(false);
        dispatch(uploadImageSuccess(response.file));
      } else {
        setLoader(false);
        Swal.fire(
          "Failed to upload Image!",
          "Please check your network connection",
          "error"
        );
        setTimeout(Swal.close, 2000);
      }
    }
  } catch (error) {
    setLoader(false);
  }
};
