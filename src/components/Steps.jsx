import React from 'react';
import User from '../assets/products/Group1.png'
import Rokat from '../assets/products/Group3.png'
import Package from '../assets/products/Group2.png'
import pic4 from '../assets/products/4.png'
import pic5 from '../assets/products/5.png'
import pic6 from '../assets/products/6.png'

const Steps = () => {
    return (
        <div className='container mx-auto px-4 py-20'>
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-[#001931] text-3xl md:text-5xl font-extrabold leading-tight">
                    Get Started in 3 Steps
                </h2>
                <p className="text-[#627382] text-sm md:text-base max-w-md mx-auto">
                    Start using premium digital tools in minutes, not hours.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                
                <div className="card bg-base-100 w-full max-w-sm shadow-xl hover:shadow-2xl transition-shadow relative overflow-hidden">
                    <img className='w-10 h-10 absolute top-5 right-5' src={pic4} alt="step-1" />
                    <figure className="px-10 pt-16">
                        <img src={User} alt="Create Account" className="rounded-xl h-32 object-contain" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl font-bold text-[#101727]">Create Account</h2>
                        <p className='text-[#627382] text-sm'>
                            Sign up for free in seconds. No credit card required to get started.
                        </p>
                    </div>
                </div>

                <div className="card bg-base-100 w-full max-w-sm shadow-xl hover:shadow-2xl transition-shadow relative overflow-hidden">
                    <img className='w-10 h-10 absolute top-5 right-5' src={pic5} alt="step-2" />
                    <figure className="px-10 pt-16">
                        <img src={Package} alt="Choose Products" className="rounded-xl h-32 object-contain" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl font-bold text-[#101727]">Choose Products</h2>
                        <p className='text-[#627382] text-sm'>
                            Browse our catalog and select the tools that fit your needs.
                        </p>
                    </div>
                </div>

                <div className="card bg-base-100 w-full max-w-sm shadow-xl hover:shadow-2xl transition-shadow relative overflow-hidden">
                    <img className='w-10 h-10 absolute top-5 right-5' src={pic6} alt="step-3" />
                    <figure className="px-10 pt-16">
                        <img src={Rokat} alt="Start Creating" className="rounded-xl h-32 object-contain" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl font-bold text-[#101727]">Start Creating</h2>
                        <p className='text-[#627382] text-sm'>
                            Download and start using your premium tools immediately.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Steps;