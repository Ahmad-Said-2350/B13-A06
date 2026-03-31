import React from 'react';
import User from '../assets/products/Group1.png'
import Rokat from '../assets/products/Group3.png'
import Package from '../assets/products/Group2.png'
import pic4 from '../assets/products/4.png'
import pic5 from '../assets/products/5.png'
import pic6 from '../assets/products/6.png'


const Steps = () => {
    return (
   
<div  className=' container mx-auto'>

    
    

    <div className="con mt-30 space-y-8 mb-10">

<h2 className=" text-center text-[#001931] text-5xl font-extrabold">Get Started in 3 Steps</h2>
            <p className=" text-center text-[#627382] text-base leading-5">Start using premium digital tools in minutes, not hours.</p>
            
           
    </div>


   <div className="card  flex flex-row gap-4">

<div className="card bg-base-100 w-96 shadow-sm">
    <img className='w-10 h-10 ml-80 mt-5' src={pic4} alt="" />
  <figure className="px-10 pt-10">
    <img src={User}alt="" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-[24px] font-bold text-[#101727]">Create Account</h2>
    <p className='text-[#627382] '>Sign up for free in seconds. No credit card <br /> required to get started.</p>
    
  </div>
</div>


<div className="card bg-base-100 w-96 shadow-sm">
    <img className='w-10 h-10 ml-80 mt-5' src={pic5} alt="" />
  <figure className="px-10 pt-10">
    <img className='bg-[]' src={Package} alt="" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-[24px] font-bold text-[#101727]">Choose Products</h2>
    <p  className='text-[#627382] '>Browse our catalog and select the tools <br /> that fit your needs.</p>
    
  </div>
</div>


<div className="card bg-base-100 w-96 shadow-sm">
    <img className='w-10 h-10 ml-80 mt-5' src={pic6} alt="" />
  <figure className="px-10 pt-10">
    <img src={Rokat} alt="" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-[24px] font-bold text-[#101727]">Start Creating</h2>
    <p  className='text-[#627382] '>Download and start using your premium <br /> toolsimmediately.</p>
    
  </div>
</div>
</div>



</div>

    );
};

export default Steps;