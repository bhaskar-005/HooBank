import React from 'react';
import { bill,apple,google } from '../assets/index';

const Billing = () => {
  return (
    <div className='flex sm:flex-row-reverse flex-col  sm:px-[60px] px-[30px] justify-around items-center 'id='Product'>
    <div className='text-white max-w-[500px] mt-2'>
        <h1 className='text-[40px] font-bold'>Easily control your <br /> billing & invoicing.</h1>
        <br />
        <p className='text-[15px] text-gray-400'>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        <br />
        <div className='flex sm:gap-9 gap-2'>
            <img src={apple} />
            <img src={google} />
        </div> 
    </div>
    <div className='max-w-[450px] flex flex-col sm:mt-0 mt-5'>
     <img src={bill} alt="" />

    </div>
</div>
  );
}

export default Billing;
