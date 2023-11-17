import React from 'react';
import {features} from '../data/index';
import { styles } from '../styles/Styles';

const Business = () => {
  return (
    <div className='flex sm:flex-row flex-col  sm:px-[60px] px-[30px] justify-around' id='Features'>
        <div className='text-white max-w-[500px] mt-2'>
            <h1 className='text-[40px] font-bold'>You do the business, we’ll handle the money.</h1>
            <br />
            <p className='text-[15px] text-gray-400'>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
            <br />
            <button className={`${styles.skyblue_gradient} px-5 py-3 rounded-[10px] text-black text-[13px] font-medium mt-2`} >Get Started</button>
        </div>
        <div className='max-w-[500px] flex flex-col'>
        {
            features.map((features)=>(
                <div key={features.id} className={`text-white flex max-w-[500px] cursor-pointer py-5 ${styles.hover_gradient} rounded-[14px] sm:mt-0 mt-5` }>
                 
                        <img className='p-[10px] m-[10px] rounded-full bg-sky-900 h-[42px] w-[42px] mx-[24px] opacity-50 ' src={features.icon} />
                    <div>
                        <h3 className='text-[18px]'>{features.title}</h3>
                        <p className='text-[13px] text-gray-400'>{features.content}</p>
                    </div>
                </div>
            ))
        }
        </div>
    </div>
  );
}

export default Business;
