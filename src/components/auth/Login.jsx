import LoginForm from "./LoginForm";

const Login = () => {
  const path = window.location.pathname;
  return (
    <div className="d-flex bg-dark">
      <div className="h-100vh-overflow-auto w-100 ">
        <div className="container h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-lg-6 col-sm-10 col">
              <div className={`${path === "/" ? "" : "title"} bg-151515 `}>
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
