import React from "react";

const Form1 = () => {
  return (
    <>
      <div className="w-full px-32 py-10 bg-[#F0F0F0] text-black">
        <div>
          <h2 className="text-[42px]  max-w-[290px] font-bold text-[#113E21]">
            Paramètres de votre compte
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adip</p>
        </div>
      </div>
      <div className="w-full bg-[#113E21] flex justify-center items-center py-14">
        <div className="relative w-[63%] bg-[#FEFEFE] flex flex-col items-center gap-12 pt-32 pb-56 rounded-3xl justify-center">
          <div className="bg-[#FEFEFE] px-20 py-6 absolute top-0 -right-24 rounded-full"></div>
          <div className="bg-[#113E21] px-20 py-6 absolute top-[48px]  -right-16 rounded-full"></div>
          <div className="bg-[#FEFEFE] px-20 py-6 absolute top-[96px] -right-12 rounded-full"></div>
          <div className="bg-[#FEFEFE] px-6 py-6 absolute top-[96px] -right-28 rounded-full"></div>
          <div className="bg-[#FEFEFE] px-20 py-6 absolute top-0 -left-12 rounded-full"></div>
          <div className="bg-[#113E21] px-10 py-6 absolute top-[48px] -left-8 rounded-full"></div>
          <div className="bg-[#FEFEFE] px-20 py-6 absolute top-[96px] -left-24 rounded-full"></div>
          <div className="bg-[#FEFEFE] px-20 py-6 absolute bottom-0 -left-12 rounded-full"></div>
          <div className="bg-[#FEFEFE] px-6 py-6 absolute bottom-0 -left-28 rounded-full"></div>
          <div className="bg-[#113E21] px-10 py-6 absolute bottom-[48px] -left-8 rounded-full"></div>
          <div className="bg-[#FEFEFE] px-20 py-6 absolute bottom-[96px] -left-16 rounded-full"></div>

          <form
            action=""
            className="flex flex-col justify-center items-center w-[40%]"
          >
            <div className="w-full flex flex-col gap-8">
              <div className="flex flex-col justify-between items-start gap-2">
                <p className="text-[#252620] text-[18px] font-medium">Nom :</p>
                <input
                  type="text"
                  className="w-full py-4 bg-[#F0F0F0] rounded-xl px-2 focus:outline-none text-black text-[17px]"
                  required
                />
              </div>
              <div className="flex flex-col justify-between items-start gap-2">
                <p className="text-[#252620] text-[18px] font-medium">
                  email :
                </p>
                <input
                  type="email"
                  className="w-full py-4 bg-[#F0F0F0] rounded-xl px-2 focus:outline-none text-black text-[17px]"
                  required
                />
              </div>
              <div className="flex flex-col justify-between items-start gap-2">
                <p className="text-[#252620] text-[18px] font-medium">
                  mot de passe :
                </p>
                <input
                  type="password"
                  className="w-full py-4 bg-[#F0F0F0] rounded-xl px-2 focus:outline-none text-black text-[17px]"
                  required
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form1;
