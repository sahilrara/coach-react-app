import React, { useState, useEffect } from "react";
import Toggleimg from "../assets/img/Toggleimg.png";
import Coachlogo from "../../src/assets/img/coachlogo.png";
import { PlanList, Profile, Programs, Settings, Users } from "./icons/Icons";
import { useProfileJoyrideProvider } from "./useContext/SidebarProvider";
import { withRouter } from "react-router";
function SideBar({ history }) {
  const { setShowSidebar, showSidebar } = useProfileJoyrideProvider();
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);
  const [activeSidebar, setActiveSidebar] = useState("userlist");
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [decWidth, setDecWidth] = useState(false);
  const clickHandler = () => {
    setActive(true);
  };
  const closeOverlay = () => {
    setActive(false);
  };

  const path = window.location.pathname;
  useEffect(() => {
    if (path.includes("planlist")) {
      setActiveSidebar("planlist");
    } else if (path.includes("userlist")) {
      setActiveSidebar("userlist");
    } else if (path.includes("profile")) {
      setActiveSidebar("profile");
    } else if (path.includes("setting")) {
      setActiveSidebar("setting");
    } else if (path.includes("program")) {
      setActiveSidebar("program");
    }
  }, [path]);

  const openRoutes = (value) => {
    setShowSidebar(false);
    setActiveSidebar(value);
    if (value === "user") {
      history.push("/admin/dashboard/userlist");
    } else if (value === "planlist") {
      history.push("/admin/dashboard/planlist");
    } else if (value === "profile") {
      history.push("/admin/dashboard/profile");
    } else if (value === "setting") {
      history.push("/admin/dashboard/setting");
    } else if (value === "program") {
      history.push("/admin/dashboard/program");
    }
  };

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
            }  "align-items-center  d-flex mt-sm-5 mt-3 pt-sm-5 "  cursor-pointer`}
            // onClick={() => setShowSidebar(false)}
            onClick={() => openRoutes("user")}
          >
            <p
              className={`${
                activeSidebar === "user" ? "sidebar-text" : "side-item-text"
              }  px-3 mb-0  `}
            >
              <span>
                <Users />
              </span>
              <span
                className={`${decWidth ? "d-none" : ""}${
                  activeSidebar ? "" : "side-item-text"
                }  mx-2`}
              >
                {" "}
                Users
              </span>
            </p>
          </div>
          <div
            className={`${
              decWidth ? " d-flex justify-content-center " : ""
            }  "align-items-center  d-flex my-4 "  cursor-pointer`}
            // onClick={() => setShowSidebar(false)}
            onClick={() => openRoutes("planlist")}
          >
            <p
              className={`${
                activeSidebar === "planlist" ? "sidebar-text" : "side-item-text"
              }  px-3 mb-0  `}
            >
              <span>
                <PlanList />
              </span>
              <span
                className={`${decWidth ? "d-none" : ""}${
                  activeSidebar ? "" : "side-item-text"
                }  mx-2`}
              >
                {" "}
                Plan List
              </span>
            </p>
          </div>
          <div
            className={`${
              decWidth ? " d-flex justify-content-center " : ""
            }  "align-items-center  d-flex  " cursor-pointer`}
            // onClick={() => setShowSidebar(false)}
            onClick={() => openRoutes("profile")}
          >
            <p
              className={`${
                activeSidebar === "profile" ? "sidebar-text" : "side-item-text"
              }  px-3 mb-0`}
            >
              {" "}
              <span>
                <Profile />
              </span>
              <span
                className={`${decWidth ? "d-none" : ""}${
                  activeSidebar ? "" : "side-item-text"
                }  mx-2`}
              >
                {" "}
                Profile
              </span>
            </p>
          </div>
          <div
            className={`${
              decWidth ? " d-flex justify-content-center " : ""
            }  "align-items-center  d-flex my-4 "  cursor-pointer `}
            // onClick={() => setShowSidebar(false)}
            onClick={() => openRoutes("program")}
          >
            <p
              className={`${
                activeSidebar === "program" ? "sidebar-text" : "side-item-text"
              }  px-3 mb-0`}
            >
              {" "}
              <span>
                <Programs />
              </span>
              <span
                className={`${decWidth ? "d-none" : ""}${
                  activeSidebar ? "" : "side-item-text"
                }  mx-2`}
              >
                Programs
              </span>
            </p>
          </div>
          <div
            className={`${
              decWidth ? " d-flex justify-content-center " : ""
            }  "align-items-center  d-flex"  cursor-pointer `}
            // onClick={() => setShowSidebar(false)}
            onClick={() => openRoutes("setting")}
          >
            <p
              className={`${
                activeSidebar === "setting" ? "sidebar-text" : "side-item-text"
              }  px-3 mb-0`}
            >
              {" "}
              <span>
                <Settings />
              </span>
              <span
                className={`${decWidth ? "d-none" : ""}${
                  activeSidebar ? "" : "side-item-text"
                }  mx-2`}
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

export default withRouter(SideBar);
