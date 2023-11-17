import React from 'react';
import {stats} from '../data/index'
import { styles } from '../styles/Styles';
const Stats = () => {
  return (
    <div className='text-white flex sm:flex-row flex-col sm:items-center items-start justify-around gap-9 sm:mx-20 mx-2 mt-[40px]'>
       {
        stats?.map((item)=>(
            <div id={item.id} key={item.id} className='flex mx-6 items-center gap-3'>
                <h2 className='sm:text-[35px] text-[28px]'>{item.value}</h2>
                <h3 className={`text-[18px] ${styles.text_gradient} fonnt-bold`}>{item.title}</h3>
            </div>
        ))
       }
    </div>
  );
}

export default Stats;
