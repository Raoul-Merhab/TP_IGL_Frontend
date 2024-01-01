import React from "react";
import upload from "../../../public/assets/upload/uploadIcon.svg";
import Image from "next/image";
import NavbarAdmin from '../Navbar';
import { useForm } from 'react-hook-form';

const Gestion = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);
  const tab = [
    "lorem ipsum lorem ipsum",
    "lorem ipsum lorem ipsum",
    "lorem ipsum lorem ipsum",
    "lorem ipsum lorem ipsum",
    "lorem ipsum lorem ipsum",
    "lorem ipsum lorem ipsum",
   
  ];

  return (
    <>
      <div className='bg-[#FEFEFE]'>
        <NavbarAdmin />
        <div className="mt-16 w-full px-8 sm:px-16 lg:px-32 py-10 bg-aa-gris text-black">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl max-w-[290px] font-bold text-aa-vert">
              Gestion Des Moderateurs
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adip</p>
          </div>
        </div>
      </div>

      <div className="bg-aa-white w-full flex flex-col lg:flex-row px-2 sm:px-6 lg:px-10 py-8 gap-10">
        <div className="text-black flex flex-col w-full lg:w-[45%] justify-center items-center bg-aa-gris px-4 lg:px-2 pb-10 lg:pb-20 pt-5 sm:pt-10 rounded-lg ">

          <form
            action=""
            className="flex flex-col justify-center items-center w-[90%]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full flex flex-col space-y-4 md:space-y-36">

              <div className="space-y-2 md:space-y-10">
                <div className="flex flex-col justify-between items-start space-y-2">
                  <p className="text-[#252620] text-[15px] sm:text-[18px] font-semibold">
                    Nom du moderateur :
                  </p>
                  <input
                    type="text"
                    className="w-full py-3 bg-white md:py-4 rounded-xl my-5 px-3 focus:outline-none text-black text-[17px]"
                    {...register("exampleRequired", { required: true })}
                  />
                </div>
                {errors.exampleRequired && <span>Ce champs est obligatoire</span>}
                <div className="flex flex-col justify-between items-start space-y-2">
                  <p className="text-[#252620] text-[15px] sm:text-[18px] font-semibold">
                    Email du moderateur :
                  </p>
                  <input
                    type="email"
                    className="w-full py-3 bg-white md:py-4 rounded-xl my-5 px-3 focus:outline-none text-black text-[17px]"
                    {...register("exampleRequired1", { required: true })}
                  />
                </div>
                {errors.exampleRequired1 && <span>Ce champs est obligatoire</span>}
              </div>

              <div className="flex flex-col justify-between items-center space-y-2 md:space-y-8">
                <div className="flex justify-center items-center bg-aa-marron text-white w-[80%] cursor-pointer py-3 md:py-4 rounded-md my-10 hover:bg-aa-marron/[0.8] transition-colors duration-[0.2s]">
                  <button className="w-full bg-transparent  text-[15px] sm:text-[18px] font-semibold uppercase" type="">
                    Modifier
                  </button>
                </div>
                <div className="flex justify-center items-center bg-aa-vert text-white w-[80%] cursor-pointer py-3 md:py-4 rounded-md my-10 hover:bg-aa-vert/[0.8] transition-colors duration-[0.2s]">
                  <button className="w-full bg-transparent  text-[15px] sm:text-[18px] font-semibold uppercase" type="">
                    Supprimer moderateur
                  </button>
                </div>
              </div>
            </div>
          </form>

        </div>
        <div className="w-full lg:w-[55%] bg-aa-marron h-fit rounded-lg px-4 py-8 md:px-8 md:py-10">
          <p className="font-bold text-[16px] md:text-[20px] text-white">
            Moderateurs de Article Atlas{" "}
          </p>
          <div className="max-h-[350px] md:max-h-[591px] pt-2 md:pt-4 overflow-y-scroll">
            {tab.map((e, index) => (
              <div key={index} className="py-4 bg-aa-gris my-2 md:my-4 mx-2 md:mx-4 px-2 md:px-4 text-black text-sm md:text-base">
                {e}
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-between items-center">
            <div className="flex justify-center items-center bg-aa-gris text-aa-marron w-full sm:w-[70%] md:w-[60%] lg:w-[50%] cursor-pointer py-3 md:py-4 rounded-md my-10 hover:bg-aa-white/[0.8] transition-colors duration-[0.2s]">
              <button className="w-full bg-transparent text-[15px] sm:text-[18px] font-semibold uppercase" type="">
                Ajouter Moderateur
              </button>
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default Gestion;
