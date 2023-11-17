import React from 'react';
import { styles } from '../styles/Styles';
const CTA = () => {
  return (
    <div className={`flex sm:flex-row flex-col sm:mx-20 mx-5 sm:px-[100px] px-5  justify-around items-center max-w-[1000px] rounded-[15px] py-[30px] sm:gap-[200px] gap-4 ${styles.gradient2}`} >
      <div className='text-gray-200'>
        <h1 className='text-gray-100 sm:text-[40px] text-[36px] font-bold'>Let’s try our service now!</h1> <br />
        <p className='text-gray-400 text-[14px] leading-7'>Everything you need to accept card payments <br /> and grow your business anywhere on the planet.</p>
      </div>
      <div className='flex justify-start '>
      <button className={`${styles.skyblue_gradient} px-5 py-3 rounded-[10px] text-black text-[13px] font-medium cursor-pointer`} >Get Started</button>
      </div>
    </div>
  );
}

export default CTA;
