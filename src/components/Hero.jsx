import React, { Component } from 'react';
import img from '../assets/products/banner.png';
import { CiPlay1 } from "react-icons/ci";

class Hero extends Component {
  render() {
    return (
      <div className="hero bg-base-200 min-h-screen py-10 lg:py-0">
        <div className="hero-content flex-col lg:flex-row-reverse container mx-auto px-4 gap-10 lg:gap-20">
          
          <div className="w-full lg:w-1/2 flex justify-center">
            <img 
              src={img} 
              alt="Banner" 
              className="w-full lg:w-[70%] flex justify-center lg:justify-end" 
            />
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#EBEBFF] border border-[#D1D1FF]">
                <div className="w-3 h-3 rounded-full bg-linear-to-r from-[#9514FA] to-[#4F39F6] shadow-[0_0_8px_rgba(149,20,250,0.6)]"></div>
                <h5 className='text-sm md:text-base font-bold bg-linear-to-r from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent'>
                  New: AI-Powered Tools Available
                </h5>
              </div>
            </div>



            

            <h1 className="text-4xl md:text-6xl lg:text-[72px] font-extrabold text-[#101727] leading-[1.1]">
              Supercharge Your <br className="hidden md:block" /> Digital Workflow
            </h1>

            <p className="py-6 text-base md:text-lg leading-relaxed text-[#627382] max-w-xl mx-auto lg:mx-0">
              Access premium AI tools, design assets, templates, and productivity 
              software—all in one place. Start creating faster today.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 mt-2">
              <button className="btn btn-md md:btn-lg w-full sm:w-auto text-white rounded-full bg-linear-to-r from-[#9514FA] to-[#4F39F6] border-none px-8">
                Explore Products
              </button>
              <button className="btn btn-md md:btn-lg w-full sm:w-auto btn-outline btn-primary rounded-full px-8">
                <CiPlay1 className="text-xl" /> Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;