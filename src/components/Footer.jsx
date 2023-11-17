import React from 'react';
import { logo } from '../assets';
import {footerLinks, socialMedia} from '../data/index';
const Footer = () => {
  return (
   <footer className='min-h-[340px] flex flex-col justify-center bg-[#06080D] '>
    <div className='flex sm:flex-row flex-col text-gray-400 justify-around px-[20px] mb-10'>
        <div className='max-w-[250px] flex flex-col mt-[50px]'>
            <img className='w-[184px] my-5' src={logo}/>
            <p className='m-2 leading-5'>
            A new way to make the payments easy, reliable and secure.
            </p>
        </div>
        <div className='flex sm:flex-row flex-col sm:gap-[150px] gap-4 flex-wrap '>
           {
            footerLinks.map((footerLinks)=>(
               <div className='text-gray-300  '>
                  <h3 className='text-[16px] font-semibold sm:mt-20 mt-5'>{footerLinks.title}</h3>
                
                  <ul>
                    {footerLinks.links.map((link)=>(
                    <li className='my-[8px] hover:text-gray-400'><a href='#' key={link.link}>{link.name}</a></li>
                    ))}
                  </ul>
               </div>
            ))
           }
        </div>
    </div>
     <hr /> 
    <div className='flex flex-wrap justify-between sm:px-[150px] px-[10px] p-[20px] item-center'>
      <div className='text-gray-200'>
        copyright © build from scratch by <a href="https://www.linkedin.com/in/bhaskar-bhandari-506a40244/">
         <span className={`bg-clip-text text-transparent bg-gradient-to-t from-cyan-600 to-cyan-100 text-[16px] font-bold`}>Bhaskar Bhandari</span>
         </a>
       </div>
       <div className='flex gap-6 '>
       {
        socialMedia.map((socialMedia)=>(
           <a href={socialMedia.link} key={socialMedia.id}><img src={socialMedia.icon}/> </a> 
        ))
       }
       </div>
    </div>
   </footer>
  );
}

export default Footer;
