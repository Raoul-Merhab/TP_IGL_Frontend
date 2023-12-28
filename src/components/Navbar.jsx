"use client";

import logo from "../../public/assets/Logo.png";
import Image from "next/image";
import moreIcon from "../../public/assets/moreIcon.svg";
import logout from "../../public/assets/logout.svg";

const Navbar = ({ active, setActive }) => {
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
      path: "/moderateur",
      name: "Moderateur",
    },
  ];
  return (
    <>
      <div className="w-full h-6 bg-[#113E21]" />
      <nav className="w-full flex bg-[#FEFEFE] justify-between px-20 items-center text-black">
        <div>
          <a href="/" onClick={() => setActive("Acceuil")}>
            <Image src={logo} className="w-[135px] h-[111px]" />
          </a>
        </div>
        <div className=" flex gap-24">
          {links.map((link) => (
            <a
              href={link.path}
              className={`${
                active === link.name ? "text-[#B38B59] font-semibold" : ""
              }  text-[20px] font-medium`}
              onClick={() => setActive(link.name)}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-8 ">
          <div className="flex items-center gap-5 bg-[#F0F0F0] py-4 px-7 rounded-lg">
            <p className="px">Yahi Hiba Farah Yazi</p>
            <Image src={moreIcon} className="cursor-pointer" />
          </div>
          <div className="bg-[#113E21] p-[14px] rounded-lg cursor-pointer">
            <Image src={logout} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
