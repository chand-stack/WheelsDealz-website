import logo from "../assets/carlogoo.png";
import { Link, NavLink } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import Headroom from "react-headroom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import userimg from "../assets/icons8-user.gif";
import PropTypes from "prop-types";

const Nav = ({ themeHandler }) => {
  const { user, logout } = useContext(AuthContext);

  const logoutHandler = () => {
    logout()
      .then(() => {})
      .catch(() => {});
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-orange-500 underline " : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-orange-500 underline " : ""
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addproduct"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-orange-500 underline" : ""
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/cart/${user?.displayName}`}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-orange-500 underline" : ""
          }
        >
          My Cart
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-black">
      <Headroom
        style={{
          WebkitTransition: "all .5s ease-in-out",
          MozTransition: "all .5s ease-in-out",
          OTransition: "all .5s ease-in-out",
          transition: "all .5s ease-in-out",
        }}
      >
        <div className="navbar  bg-black bg-opacity-40">
          <div className="navbar-start">
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn btn-ghost text-white lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm text-black dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {links}
              </ul>
            </div>
            <img className="h-24" src={logo} alt="" />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className=" text-white gap-5 menu-horizontal px-1 font-semibold">
              {links}
            </ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <details className="dropdown">
                <summary className=" h-fit btn btn-outline text-white">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold">{user?.displayName}</p>
                    <img
                      className="h-16 w-16 rounded-full"
                      src={user?.photoURL || userimg}
                      alt="User"
                    />
                  </div>
                </summary>
                <ul className=" shadow menu dropdown-content bg-base-100 rounded-box">
                  <li>
                    <button
                      onClick={logoutHandler}
                      className="btn btn-outline text-black border-orange-50"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </details>
            ) : (
              <Link to="/login">
                <button className="btn btn-outline text-white border-orange-500 flex items-center gap-2">
                  <BsPersonCircle className="text-orange-500 text-lg" />
                  Login
                </button>
              </Link>
            )}
            <input
              onClick={() => themeHandler()}
              type="checkbox"
              className="toggle toggle-sm md:toggle-lg"
            />
          </div>
        </div>
      </Headroom>
    </div>
  );
};

Nav.propTypes = {
  themeHandler: PropTypes.func,
};

export default Nav;
