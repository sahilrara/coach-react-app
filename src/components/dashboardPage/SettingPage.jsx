import React, { useState } from "react";
import SideBar from "../Sidebar";
import AdminHeader from "../common/AdminHeader";
import {
  InstagramIcon,
  FaceBookIcon,
  LinkdinIcon,
  TiwitterIcon,
  ShowEye,
  HideEye,
} from "../icons/Icons";
import { EmailRegex, PasswordRegex, PhoneRegex } from "../common/Validation";

const SettingPage = () => {
  const [error, seterror] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [settingData, setSettingData] = useState({
    phoneno: "",
    password: "",
    newpassword: "",
    email: "",
    insta: "",
    facebook: "",
    linkedin: "",
    twitter: "",
  });
  const SettingDataHandler = () => {
    seterror(true);
    if (
      settingData.phoneno &&
      settingData.password &&
      settingData.newpassword &&
      settingData.email &&
      settingData.insta &&
      settingData.facebook &&
      settingData.linkedin &&
      settingData.twitter !== ""
    ) {
      setSettingData(settingData);
    }
  };
  return (
    <div>
      <div className="d-flex bg-dark-grey ">
        <SideBar />
        <div className="h-100vh-overflow-auto w-100 ">
          <div className="container mb-5 container-xl ">
            {/* HEADER PART STARTS FROM HERE */}
            <AdminHeader />
            <div className="row">
              <div className="col-12">
                <h2 className="edit-program-text mt-5 mb-0">Setting</h2>
                <p className="common-text-opacity mb-4">
                  Detail about your personal information
                </p>
              </div>
            </div>
            {/* ENDS HERE... */}
            <div className="edit-form px-4 pt-4">
              <div className="row">
                <div className="col-lg-6 col-12 mt-2 number-input">
                  <input
                    className="w-100 edit-input"
                    type="number"
                    placeholder="Phone Number:"
                    onChange={(e) =>
                      setSettingData({
                        ...settingData,
                        phoneno: e.target.value,
                      })
                    }
                  />
                  <span className="text-danger">
                    {error && settingData.phoneno === "" ? (
                      <p>Phone No is Required</p>
                    ) : error &&
                      PhoneRegex.test(settingData.phoneno) === false ? (
                      <p>Phone no is not valid</p>
                    ) : (
                      ""
                    )}
                  </span>
                </div>
                <div className="col-lg-6 col-12 mt-2 position-relative">
                  <input
                    className="w-100 edit-input"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password:"
                    onChange={(e) =>
                      setSettingData({
                        ...settingData,
                        password: e.target.value,
                      })
                    }
                  />
                  <span
                    className="eye-icon cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <ShowEye /> : <HideEye />}
                  </span>
                  <span className="text-danger">
                    {error && settingData.password === "" ? (
                      <p>Password No is Required</p>
                    ) : error &&
                      PasswordRegex.test(settingData.password) === false ? (
                      <p>Password not strong</p>
                    ) : (
                      ""
                    )}
                  </span>
                </div>
                <div className="col-lg-6 col-12 mt-2">
                  <input
                    className="w-100 edit-input"
                    type="email"
                    placeholder="Email"
                    onChange={(e) =>
                      setSettingData({
                        ...settingData,
                        email: e.target.value,
                      })
                    }
                  />
                  <span className="text-danger">
                    {error && settingData.email === "" ? (
                      <p>Email is Required</p>
                    ) : error &&
                      EmailRegex.test(settingData.email) === false ? (
                      <p>Email is not valid</p>
                    ) : (
                      ""
                    )}
                  </span>
                </div>
                <div className="col-lg-6 col-12 mt-2 position-relative">
                  <input
                    className="w-100 edit-input"
                    type={newPassword ? "text" : "password"}
                    placeholder="New Password:"
                    onChange={(e) =>
                      setSettingData({
                        ...settingData,
                        newpassword: e.target.value,
                      })
                    }
                  />
                  <span
                    className="eye-icon cursor-pointer"
                    onClick={() => setNewPassword(!newPassword)}
                  >
                    {newPassword ? <ShowEye /> : <HideEye />}
                  </span>
                  <span className="text-danger">
                    {error && settingData.newpassword === "" ? (
                      <p>New Password is Required</p>
                    ) : error &&
                      PasswordRegex.test(settingData.newpassword) === false ? (
                      <p>New Password is not strong</p>
                    ) : (
                      ""
                    )}
                  </span>
                </div>
                <div className="col-lg-6 col-12 mt-2 position-relative">
                  <input
                    className="w-100 edit-input link-input"
                    type="text"
                    placeholder="Instagram@.com//abcd"
                    onChange={(e) =>
                      setSettingData({
                        ...settingData,
                        insta: e.target.value,
                      })
                    }
                  />
                  <span className="text-danger">
                    {error && settingData.insta === "" ? (
                      <p>Instagram Link is Required</p>
                    ) : (
                      ""
                    )}
                  </span>
                  <span className="me-2 social-icons">
                    {" "}
                    <InstagramIcon />{" "}
                  </span>
                </div>
                {/* <div className="col-lg-6 col-12 mt-2">
                  <div className="edit-input d-flex ">
                    {" "}
                    <span className="me-2">
                      {" "}
                      <InstagramIcon />{" "}
                    </span>
                    <p className="mb-0">Instagram@.com//abcd</p>
                  </div>
                </div> */}
                <div className="col-lg-6 col-12 mt-2 position-relative">
                  <input
                    className="w-100 edit-input link-input"
                    type="text"
                    placeholder="Facebook@.com//abcd"
                    onChange={(e) =>
                      setSettingData({
                        ...settingData,
                        facebook: e.target.value,
                      })
                    }
                  />
                  <span className="text-danger">
                    {error && settingData.facebook === "" ? (
                      <p> Facebook Link is Required</p>
                    ) : (
                      ""
                    )}
                  </span>
                  <span className="me-2 social-icons">
                    <FaceBookIcon />
                  </span>
                </div>
                {/* <div className="col-lg-6 col-12 mt-2">
                  <div className="edit-input d-flex ">
                    {" "}
                    <span className="me-2">
                      <FaceBookIcon />
                    </span>
                    <p className="mb-0"> Facebook@.com//abcd</p>
                  </div>
                </div> */}
                <div className="col-lg-6 col-12 mt-2 position-relative ">
                  <input
                    className="w-100 edit-input link-input "
                    type="text"
                    placeholder="Linkdin@.com//abcd"
                    onChange={(e) =>
                      setSettingData({
                        ...settingData,
                        linkedin: e.target.value,
                      })
                    }
                  />
                  <span className="text-danger">
                    {error && settingData.linkedin === "" ? (
                      <p> Linkedin Link is Required</p>
                    ) : (
                      ""
                    )}
                  </span>
                  <span className="me-2 social-icons ">
                    <LinkdinIcon />
                  </span>
                </div>
                {/* <div className="col-lg-6 col-12 mt-2">
                  <div className="edit-input d-flex ">
                    {" "}
                    <span className="me-2">
                      <LinkdinIcon />
                    </span>
                    <p className="mb-0"> Linkdin@.com//abcd</p>
                  </div>
                </div> */}
                <div className="col-lg-6 col-12 mt-2 position-relative">
                  <input
                    className="w-100 edit-input link-input"
                    type="text"
                    placeholder="Twitter@.com//abcd"
                    onChange={(e) =>
                      setSettingData({
                        ...settingData,
                        twitter: e.target.value,
                      })
                    }
                  />
                  <span className="text-danger">
                    {error && settingData.twitter === "" ? (
                      <p> Twitter Link is Required</p>
                    ) : (
                      ""
                    )}
                  </span>
                  <span className="me-2 social-icons">
                    <TiwitterIcon />
                  </span>
                </div>
                {/* <div className="col-lg-6 col-12 mt-2  d-flex">
                  <div className="edit-input d-flex w-100">
                    {" "}
                    <span className="me-2">
                      <TiwitterIcon />{" "}
                    </span>
                    <p className="mb-0">Twitter@.com//abcd</p>
                  </div>
                </div> */}
              </div>
              <div className="mt-4 pt-2 d-flex  flex-row pb-5 align-items-center align-items-sm-start">
                <button
                  onClick={() => SettingDataHandler()}
                  type="button"
                  className="
                        btn
                        ms-2
                        rounded-1px
                        fw-700
                        fs-20 fs-xs-16
                      
                        h-50px
                        
                bg-dark black-btn-skew
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
                       
                bg-gray gray-btn-skew
                        btn-skew
                        border-unset
                        d-flex
                        align-items-center
                        justify-content-center
                      "
                >
                  <span className="position-absolute skew-text ">Cancel</span>
                </button>
              </div>
              <div className="pb-5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
