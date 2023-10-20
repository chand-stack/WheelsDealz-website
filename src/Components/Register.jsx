import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateUserProfile, loginGoogle } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const googleHandler = () => {
    loginGoogle()
      .then(() => {
        Swal.fire("Success", "You have successfully registered!", "success");
        navigate("/");
      })
      .catch();
  };

  const registerHandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password);

    if (password.length < 6) {
      Swal.fire(
        "Error",
        "Password must be at least 6 characters long!!",
        "error"
      );
      return;
    }
    if (!/[A-Z]/.test(password)) {
      Swal.fire(
        "Error",
        "Password must contain at least one uppercase letter!!",
        "error"
      );
      return;
    }
    if (!/(\W)/.test(password)) {
      Swal.fire(
        "Error",
        "Password must contain at least one special character!!",
        "error"
      );
      return;
    }

    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photo)
          .then(() => {
            Swal.fire(
              "Success",
              "You have successfully registered!",
              "success"
            );
            navigate("/");
            window.location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
        e.target.reset();
      })
      .catch(() => {});
  };

  return (
    <div className=" container mx-auto px-2">
      <div className="border border-orange-500 my-10 shadow-2xl lg:mx-56 pb-10">
        <form
          onSubmit={registerHandler}
          className="card-body max-w-2xl mx-auto "
        >
          <h1 className="text-center text-3xl font-bold">
            Register <span className="text-orange-500">Now!!</span>
          </h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-orange-400 font-semibold">
                Your Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Your name"
              name="name"
              className="input input-bordered border border-orange-500"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-orange-400 font-semibold">
                Photo URL
              </span>
            </label>
            <input
              type="url"
              placeholder="Your photo url"
              name="photo"
              className="input input-bordered border border-orange-500"
              required
            />
          </div>
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
            Already have an account? please{" "}
            <Link className="text-orange-500" to="/login">
              Login
            </Link>
          </p>
          <p className="text-center font-semibold">---Or---</p>
        </form>
        <div className="flex justify-center">
          <button onClick={googleHandler} className="btn btn-outline">
            Continue with <FcGoogle className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
