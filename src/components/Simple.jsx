import React from 'react';

const Simple = () => {
    return (
        <div className="container mx-auto px-4 py-20">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-[#001931] text-3xl md:text-5xl font-extrabold">Simple, Transparent Pricing</h2>
                <p className="text-[#627382] text-sm md:text-base max-w-md mx-auto">
                    Choose the plan that fits your needs. Upgrade or downgrade anytime.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                
                {/* Starter Plan */}
                <div className="card bg-base-100 shadow-xl border border-gray-100 flex flex-col h-full">
                    <div className="card-body p-8">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-[#101727]">Starter</h2>
                            <span className="text-xl font-bold text-purple-600">$0/mo</span>
                        </div>
                        <ul className="space-y-4 text-sm flex-grow">
                            <FeatureItem text="High-resolution image generation" active={true} />
                            <FeatureItem text="Customizable style templates" active={true} />
                            <FeatureItem text="Batch processing capabilities" active={true} />
                            <FeatureItem text="AI-driven image enhancements" active={true} />
                            <FeatureItem text="Seamless cloud integration" active={false} />
                            <FeatureItem text="Real-time collaboration tools" active={false} />
                        </ul>
                        <div className="mt-8">
                            <button className="btn text-white rounded-full bg-gradient-to-r from-[#9514FA] to-[#4F39F6] border-none w-full hover:scale-105 transition-transform">Subscribe</button>
                        </div>
                    </div>
                </div>

                {/* Pro Plan (Highlighted) */}
                <div className="card shadow-2xl flex flex-col h-full relative overflow-hidden group">
                    <div className="card-body p-8 bg-gradient-to-b from-[#9514FA] to-[#4F39F6] text-white rounded-2xl">
                        <div className="absolute top-4 right-4">
                            <span className="badge badge-warning badge-sm font-bold p-3">Most Popular</span>
                        </div>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">Pro</h2>
                            <span className="text-xl font-bold">$29/mo</span>
                        </div>
                        <ul className="space-y-4 text-sm flex-grow">
                            <FeatureItem text="High-resolution image generation" active={true} light={true} />
                            <FeatureItem text="Customizable style templates" active={true} light={true} />
                            <FeatureItem text="Batch processing capabilities" active={true} light={true} />
                            <FeatureItem text="AI-driven image enhancements" active={true} light={true} />
                            <FeatureItem text="Seamless cloud integration" active={true} light={true} />
                            <FeatureItem text="Real-time collaboration tools" active={false} light={true} />
                        </ul>
                        <div className="mt-8">
                            <button className="btn bg-white text-purple-700 hover:bg-gray-100 rounded-full border-none w-full font-bold">Subscribe Now</button>
                        </div>
                    </div>
                </div>

                {/* Enterprise Plan */}
                <div className="card bg-base-100 shadow-xl border border-gray-100 flex flex-col h-full">
                    <div className="card-body p-8">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-[#101727]">Enterprise</h2>
                            <span className="text-xl font-bold text-purple-600">$99/mo</span>
                        </div>
                        <ul className="space-y-4 text-sm flex-grow">
                            <FeatureItem text="High-resolution image generation" active={true} />
                            <FeatureItem text="Customizable style templates" active={true} />
                            <FeatureItem text="Batch processing capabilities" active={true} />
                            <FeatureItem text="AI-driven image enhancements" active={true} />
                            <FeatureItem text="Seamless cloud integration" active={true} />
                            <FeatureItem text="Real-time collaboration tools" active={true} />
                        </ul>
                        <div className="mt-8">
                            <button className="btn text-white rounded-full bg-gradient-to-r from-[#9514FA] to-[#4F39F6] border-none w-full hover:scale-105 transition-transform">Contact Sales</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

const FeatureItem = ({ text, active, light }) => (
    <li className={`flex items-center gap-3 ${!active ? 'opacity-40' : ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className={`size-5 ${light ? 'text-white' : 'text-success'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        <span className={!active ? 'line-through' : ''}>{text}</span>
    </li>
);

export default Simple;