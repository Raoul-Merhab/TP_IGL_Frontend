import React from 'react'
import Image from 'next/image';
import logo from "../../../public/assets/Logo.png"
const SignUp = () => {
  return (
    <div className="w-full py-16 flex justify-center items-center bg-aa-vert">
      <div className="flex">
        <div className="flex flex-col items-center bg-aa-white my-20 py-3 px-10 shadow-2xl -mr-14 rounded-3xl z-10 gap-10">
          <Image src={logo} width={400} />
          <p className="text-black max-w-[500px]">
            Lorem ipsum dolor sit amet consecteturpsum dolor sit amet Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit
            dolore, maxime nobis veritatis laudantium ipsa adipisci, magnam
            explicabo dolorem maiores accusantium modi. Laborum, illum autem
            inventore ipsam esse eos eligendi? consectetur{" "}
          </p>
        </div>
        <div className="relative bg-aa-marron px-44 py-16 rounded-3xl ">
          <div className="absolute bg-aa-marron top-[10%] px-14 py-5 -right-20 rounded-full"></div>
          <div className="absolute bg-aa-vert top-[131px] px-5 py-5 -right-5 rounded-full"></div>
          <div className="absolute bg-aa-marron top-[171px] px-10 py-5 -right-12 rounded-full"></div>
          <div className="absolute bg-aa-marron top-[171px] px-5 py-5 -right-[106px] rounded-full"></div>
          <div className="absolute bg-aa-marron bottom-[10%] px-14 py-5 -right-20 rounded-full"></div>
          <div className="absolute bg-aa-vert bottom-[131px] px-5 py-5 -right-5 rounded-full"></div>
          <div className="absolute bg-aa-marron bottom-[171px] px-14 py-5 -right-14 rounded-full"></div>

          <div className="flex flex-col justify-between items-start mb-24 ">
            <h2 className="text-aabg-aa-vert font-semibold text-[35px]">
              Inscrivez-Vous
            </h2>
            <p className="text-[#252620] font-medium text-[17px]">
              Creer votre compte
            </p>
          </div>
          <form action="">
            <div className="w-full flex flex-col gap-8">
              <div className="flex flex-col justify-between items-start gap-2">
                <p className="text-[#252620] text-[18px] font-medium">Nom :</p>
                <input
                  type="text"
                  className="w-full py-4 rounded-xl px-2 focus:outline-none text-black text-[17px]"
                  required
                />
              </div>
              <div className="flex flex-col justify-between items-start gap-2">
                <p className="text-[#252620] text-[18px] font-medium">
                  email :
                </p>
                <input
                  type="email"
                  className="w-full py-4 rounded-xl px-2 focus:outline-none text-black text-[17px]"
                  required
                />
              </div>
              <div className="flex flex-col justify-between items-start gap-2">
                <p className="text-[#252620] text-[18px] font-medium">
                  mot de passe :
                </p>
                <input
                  type="password"
                  className="w-full py-4 rounded-xl px-2 focus:outline-none text-black text-[17px]"
                  required
                />
              </div>
            </div>

            <div className="flex justify-center items-center bg-aa-vert text-white w-full cursor-pointer py-4 rounded-md my-14 hover:bg-aa-vert/[0.8] transition-colors duration-[0.2s]">
              {" "}
              <button className="w-full bg-transparent uppercase" type="submit">
                S'Inscrire{" "}
              </button>
            </div>
          </form>
          <div className="text-[#252620] font-medium mb-20">
            Vous avez deja un compte ?{" "}
            <a href="/signin" className="text-aa-vert hover:underline">
              Connecter vous
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp