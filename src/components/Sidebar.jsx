import React, { useState, useEffect } from "react";
import Toggleimg from "../assets/img/Toggleimg.png";
import Coachlogo from "../../src/assets/img/coachlogo.png";
import {
  ContactIcon,
  GalleryIcon,
  Profile,
  Programs,
  Settings,
  Users,
} from "./icons/Icons";
import { useProfileJoyrideProvider } from "./useContext/SidebarProvider";
import { withRouter } from "react-router";
import { useSelector } from "react-redux";

function SideBar({ history }) {
  const userData = useSelector((state) => state.Auth.userData);
  const { setShowSidebar, showSidebar } = useProfileJoyrideProvider();
  const [activeSidebar, setActiveSidebar] = useState("/userlist");
  const [decWidth, setDecWidth] = useState(false);

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
    } else if (path.includes("contact")) {
      setActiveSidebar("contact");
    } else if (path.includes("gallery")) {
      setActiveSidebar("gallery");
    }
  }, [path]);

  const openRoutes = (value) => {
    setShowSidebar(false);
    setActiveSidebar(value);
    if (value === "userlist") {
      history.push("/admin/dashboard/userlist");
    } else if (value === "profile") {
      history.push("/admin/dashboard/profile");
    } else if (value === "setting") {
      history.push("/admin/dashboard/setting");
    } else if (value === "program") {
      history.push("/admin/dashboard/program");
    } else if (value === "contact") {
      history.push("/admin/dashboard/contact");
    } else if (value === "gallery") {
      history.push("/admin/dashboard/gallery");
    }
  };

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
          <img className="coach-logo my-2" src={Coachlogo} alt="" />
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
            }  "align-items-center  justify-content-between  d-flex mt-sm-5 mt-3 pt-sm-5 "  cursor-pointer`}
            // onClick={() => setShowSidebar(false)}
            onClick={() => openRoutes("userlist")}
          >
            <p
              className={`${
                activeSidebar === "userlist" ? "sidebar-text" : "side-item-text"
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
            {activeSidebar === "userlist" ? (
              <span className="d-inline-block active-line"></span>
            ) : (
              ""
            )}
          </div>
          <div
            className={`${
              decWidth ? " d-flex justify-content-center " : ""
            }  "align-items-center justify-content-between  d-flex mt-4 "  cursor-pointer `}
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
            {activeSidebar === "program" ? (
              <span className="d-inline-block active-line"></span>
            ) : (
              ""
            )}
          </div>
          <div
            className={`${
              decWidth ? " d-flex justify-content-center " : ""
            }  "align-items-center justify-content-between  d-flex mt-4 "  cursor-pointer `}
            onClick={() => openRoutes("contact")}
          >
            <p
              className={`${
                activeSidebar === "contact" ? "sidebar-text" : "side-item-text"
              }  px-3 mb-0`}
            >
              {" "}
              <span>
                <ContactIcon />
              </span>
              <span
                className={`${decWidth ? "d-none" : ""}${
                  activeSidebar ? "" : "side-item-text"
                }  mx-2`}
              >
                Contact
              </span>
            </p>
            {activeSidebar === "contact" ? (
              <span className="d-inline-block active-line"></span>
            ) : (
              ""
            )}
          </div>
          <div
            className={`${
              decWidth ? " d-flex justify-content-center " : ""
            }  "align-items-center justify-content-between  d-flex my-4 "  cursor-pointer `}
            onClick={() => openRoutes("gallery")}
          >
            <p
              className={`${
                activeSidebar === "gallery" ? "sidebar-text" : "side-item-text"
              }  px-3 mb-0`}
            >
              {" "}
              <span>
                <GalleryIcon />
              </span>
              <span
                className={`${decWidth ? "d-none" : ""}${
                  activeSidebar ? "" : "side-item-text"
                }  mx-2`}
              >
                Gallery
              </span>
            </p>
            {activeSidebar === "gallery" ? (
              <span className="d-inline-block active-line"></span>
            ) : (
              ""
            )}
          </div>
          {/* <div
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
          </div> */}
          <div
            className={`${
              decWidth ? " d-flex justify-content-center " : ""
            }  "align-items-center justify-content-between  mb-4 d-flex  " cursor-pointer`}
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
            {activeSidebar === "profile" ? (
              <span className="d-inline-block active-line"></span>
            ) : (
              ""
            )}
          </div>

          <div
            className={`${
              decWidth ? " d-flex justify-content-center " : ""
            }  "align-items-center d-flex justify-content-between "  cursor-pointer `}
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
            {activeSidebar === "setting" ? (
              <span className="d-inline-block active-line"></span>
            ) : (
              ""
            )}
          </div>
        </div>
        <div
          className={`${
            decWidth ? "d-flex justify-content-center" : "sidebar-footer px-3"
          } mb-5 py-3 `}
        >
          <div className="d-flex align-items-center">
            <div>
              <span className=" d-inline-block">
                <img
                  className="user-img"
                  src={userData ? userData.imagePath : null}
                />
              </span>
            </div>
            <div className={`${decWidth ? "d-none" : ""} ps-2`}>
              <p className="text-white mb-0 ">
                {userData
                  ? `${userData.firstName} ${userData.lastName}`
                  : "username"}
              </p>
              <p className="mb-0 text-white">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(SideBar);
