import React, { useState } from "react";
import { navLinks } from "../data";
import {logo,menu,close} from '../assets/index'
import { styles } from "../styles/Styles";

const Navbar = () => {
    const[toggle,settoggle] = useState(false);
  return (
    <div className="bg-[#00040F] flex items-center justify-around w-full h-[50px]"  >
      <img className="w-[124px]" src={logo} alt="" />
   
      <ul className="sm:flex hidden">
        {navLinks.map((data) => (
          <a className="ml-8" href={`#${data.title}`} id={data.id} key={data.id}>
            <li className=" text-gray-200 font-normal text-base" >{data.title}</li>
          </a>
        ))}
      </ul>
      <div className="sm:hidden" onClick={()=>settoggle(!toggle)}>
           <img className="w-[28px] h-[28px]" src={ toggle? close:menu}/>
      </div>

      {/* div to show on toggle button */}
      <div className={`${toggle?'flex':'hidden'} sm:hidden absolute p-7 top-20 right-12 rounded-xl ${styles.gradient}`}>
      <ul className="flex flex-col items-center">
        {navLinks.map((data) => (
          <a href={`#${data.title}`} id={data.id} key={data.id}>
            <li className=" m-2 text-gray-100 font-normal text-[17px]  ">{data.title}</li>
          </a>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Navbar;
