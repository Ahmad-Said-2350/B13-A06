import React, { Component } from 'react';
import img from '../assets/products/banner.png'
import { CiPlay1 } from "react-icons/ci";


class Hero extends Component {
    render() {
        return (
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content gap-15 flex-col lg:flex-row-reverse">

  <div className="img">
    <img src={img} alt="" />
    </div>  

    <div className=''>

        <div className="frist   flex justify-start items-center gap-2 ">

<div className="badge badge-primary badge-xs"></div>
<h5 className='bg-linear-to-t from-[#4F39F6]  to-[#9514FA] bg-clip-text text-transparent'>New: AI-Powered Tools Available</h5>

        </div>
        
      <h1 className="text-[72px] font-extrabold text-[#101727]">Supercharge Your <br /> Digital Workflow </h1>
      <p className=" py-6 text-[18px] leading-5 text-[#627382]">
        Access premium AI tools, design assets, templates, and productivity <br />
        software—all in one place. Start creating faster today. <br />
        Explore Products
      </p>
      
      <div className=" flex justify-start items-center gap-4">
        <button className="btn btn-primary rounded-full">Explore Products</button>
      <button className="btn btn-primary btn-outline rounded-full"> <CiPlay1 />
Watch Demo</button>
      
      </div>
    </div>

   
  </div>
</div>
        );
    }
}

export default Hero;