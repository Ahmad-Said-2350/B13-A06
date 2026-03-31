import React from 'react';

const Stat = () => {
    return (
        <div className="bg-linear-to-r from-[#9514FA] to-[#4F39F6] py-10 md:py-16">
            <div className="container mx-auto px-4">
               
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    
                    <div className="flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-white/20 pb-6 md:pb-0">
                        <div className="text-4xl md:text-6xl font-extrabold text-white">50K+</div>
                        <div className="text-lg md:text-2xl font-medium text-white/90">Active Users</div>
                    </div>

                    <div className="flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-white/20 pb-6 md:pb-0">
                        <div className="text-4xl md:text-6xl font-extrabold text-white">200+</div>
                        <div className="text-lg md:text-2xl font-medium text-white/90">Premium Tools</div>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <div className="text-4xl md:text-6xl font-extrabold text-white">4.9</div>
                        <div className="text-lg md:text-2xl font-medium text-white/90">Rating</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Stat;