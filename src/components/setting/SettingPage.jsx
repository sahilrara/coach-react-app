import SettingForm from "./SettingForm";
import ChangePassword from "./ChangePassword";
import { useEffect, useState } from "react";
import { GetCoachDetailsAction } from "../../redux/action/Contact";
import { useDispatch } from "react-redux";

const SettingPage = () => {
  const dispatch = useDispatch();
  const [loadingCoach, setLoadingCoach] = useState(false);

  useEffect(() => {
    dispatch(GetCoachDetailsAction(setLoadingCoach));
  }, [setLoadingCoach, dispatch]);

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h2 className="edit-program-text mt-5 mb-0">Setting</h2>
          <p className="common-text-opacity mb-4">
            Detail about your personal information
          </p>
        </div>
      </div>
      {/* ENDS HERE... */}
      <SettingForm loadingCoach={loadingCoach} />
      <ChangePassword />
    </div>
  );
};
export default SettingPage;
