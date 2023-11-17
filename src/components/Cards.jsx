import React from 'react';
import {feedback} from '../data/index'
import { quotes } from '../assets/index';
import { styles } from '../styles/Styles';
const Cards = () => (
  <section>
         <div className={`flex sm:flex-row flex-col justify-center  items-center flex-wrap mt-[30px]`}>
         {
            feedback.map((feed)=>(
                <div key={feed.id} className={`text-gray-200 max-w-[340px] min-h-[395px] flex m-6 border cursor-pointer rounded-[14px] ${styles.hover_gradient}`}>
                    <div className='px-6 py-16'>
                    <div>
                       <img src={quotes}/>
                     </div>
                  <div className='flex flex-col '>
                  <div className='py-10 leading-9'>
                        <p className='text-[16px]'>{feed.content}</p>
                     </div>
                     <div className='flex items-end'>
                        <img className={`h-[40px] w-[40px]`} src={feed.img} alt="" />
                        <div className='mx-3'>
                            <h3 className='text-[16px]'>{feed.name}</h3>
                            <h2 className='text-[13px] text-gray-400 font-light'>{feed.title}</h2>
                        </div>
                     </div>
                  </div>
                    </div>
                </div>
            ))
         }
        </div>
  </section>
);
export default Cards;
