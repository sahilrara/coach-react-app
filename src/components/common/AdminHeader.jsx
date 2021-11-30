import React from "react";
import AvtarIcon from "../../assets/img/Avatar.png";
import { SearchIcon } from "../icons/Icons";
import { useProfileJoyrideProvider } from "../useContext/SidebarProvider";
import SidebarTogle from "../../assets/img/sidbartogleicon.svg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { removeLocalStorageTokenAction } from "../../redux/action/AuthAction";

const AdminHeader = ({ history }) => {
  const userData = useSelector((state) => state.Auth.userData);
  const dispatch = useDispatch();
  const { setShowSidebar } = useProfileJoyrideProvider();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    dispatch(removeLocalStorageTokenAction(history));
  };

  return (
    <div>
      <div className="row mt-3 align-items-center justify-content-between">
        <div className="col-xxl-3 order-2 order-sm-1 col-lg-4 col-sm-5 col-12  position-relative mt-3 mt-sm-0">
          <input
            className="w-100 search-input"
            type="text"
            placeholder="Enter keywords ..."
          />
          <span className="search-icon">
            <SearchIcon />
          </span>
        </div>
        <div className=" col-sm-6 order-1  order-sm-2 text-sm-end text-center col-12">
          <select className="bg-transparent cursor-pointer me-3 en-select-text border-0 ">
            {/* <option selected disabled hidden>
              EN
            </option> */}
            <option className="px-3 py-2">EN</option>
            <option className="px-3 py-2">FR</option>
          </select>
          {/* <span className="cursor-pointer">
            <BlackSunIcon />
          </span> */}

          {/* <span className="mx-3 cursor-pointer">
            <BlackBellIcon />
          </span> */}
          <img
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            src={userData ? userData.imagePath : AvtarIcon}
            className="cursor-pointer"
            alt="AvtarIcon"
          />

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose} className="fw-bold">
              Logout
            </MenuItem>
          </Menu>

          <img
            onClick={() => setShowSidebar(true)}
            src={SidebarTogle}
            alt=""
            className=" d-lg-none ms-2"
          />
        </div>
      </div>
    </div>
  );
};

export default withRouter(AdminHeader);
