import React from 'react';
import {Cards,Client} from '../index'
const Testimonials = () => {
  return (
    <div id='Clients'>
     <div className='flex sm:flex-row flex-col justify-around px-8 items-center '>
       <div><h1 className='text-gray-100 text-[40px] font-bold'>What people are <br /> saying about us</h1></div> 
       <div><p className='text-gray-400 text-[18px]'>Everything you need to accept card payments <br /> and grow your business anywhere on the planet.</p>
     </div>
    </div>
    <Cards/>
    <Client/>
</div>
  );
}

export default Testimonials;
