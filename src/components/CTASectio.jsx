import React from 'react';

const CTASection = () => {
  return (
    <div className="div">

<div className="">
      <div className="relative overflow-hidden  bg-linear-to-r from-[#9514FA] to-[#4F39F6] py-16 px-6 md:py-24 text-center text-white shadow-2xl">
        
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/3 translate-y-1/3"></div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
Ready to Transform Your Workflow?          </h2>

          <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
            Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="btn btn-lg bg-white text-[#7C3AED] hover:bg-gray-100 border-none rounded-full px-10 normal-case text-lg font-bold shadow-lg w-full sm:w-auto">
Explore Products            </button>
            
            <button className="btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-[#7C3AED] rounded-full px-10 normal-case text-lg font-bold w-full sm:w-auto">
             View Pricing
            </button>
          </div>

          <p className="text-sm md:text-base text-purple-200 pt-4">
14-day free trial • No credit card required • Cancel anytime          </p>
        </div>
      </div>
    </div>


    </div>
  );
};

export default CTASection;