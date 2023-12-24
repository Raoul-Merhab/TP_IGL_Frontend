import React from 'react'
import logo from "../../../public/assets/Logo.png";
import searchIcon from "../../../public/assets/acceuil/searchIcon.svg";

import Image from 'next/image';


const Acceuil = () => {
  return (
    <div>
      <div className="w-full px-32 py-10 bg-aa-gris text-black">
        <div>
          <h2 className="text-[42px]  max-w-[290px] font-bold text-aa-vert">
            Bienvenu Sur Article Atlas
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adip</p>
        </div>
      </div>
      <div className="w-full bg-aa-vert flex justify-center items-center py-14">
        <div className="relative w-[73%] bg-aa-white flex flex-col items-center gap-12 pb-28 pt-3 rounded-3xl">
          <div className="bg-aa-white px-20 py-6 absolute top-0 -right-24 rounded-full"></div>
          <div className="bg-aa-vert px-20 py-6 absolute top-[48px]  -right-16 rounded-full"></div>
          <div className="bg-aa-white px-20 py-6 absolute top-[96px] -right-12 rounded-full"></div>
          <div className="bg-aa-white px-6 py-6 absolute top-[96px] -right-28 rounded-full"></div>
          <div className="bg-aa-white px-20 py-6 absolute top-0 -left-12 rounded-full"></div>
          <div className="bg-aa-vert px-10 py-6 absolute top-[48px] -left-8 rounded-full"></div>
          <div className="bg-aa-white px-20 py-6 absolute top-[96px] -left-24 rounded-full"></div>
          <div className="bg-aa-white px-20 py-6 absolute bottom-0 -left-12 rounded-full"></div>
          <div className="bg-aa-white px-6 py-6 absolute bottom-0 -left-28 rounded-full"></div>
          <div className="bg-aa-vert px-10 py-6 absolute bottom-[48px] -left-8 rounded-full"></div>
          <div className="bg-aa-white px-20 py-6 absolute bottom-[96px] -left-16 rounded-full"></div>

          <Image src={logo} width={400} />
          <div className="bg-aa-gris py-3 px-2 flex w-[83%] rounded-md">
            <input
              placeholder="Recherche ..."
              type="text"
              className="py-2 text-[25px] w-full text-black bg-aa-gris placeholder:text-[25px] placeholder:text-gray-400 placeholder:font-semibold focus:outline-none"
            />
            <div className="bg-aa-vert px-8 font-semibold text-[20px] rounded-md flex items-center justify-around gap-3 hover:bg-aa-vert/[0.8] transition-colors duration-[0.2s] cursor-pointer">
              <Image src={searchIcon} width={30} />
              <button className="text-white">Recherche</button>
            </div>
          </div>
          <p className="text-[#B38B59] text-[20px] font-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa atque
            vit
          </p>
          {/* <p className="text-[20px] bg-transparent border-2 border-aatext-aa-vert text-aa-vert font-semibold  px-9 py-3 rounded-xl hover:text-white hover:bg-aa-vert transition-colors duration-[0.8s] cursor-pointer ">
            Articles non verfier
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Acceuil