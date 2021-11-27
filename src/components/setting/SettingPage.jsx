import SideBar from "../Sidebar";
import AdminHeader from "../common/AdminHeader";
import SettingForm from "./SettingForm";
import ChangePassword from "./ChangePassword";

const SettingPage = () => {
  return (
    <div>
      <div className="d-flex bg-dark-grey ">
        <SideBar />
        <div className="h-100vh-overflow-auto w-100">
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
            <SettingForm />
            <ChangePassword />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SettingPage;
