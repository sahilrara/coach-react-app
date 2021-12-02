import React, { useEffect, useState } from "react";
import {
  InstagramIcon,
  FaceBookIcon,
  LinkdinIcon,
  TiwitterIcon,
} from "../icons/Icons";
import { EmailRegex, PhoneRegex } from "../common/Validation";
import { updateUserDetailsAction } from "../../redux/action/userAction";
import Loader from "../common/loader/Loader";
import { useDispatch, useSelector } from "react-redux";

const insialState = {
  phoneno: "",
  email: "",
  instagramLink: "",
  facebookLink: "",
  linkdinLink: "",
  twitterLink: "",
};

const SettingForm = () => {
  const dispacth = useDispatch();
  const [error, seterror] = useState(false);
  const coachDetails = useSelector((state) => state.List.coachDetails);
  const [updateUserLoading, setUpdateUserLoading] = useState(false);
  const [settingData, setSettingData] = useState(insialState);

  useEffect(() => {
    if (coachDetails) {
      setSettingData(coachDetails);
    }
  }, [coachDetails]);

  const SettingDataHandler = () => {
    console.log("settingData", settingData);
    seterror(true);
    if (
      settingData.phoneno &&
      settingData.email &&
      settingData.instagramLink &&
      settingData.facebookLink &&
      settingData.linkdinLink &&
      settingData.twitterLink !== ""
    ) {
      seterror(false);
      const userId = "me";
      dispacth(
        updateUserDetailsAction(setUpdateUserLoading, userId, settingData)
      );
    }
  };

  return (
    <div className="edit-form px-4 pt-4">
      <div className="row">
        <div className="col-lg-6 col-12 mt-2 number-input">
          <input
            className="w-100 edit-input"
            type="number"
            placeholder="Phone Number:"
            value={settingData.phoneno}
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
            ) : error && PhoneRegex.test(settingData.phoneno) === false ? (
              <p>Phone no is not valid</p>
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
            value={settingData.email}
            disabled
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
            ) : error && EmailRegex.test(settingData.email) === false ? (
              <p>Email is not valid</p>
            ) : (
              ""
            )}
          </span>
        </div>

        <div className="col-lg-6 col-12 mt-2 position-relative">
          <input
            className="w-100 edit-input link-input"
            type="text"
            value={settingData.instagramLink}
            placeholder="Instagram@.com//abcd"
            onChange={(e) =>
              setSettingData({
                ...settingData,
                instagramLink: e.target.value,
              })
            }
          />
          <span className="text-danger">
            {error && settingData.instagramLink === "" ? (
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
        <div className="col-lg-6 col-12 mt-2 position-relative">
          <input
            className="w-100 edit-input link-input"
            type="text"
            placeholder="Facebook@.com//abcd"
            value={settingData.facebookLink}
            onChange={(e) =>
              setSettingData({
                ...settingData,
                facebookLink: e.target.value,
              })
            }
          />
          <span className="text-danger">
            {error && settingData.facebookLink === "" ? (
              <p> Facebook Link is Required</p>
            ) : (
              ""
            )}
          </span>
          <span className="me-2 social-icons">
            <FaceBookIcon />
          </span>
        </div>
        <div className="col-lg-6 col-12 mt-2 position-relative ">
          <input
            className="w-100 edit-input link-input "
            type="text"
            placeholder="Linkdin@.com//abcd"
            value={settingData.linkdinLink}
            onChange={(e) =>
              setSettingData({
                ...settingData,
                linkdinLink: e.target.value,
              })
            }
          />
          <span className="text-danger">
            {error && settingData.linkdinLink === "" ? (
              <p> Linkedin Link is Required</p>
            ) : (
              ""
            )}
          </span>
          <span className="me-2 social-icons ">
            <LinkdinIcon />
          </span>
        </div>
        <div className="col-lg-6 col-12 mt-2 position-relative">
          <input
            className="w-100 edit-input link-input"
            type="text"
            placeholder="Twitter@.com//abcd"
            value={settingData.twitterLink}
            onChange={(e) =>
              setSettingData({
                ...settingData,
                twitterLink: e.target.value,
              })
            }
          />
          <span className="text-danger">
            {error && settingData.twitterLink === "" ? (
              <p> twitter Link is Required</p>
            ) : (
              ""
            )}
          </span>
          <span className="me-2 social-icons">
            <TiwitterIcon />
          </span>
        </div>
      </div>
      <div className="mt-4 pt-2 d-flex  flex-row pb-5 align-items-center align-items-sm-start">
        <button
          onClick={() => SettingDataHandler()}
          type="button"
          className="btn ms-2 rounded-1px fw-700 fs-20 fs-xs-16 h-50px bg-dark black-btn-skew btn-skew border-unset d-flex align-items-center justify-content-center"
        >
          <span className="position-absolute skew-text text-white">
            {updateUserLoading ? <Loader /> : "Save"}
          </span>
        </button>

        <button
          type="button"
          className="btn ms-4 rounded-1px fw-700 fs-20 fs-xs-16 px-4 h-50px bg-gray gray-btn-skew btn-skew border-unset d-flex align-items-center justify-content-center"
        >
          <span className="position-absolute skew-text ">Cancel</span>
        </button>
      </div>
      <div className="pb-5"></div>
    </div>
  );
};
export default SettingForm;
