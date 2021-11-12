import React from "react";
import AvtarIcon from "../../assets/img/Avatar.png";
import { SearchIcon, BlackSunIcon, BlackBellIcon } from "../icons/Icons";
import { useProfileJoyrideProvider } from "../useContext/SidebarProvider";
import SidebarTogle from "../../assets/img/sidbartogleicon.svg";

const AdminHeader = () => {
  const { setShowSidebar } = useProfileJoyrideProvider();
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
          <select
            className="bg-transparent cursor-pointer me-3 en-select-text border-0 "
            name=""
            id=""
          >
            <option selected disabled hidden value="">
              EN
            </option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
          </select>
          <span className="cursor-pointer">
            <BlackSunIcon />
          </span>

          <span className="mx-3 cursor-pointer">
            <BlackBellIcon />
          </span>
          <img className="cursor-pointer" src={AvtarIcon} alt="" />

          <img
            onClick={() => setShowSidebar(true)}
            src={SidebarTogle}
            className=" d-lg-none ms-2"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
