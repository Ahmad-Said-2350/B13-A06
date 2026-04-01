import React from 'react';
import logoImg from '../assets/products/DigiTools.png'
import { FiShoppingCart } from "react-icons/fi";

const NavBar = ({cartItems}) => {
  const links = (
    <>
      <li className="hover:text-primary cursor-pointer transition-colors duration-200">Products</li>
      <li className="hover:text-primary cursor-pointer transition-colors duration-200">Features</li>
      <li className="hover:text-primary cursor-pointer transition-colors duration-200">Pricing</li>
      <li className="hover:text-primary cursor-pointer transition-colors duration-200">Testimonials</li>
      <li className="hover:text-primary cursor-pointer transition-colors duration-200">FAQ</li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
        
        <div className="flex items-center gap-2 lg:flex-1">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost lg:hidden p-0 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-4 shadow bg-base-100 rounded-box w-52 font-medium gap-3">
              {links}
              <li className='sm:hidden'>Login</li>
            </ul>
          </div>
          <img className='h-8 md:h-10 w-auto' src={logoImg} alt="Logo" />
        </div>

        <div className="hidden lg:flex lg:flex-none">
          <ul className="flex items-center gap-8 font-semibold text-gray-600 list-none">
            {links}
          </ul>
        </div>

        <div className="flex items-center justify-end gap-3 md:gap-6 lg:flex-1">
          
          <button className="flex items-center font-semibold cursor-pointer gap-1">
          <span className="relative">
            {" "}
            <span className="absolute left-6 -top-3 bg-red-500 w-5 h-5 flex items-center justify-center rounded-full text-white text-sm">
              {
                cartItems.length
              }
            </span>
            <FiShoppingCart className="text-3xl" />
          </span>{" "}
        </button>
          <div className='hidden xl:block'>
             <button className='text-gray-700 hover:text-primary font-semibold transition-colors'>Login</button>
          </div>

          <a className="btn bg-linear-to-r from-[#9514FA] to-[#4F39F6] text-[#FFFFFF] btn-sm md:btn-md rounded-full px-5 md:px-8 font-bold border-none">
            Get Started
          </a>
        </div>

      </div>
    </div>
  );
};

export default NavBar;