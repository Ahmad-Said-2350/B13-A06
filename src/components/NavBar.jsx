import React from 'react';
import logoImg from '../assets/products/DigiTools.png'
import cartIcon from '../assets/products/shopping-cart.png'

const NavBar = () => {
    return (
       <div className="navbar   bg-base-100 shadow-sm">
  <div className="navbar container mx-auto">
<div className="navbar-start">
    
    <img className='' src={logoImg} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className=" flex justify-between items-center gap-8">
      <li>Products</li>
      <li>Features</li>
      <li>Pricing</li>
      <li>Testimonials</li>
      <li>FAQ</li>
    </ul>
  </div>
  <div className="navbar-end gap-4">
    <img src={cartIcon} alt="" />
   <li className=' list-none'>Login</li>
    <a className="btn btn-primary rounded-full">Get Started</a>
  </div>

  </div>
</div>
    );
};

export default NavBar;