import ChangePasswordForm from "./ChangePasswordForm";

const ChangePassword = () => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h2 className="edit-program-text mt-5 mb-0">Change Password</h2>
          <p className="common-text-opacity mb-4">
            you can change your password here. Please enter your current
            password and new password.
          </p>
        </div>
      </div>
      <ChangePasswordForm />
    </>
  );
};
export default ChangePassword;
