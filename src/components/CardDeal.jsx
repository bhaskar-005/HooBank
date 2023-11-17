import React from 'react';
import { card } from '../assets/index';
import { styles } from '../styles/Styles';
const CardDeal = () => {
  return (
    <div className='flex sm:flex-row flex-col  sm:px-[60px] px-[30px] justify-around items-center'>
    <div className='text-white max-w-[500px] mt-2'>
        <h1 className='text-[40px] text-bold font-bold'>Find a better card deal in few easy steps.</h1>
        <br />
        <p className='text-[15px] text-gray-400'>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        <br />
        <button className={`${styles.skyblue_gradient} px-5 py-3 rounded-[10px] text-black text-[13px] font-medium mt-2 cursor-pointer`} >Get Started</button>
    </div>
    <div className='max-w-[450px] flex flex-col sm:mt-0 mt-5'>
     <img src={card}/>
     <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />

    </div>
</div>
  );
}

export default CardDeal;
