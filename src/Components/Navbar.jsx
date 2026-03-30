import React from 'react';
import cartImage from '../assets/products/shopping-cart.png';

const Navbar = () => {
    return (
       <div className="navbar  shadow-sm w-11/12 mx-auto bg-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl text-blue-600 font-bold">DigiTools</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className='text-black'><a>Products</a></li>
      <li className='text-black'><a>Features</a></li>
       <li className='text-black'><a>Pricing </a></li>
      <li className='text-black'><a>Testimonials</a></li>
       <li className='text-black'><a>FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <img src={cartImage} alt="Shopping Cart" className='mr-7'/>
    <a className='mr-7 text-black'>Login</a>
    <a className="btn btn-primary text-white rounded-3xl ">Get Started</a>
  </div>
</div>
    );
};

export default Navbar;