import React, { useState } from 'react';
import logo from "../../public/assets/Logok.svg";
import Image from "next/image";
import moreIcon from "../../public/assets/moreIcon.svg";
import logout from "../../public/assets/logout.svg";
import settings from "../../public/assets/settings.svg";
const Navbar = ({ active, setActive }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      path: "/",
      name: "Acceuil",
    },
    {
      path: "/upload",
      name: "Upload",
    },
    {
        path: "/moderateurs",
        name: "Moderateur",
      },
  
  ];

  const linkss = [
    {
      path: "/settings",
      name: "Parametres",
    },
    {
      path: "/logout",
      name: "Se Deconnecter",
    },
  ]
  const toggleName = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-full h-6 bg-[#113E21]" />
      <nav className="w-full flex bg-[#FEFEFE] justify-between mt-1 items-center text-black">

        <div className=' flex flex-col gap-3 justify-between items-center'>
          <a href="/" onClick={() => setActive("Acceuil")}>
            <Image src={logo} className="top-6 w-[135px] h-[111px]" />
          </a>
          <p className='text-aa-vert font-semibold'>Article Atlas</p>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-white  py-4 px-7 rounded-lg focus:outline-none flex items-center"
          >
            {isOpen ? (
              <div className='flex flex-col items-end'>

                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: '#113E21' }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <div className="flex flex-col shadow-md md:hidden">

                  {links.map((link) => (
                    <a
                      key={link.name}
                      href={link.path}
                      className={`${active === link.name ? 'block  text-[#B38B59] font-semibold' : ''
                        } block text-[20px] font-medium py-2 px-4 transition-colors  duration-300 ease-in-out text-[#113E21] hover:bg-[#F0F0F0] hover:text-[#B38B59]`}
                      onClick={() => setActive(link.name)}
                    >
                      {link.name}
                    </a>
                  ))}
                  {linkss.map((link) => (
                    <a
                      key={link.name}
                      href={link.path}
                      className={`${active === link.name ? 'block text-[#B38B59] font-semibold' : ''
                        } block text-[20px] font-medium py-2 px-4 transition-colors  duration-300 ease-in-out text-[#113E21]  hover:bg-[#F0F0F0] hover:text-[#B38B59]`}
                      onClick={() => setActive(link.name)}
                    >
                      {link.name}
                    </a>
                  ))}

                </div>
              </div>
            ) : (
              <>

                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: '#113E21' }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </>
            )}
          </button>
        </div>

        <div className="hidden md:flex gap-4 items-center w-auto">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className={`${active === link.name ? 'block text-[#B38B59] font-semibold' : ''
                } block text-[20px] font-medium py-2 px-4 transition-colors duration-300 ease-in-out hover:bg-[#F0F0F0] hover:text-[#B38B59]`}
              onClick={() => setActive(link.name)}
            >
              {link.name}
            </a>
          ))}



        </div>

        <div className='hidden md:flex gap-4 mr-6'>
        <div className='hidden md:flex gap-4'>
          <div className="relative flex flex-col items-center rounded-lg gap-1">

            <div className='flex mb-2 justify-between bg-[#F0F0F0] w-56 px-1 py-4 rounded-lg'>
              <p className=" font-semibold ml-2">Yahi Hiba Farah Yazi</p>
              <Image src={moreIcon} className="cursor-pointer" onClick={toggleName} />
            </div>

            {isOpen &&
              <div className='absolute top-16 flex justify-between bg-[#F0F0F0] w-56 px-1 py-4 rounded-lg'>
                <p className='font-semibold'>Parametres du compte</p>
                <Image src={settings} className='cursor-pointer' onClick={toggleName} />
              </div>}
          </div>

        </div>
        <div className="hidden md:block bg-[#113E21] p-[14px] rounded-lg cursor-pointer w-14 h-14">
          <Image src={logout} className="w-full h-full" />
        </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
