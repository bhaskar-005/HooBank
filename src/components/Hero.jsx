import React from 'react';
import { discount,arrowUp, robot } from '../assets/index';
import { styles } from '../styles/Styles';
const Hero = () => {
  return (
    <section id='home' className='flex sm:flex-row flex-col bg-[#00040F] justify-center items-center pt-[30px]'>
      <div className={`flex flex-col sm:mx-[60px] mx-[30px]`}>
        {/* discount div */}
           <div className={`mb-3 flex items-center ${styles.gradient2} rounded-md py-[3px] px-2 max-w-[350px] justify-center gap-2`}>
            <img src={discount} alt="discount" />
            <p className='text-gray-300 text-[12px] '> <span className='font-bold' >20%</span> DISCOUNT FOR <span  className='font-bold'>1 MONTH</span> ACCOUNT</p>
           </div>
           <div className='flex items-center mb-8'>
               <h1 className='sm:text-[60px] text-[35px] font-bold text-[#fff]'>The Next 
               <br />
               <span className="bg-clip-text text-transparent bg-gradient-to-t from-cyan-600 to-cyan-100">Generation</span>
               <br /> Payment Method.</h1>
                <div className='transform -translate-y-12 -translate-x-7 sm:flex hidden cursor-pointer  h-[120px] w-[120px] rounded-[100px] inset-0 bg-gradient-to-br from-[#DEF9FA] via-[#BEF3F5] to-[#33BBCF]  p-[2px] '>
                 <div className={`h-full w-full ${styles.primary} rounded-[100px] flex justify-center items-center`}>
                    <div className='text-[18px] '>
                       <div className='flex'>
                        <p className='bg-clip-text text-transparent bg-gradient-to-t from-cyan-600 to-cyan-100 pr-2'>Get</p>
                        <img src={arrowUp} alt="arrow" />
                       </div>
                       <div>
                        <p className='bg-clip-text text-transparent bg-gradient-to-t from-cyan-600 to-cyan-100'>Started</p>
                       </div>
                    </div>
                 </div>
                </div>
           </div>
           <p className='flex items-start text-yellow-50 gap-2'>Our team of experts uses a methodology to identify <br /> the credit cards most likely to fit your needs. <br /> We examine annual percentage rates, annual fees.</p>

      </div>
      <div className='flex relative md:my-0 my-10 max-w-[544px]'>
        <img src={robot} className='w-full h-full relative z[5] glow' draggable='false' />
      </div>
    </section>
  );
}

export default Hero;
