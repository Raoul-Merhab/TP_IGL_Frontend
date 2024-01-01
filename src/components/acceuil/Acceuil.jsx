import React from 'react'
import logo from "../../../public/assets/Logo.png";
import Search from '../Search';
import Image from 'next/image';
import Header from '../Header';
import Navbar from '../Navbar';

const Acceuil = () => {
  return (
    <div>
      <Navbar />
      <div className=" mt-16 w-full px-8 sm:px-16 lg:px-32 py-10 bg-aa-gris text-black">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl max-w-[290px] font-bold text-aa-vert">
            Bienvenu Sur Article Atlas
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adip</p>
        </div>
      </div>
      <div class="w-full bg-aa-vert flex justify-center items-center py-14">
        <div class="w-[95%] sm:w-4/5 md:w-3/4 lg:w-[73%] bg-aa-white flex flex-col items-center gap-8 sm:gap-12 pb-8 md:pb-28 pt-3 rounded-3xl">
          <Image src={logo} width={400} className='w-1/2 md:w-1/4' />
          <Search />
          <p class="text-[#B38B59] text-base sm:text-lg md:text-xl font-medium text-center mx-4 sm:mx-8 md:mx-12">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa atque vit
          </p>


          {/* Additional content */}
        </div>
      </div>
    </div>

  );
}

export default Acceuil


