import React from 'react';

const Stat = () => {
    return (
       <div className="stats flex justify-start items-center shadow bg-linear-to-t from-[#9514FA]  to-[#4F39F6] "> 
 
 <div className="div container mx-auto  flex justify-start items-center">

 <div className="stat">
    
    <div className="stat-value  text-[60px] font-extrabold text-[#FFFFFF]">50K+</div>
    <div className="stat-desc  text-[24px] font-medium text-[#FFFFFF]">Active Users</div>
  </div>

  

<div className="stat">
    
    
    <div className="stat-value  text-[60px] font-extrabold text-[#FFFFFF]">200+</div>
    <div className="stat-desc text-[24px] font-medium text-[#FFFFFF]">Premium Tools</div>
  </div>

<div className="stat">
    
   
    <div className="stat-value  text-[60px] font-extrabold text-[#FFFFFF]">4.9</div>
    <div className="stat-desc text-[24px] font-medium text-[#FFFFFF]">Rating</div>
  </div>


 </div>

  
</div>
    );
};

export default Stat;