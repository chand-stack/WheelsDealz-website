import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser, loginGoogle } = useContext(AuthContext);

  const location = useLocation();
  console.log(location.state);

  const navigate = useNavigate();

  const googleLoginHandler = () => {
    loginGoogle()
      .then(() => {
        Swal.fire("Logged in", "You are successfully logged in!", "success");
        navigate(location.state || "/");
      })
      .catch(() => {});
  };

  const loginHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then(() => {
        Swal.fire("Logged in", "You are successfully logged in!", "success");
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Error", "invalid-login-credentials!!", "error");
      });
  };

  return (
    <>
      <div className=" container mx-auto px-2">
        <div className="border border-orange-500 my-10 shadow-2xl lg:mx-56 pb-10">
          <form onSubmit={loginHandler} className="card-body max-w-2xl mx-auto">
            <h1 className="text-center text-3xl font-bold">
              Login <span className="text-orange-500">Now!!</span>
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-orange-400 font-semibold">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered border border-orange-500"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-orange-400 font-semibold">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered border border-orange-500"
                required
              />
              <label className="label"></label>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary bg-orange-500 text-white border-none"
              >
                Login
              </button>
            </div>
            <p className="font-semibold text-center">
              Do Not have an account? please{" "}
              <Link className="text-orange-500" to="/register">
                Register
              </Link>
            </p>
            <p className="text-center font-semibold">---Or---</p>
          </form>
          <div className="flex justify-center">
            <button onClick={googleLoginHandler} className="btn btn-outline">
              Continue with <FcGoogle className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
