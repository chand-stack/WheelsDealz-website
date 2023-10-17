import logo from '../assets/carlogoo.png'
import { Link, NavLink } from "react-router-dom";
import { BsPersonCircle } from 'react-icons/bs';
import Headroom from 'react-headroom';
const Nav = () => {
    const links = <>
<li><NavLink to="/" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-red-600 underline " : ""}>
Home
</NavLink></li>
<li><NavLink to="/addproduct" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-red-600 underline" : ""}>
Add Product
</NavLink></li>
<li><NavLink to="/cart" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-red-600 underline" : ""}>
My Cart
</NavLink></li>
    </>
    return (
        
        <div className='bg-black'>
            <Headroom style={{
            WebkitTransition: 'all .5s ease-in-out',
            MozTransition: 'all .5s ease-in-out',
            OTransition: 'all .5s ease-in-out',
            transition: 'all .5s ease-in-out'
          }}>
           
            <div className="navbar  bg-black bg-opacity-40">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
            links
        }
      </ul>
    </div>
    <img className='h-24' src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className=" text-white gap-5 menu-horizontal px-1 font-semibold">
      {
        links
      }
    </ul>
  </div>
  <div className="navbar-end">
    <Link><button className="btn btn-outline text-white flex items-center gap-2"><BsPersonCircle className='text-red-600 text-lg'/>Login</button></Link>
  </div>
</div>
</Headroom>
        </div>
      
    );
};

export default Nav;