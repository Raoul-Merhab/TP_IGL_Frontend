import React from 'react'
import Image from "next/image";
import searchIcon from "../../public/assets/acceuil/searchIcon.svg";
export default function Search(){
    return(
        
          <div className="bg-aa-gris py-3 px-2 flex w-[83%] rounded-md">
            <input
              placeholder="Recherche ..."
              type="text"
              className=" ml-2 py-2 text-[16px] sm:text-[20px] w-full text-black bg-aa-gris placeholder:text-[16px] sm:placeholder:text-[20px]  placeholder:text-gray-400 placeholder:font-semibold focus:outline-none"
            />
            
            <div className="bg-aa-vert px-8 font-semibold text-[16px] sm:text-[20px] rounded-md flex items-center justify-around gap-3 hover:bg-aa-vert/[0.8] transition-colors duration-[0.2s] cursor-pointer">
              <Image src={searchIcon} width={30} className='sm:w-full w-1/4' />
              <button className="text-white sm:text-base ">Recherche</button>
            </div>
          </div>
        
    )}