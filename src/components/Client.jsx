import React from 'react';
import { clients } from '../data/index';
const Client = () => {
  return (
    <div className='flex sm:gap-32 gap-10 flex-wrap items-center justify-center my-10'>
     {
      clients.map((clients)=>(
        <div key={clients.id} className='sm:w-[192px] w-24'>
            <img src={clients.logo} alt={clients.id} className='w-full h-full' />
        </div>
      ))
     }
    </div>
  );
}

export default Client;
