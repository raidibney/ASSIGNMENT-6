import React from 'react';
import cartImage from '../assets/products/shopping-cart.png';

const Navbar = ({ cartCount }) => {
    return (
       <div className="navbar sticky top-0 z-[100] shadow-sm bg-white w-full px-4 md:px-8 lg:w-11/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-primary lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Products</a></li>
        <li><a>Features</a></li>
        <li><a>Pricing</a></li>
        <li><a>Testimonials</a></li>
        <li><a>FAQ</a></li>
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
    {/* 2. Cart Icon with Badge Container */}
                <div className="relative mr-7">
                    <img src={cartImage} alt="Shopping Cart" className='w-6 h-6' />
                    
                    
                    {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white">
                            {cartCount}
                        </span>
                    )}
                </div>
    <a className='hidden md:block mr-7 text-black cursor-pointer'>Login</a>
    <a className="btn btn-primary text-white rounded-3xl ">Get Started</a>
  </div>
</div>
    );
};

export default Navbar;