import React, { useState } from "react";

import Toggleimg from "../assets/img/Toggleimg.png";
import Coachlogo from "../../src/assets/img/coachlogo.png";
import { PlanList, Profile, Programs, Settings, Users } from "./icons/Icons";
import { useProfileJoyrideProvider } from "./useContext/SidebarProvider";
function SideBar() {
  const { setShowSidebar, showSidebar } = useProfileJoyrideProvider();
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const [decWidth, setDecWidth] = useState(false);
  const clickHandler = () => {
    setActive(true);
  };
  const closeOverlay = () => {
    setActive(false);
  };
  // const decWidth=()=>{

  // }
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div
        className={`${showSidebar ? "cn-overlay" : ""}  `}
        onClick={() => setShowSidebar(false)}
      ></div>

      <div
        className={`${showSidebar ? "right-0" : "right-350"} ${
          decWidth ? "dec-width" : ""
        }   content-manager-sidebar d-flex flex-column  shadow px-4`}
      >
        <div
          className={`${
            decWidth ? "flex-column" : "flex-row"
          } d-flex align-items-center logo_border justify-content-between`}
        >
          <img src={Coachlogo} alt="" />
          <div
            onClick={() => setDecWidth(!decWidth)}
            className={`${decWidth ? "cursor-pointer mt-4" : "cursor-pointer"}`}
          >
            <img src={Toggleimg} alt="MenuIcon" />
          </div>
        </div>
        {decWidth ? "" : <div className="cn-sidebar-border"></div>}
        <div className="mt-3"></div>
        <div className="flex-grow-1 d-flex flex-column">
          <div
            className={`${
              decWidth ? " d-flex justify-content-center " : ""
            }  "align-items-center  d-flex mt-sm-5 mt-3 pt-sm-5 " `}
            onClick={() => setShowSidebar(false)}
          >
            <p className=" px-3 mb-0 text-white">
              <span>
                <Users />
              </span>
              <span
                className={`${decWidth ? "d-none" : ""} side-item-text mx-2`}
              >
                {" "}
                Users
              </span>
            </p>
          </div>
          <div
            className={`${
              decWidth ? " d-flex justify-content-center " : ""
            }  "align-items-center  d-flex my-4 " `}
            onClick={() => setShowSidebar(false)}
          >
            <p className="  px-3 mb-0 text-white">
              <span>
                <PlanList />
              </span>
              <span
                className={`${decWidth ? "d-none" : ""} side-item-text mx-2`}
              >
                {" "}
                Plan List
              </span>
            </p>
          </div>
          <div
            className={`${
              decWidth ? " d-flex justify-content-center " : ""
            }  "align-items-center  d-flex  " `}
            onClick={() => setShowSidebar(false)}
          >
            <p className="  px-3 mb-0 text-white">
              {" "}
              <span>
                <Profile />
              </span>
              <span
                className={`${decWidth ? "d-none" : ""} side-item-text mx-2`}
              >
                {" "}
                Profile
              </span>
            </p>
          </div>
          <div
            className={`${
              decWidth ? " d-flex justify-content-center " : ""
            }  "align-items-center  d-flex my-4 " `}
            onClick={() => setShowSidebar(false)}
          >
            <p className="  px-3 mb-0 text-white">
              {" "}
              <span>
                <Programs />
              </span>
              <span
                className={`${decWidth ? "d-none" : ""} side-item-text mx-2`}
              >
                Programs
              </span>
            </p>
          </div>
          <div
            className={`${
              decWidth ? " d-flex justify-content-center " : ""
            }  "align-items-center  d-flex" `}
            onClick={() => setShowSidebar(false)}
          >
            <p className="  px-3 mb-0 text-white">
              {" "}
              <span>
                <Settings />
              </span>
              <span
                className={`${decWidth ? "d-none" : ""} side-item-text mx-2`}
              >
                Settings
              </span>
            </p>
          </div>
        </div>
        <div
          className={`${
            decWidth ? "d-flex justify-content-center" : "sidebar-footer px-3"
          } mb-5 py-3 `}
        >
          <div className="d-flex align-items-center">
            <div>
              <span className="user-img d-inline-block"></span>
            </div>
            <div className={`${decWidth ? "d-none" : ""} ps-2`}>
              <p className="text-white mb-0 ">Nafisa Sh.</p>
              <p className="mb-0 text-white">Support manager</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
