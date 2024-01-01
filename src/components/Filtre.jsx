import React from 'react';
import { useForm } from 'react-hook-form';
export default function Filtre() {
const {  handleSubmit, formState: { errors } } = useForm();
const onSubmit = (data) => console.log(data);
  return (

    <div className="w-full sm:w-[40%] flex flex-col items-center bg-[#B38B59] h-fit py-7 shadow-2xl text-white">
      <h2 className="px-3 font-semibold mb-12 text-[18px]">
        Affinez les résultats de votre recherche
      </h2>
      <form className="flex flex-col w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2 py-5 px-7 w-full">
          <label >Mots clés :</label>
          <input
            id="keywords"
            className="text-black focus:outline-none w-full py-2 px-3"
            type="text"
          />
        </div>

        <div className="flex flex-col gap-2 py-5 px-7 w-full">
          <label >Auteur(s) :</label>
          <input
            id="authors"
            className="text-black focus:outline-none w-full py-2 px-3"
            type="text"
          />
        </div>

        <div className="flex flex-col gap-2 py-5 px-7 w-full">
          <label>Institution(s) :</label>
          <input
            id="institutions"
            className="text-black focus:outline-none w-full py-2 px-3"
            type="text"
          />
        </div>

        <div className="flex flex-col py-5 px-7 w-full gap-2 mb-20">

          <label >Période :</label>
          <div className="flex md:flex-row flex-col gap-1 md:gap-3 justify-between text-black">
            <input
              id="startDate"
              type="date"
              className="w-full px-3 py-2 mb-2 sm:mb-0"
            />


            <input
              id="endDate"
              type="date"
              className="w-full px-3 py-2"
            />
          </div>
        </div>
    </form>
        <div className="bg-aa-vert px-8 font-semibold text-[20px] py-2 flex items-center justify-around gap-3 hover:bg-aa-vert/[0.8] transition-colors duration-[0.2s] cursor-pointer">
          <button className="uppercase" type="">Appliquer</button>
        </div>
    </div>
  );
}
