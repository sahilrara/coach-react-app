import React, { useState } from "react";
import SideBar from "../Sidebar";
import AdminHeader from "./AdminHeader";
import FaceImg from "../../assets/img/Faces.png";
import { EmailRegex } from "../common/Validation";

const ProfilePage = () => {
  const [error, setError] = useState(false);
  const [profileData, setProfileData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
  });
  const [uploadImg, setUploadImg] = useState("");
  const UploadImg = (e) => {
    let img = e.target.files[0];
    let image = URL.createObjectURL(img);
    setUploadImg(image);
  };
  const SaveData = () => {
    setError(true);
    if (
      profileData.firstname &&
      profileData.lastname &&
      profileData.username &&
      profileData.email !== ""
    ) {
      setProfileData(profileData);
    }
  };
  return (
    <div className="d-flex bg-dark-grey ">
      <SideBar />
      <div className="h-100vh-overflow-auto w-100 ">
        <div className="container mb-5 container-xl ">
          {/* HEADER PART STARTS FROM HERE */}
          <AdminHeader />
          <div className="row">
            <div className="col-12">
              <h2 className="edit-program-text mt-5 mb-0">Profile</h2>
              <p className="common-text-opacity mb-4">
                Detail about your personal information
              </p>
            </div>
          </div>
          {/* ENDS HERE... */}
          <div className="edit-form px-4 pt-4">
            <div className="d-flex top-div my-4 align-items-center flex-column flex-md-row">
              <div className="me-3">
                <span className="upload-background-img d-block">
                  {uploadImg ? (
                    <img
                      className="upload-background-img"
                      src={uploadImg}
                      alt=""
                    />
                  ) : (
                    <img
                      className="upload-background-img"
                      src={FaceImg}
                      alt=""
                    />
                  )}
                </span>
              </div>
              <div className="mx-3 mt-3 mt-lg-0 text-center text-md-start">
                <p className="mb-0 fs-24 fw-600">Upload a New Photo</p>
                <p className="mb-0 common-text-opacity ">Admin</p>
              </div>
              <input
                type="file"
                id="file-input"
                onChange={(e) => UploadImg(e)}
                hidden
              />
              <div className="mt-3 mt-lg-0">
                <button
                  type="button"
                  className="
                btn
                ms-lg-4
                rounded-1px
                fw-700
                fs-20 fs-xs-16
                px-4
                h-50px
                w-200 w-101
                bg-dark
                black-btn-skew
                btn-skew
                border-unset
                d-flex
                align-items-center
                justify-content-center
              "
                >
                  <label
                    for="file-input"
                    className="position-absolute skew-text text-white cursor-pointer"
                  >
                    Upload
                  </label>
                </button>
              </div>{" "}
            </div>
            <div className="mw-550">
              <div className="row">
                <h5 className="fs-16 fw-normal mb-3 mt-5">
                  Change user information here
                </h5>
                <div className="col-12 mt-2">
                  <input
                    className="w-100 edit-input"
                    type="text"
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        firstname: e.target.value,
                      })
                    }
                    placeholder="First Name"
                  />
                  <span className="text-danger">
                    {error && profileData.firstname === "" ? (
                      <p>FirstName is Required</p>
                    ) : (
                      ""
                    )}
                  </span>
                </div>
                <div className="col-12 mt-2">
                  <input
                    className="w-100 edit-input"
                    type="text"
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        lastname: e.target.value,
                      })
                    }
                    placeholder="Last Name"
                  />
                  <span className="text-danger">
                    {error && profileData.lastname === "" ? (
                      <p>LastName is Required</p>
                    ) : (
                      ""
                    )}
                  </span>
                </div>
                <div className="col-12 mt-2">
                  <input
                    className="w-100 edit-input"
                    type="text"
                    placeholder="Username"
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        username: e.target.value,
                      })
                    }
                  />
                  <span className="text-danger">
                    {error && profileData.username === "" ? (
                      <p>UserName is Required</p>
                    ) : (
                      ""
                    )}
                  </span>
                </div>
                <div className="col-12 mt-2">
                  <input
                    className="w-100 edit-input"
                    type="email"
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        email: e.target.value,
                      })
                    }
                    placeholder="Email Address"
                  />
                  <span className="text-danger text-start">
                    {error && profileData.email === "" ? (
                      <p>Email is Required</p>
                    ) : error &&
                      EmailRegex.test(profileData.email) === false ? (
                      <p>Email is not valid</p>
                    ) : (
                      ""
                    )}
                  </span>
                </div>
              </div>
            </div>

            <div
              className="
            mt-4
            pt-2
            d-flex
             flex-row
            pb-5
            align-items-center align-items-sm-start
          "
            >
              <button
                onClick={() => SaveData()}
                type="button"
                className="
              btn
              ms-2
              rounded-1px
              fw-700
              fs-20 fs-xs-16
              px-4
              h-50px
            
              bg-dark
              black-btn-skew
              btn-skew
              border-unset
              d-flex
              align-items-center
              justify-content-center
            "
              >
                <span className="position-absolute skew-text text-white">
                  Save
                </span>
              </button>

              <button
                type="button"
                className="
              
                btn
                ms-4
                rounded-1px
                fw-700
                fs-20 fs-xs-16
                
                px-4
                h-50px
               
                bg-gray
                gray-btn-skew
                btn-skew
                border-unset
                d-flex
                align-items-center
                justify-content-center
              "
              >
                <span className="position-absolute skew-text">Cancel</span>
              </button>
            </div>
            <div className="pb-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
