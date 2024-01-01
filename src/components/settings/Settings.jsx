import React from "react";
import Navbar from "../Navbar";
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import logo from '../../../public/assets/Logo.png';
const Settings = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <>
            <div className='bg-[#FEFEFE]'>
                <Navbar />
                <div className=" mt-16 w-full px-8 sm:px-16 lg:px-32 py-10 bg-aa-gris text-black">
                    <div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl max-w-[290px] font-bold text-aa-vert">
                            Parametres De Votre Compte
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adip</p>
                    </div>
                </div>
            </div>

            <div className="w-full  bg-[#113E21] flex justify-center items-center py-16">
                <div className="w-11/12 md:w-[50%] flex flex-col items-center justify-center  bg-[#FEFEFE] px-4 md:px-28 py-6 rounded-xl md:rounded-3xl">

                    <div className="w-full flex flex-col justify-between items-center m-4 md:mb-10">
                        <p className="text-[#252620] font-semibold text-2xl">
                            Modifiez vos informations
                        </p>

                    </div>

                    <form
                        action=""
                        className="flex flex-col justify-center items-center w-[90%]"
                        onSubmit={handleSubmit(onSubmit)}
                    >

                        <div className="w-full flex flex-col  gap-4 md:gap-6">
                            <div className="flex flex-col justify-between items-start gap-2">
                                <p className="text-[#252620] text-[15px] sm:text-[18px]  font-medium">Nom :</p>
                                <input
                                    type="text"
                                    className="w-full py-3 bg-[#F0F0F0] md:py-4 rounded-xl px-4 focus:outline-none text-black text-[17px]"
                                    {...register("example")}
                                />
                            </div>
                            <div className="flex flex-col justify-between items-start gap-2">
                                <label className="text-[#252620] text-[15px] sm:text-[18px]  font-medium">Email :</label>
                                <input
                                    type="email"
                                    className="w-full py-3  bg-[#F0F0F0] md:py-4 rounded-xl px-4 focus:outline-none text-black text-[17px]"
                                    {...register("example")}
                                />
                            </div>


                            <div className="flex flex-col justify-between items-start gap-2">
                                <label className="text-[#252620] text-[15px] sm:text-[18px] font-medium">
                                    Mot de passe :
                                </label>
                                <input
                                    type="password"
                                    className="w-full bg-[#F0F0F0]  py-3 md:py-4 rounded-xl px-2 focus:outline-none text-black text-[17px]"
                                    {...register("example")}
                                />
                            </div>
                            <div className="flex justify-center items-center bg-aa-marron  text-white w-full cursor-pointer py-3 md:py-4 rounded-md my-10 hover:bg-aa-vert/[0.8] transition-colors duration-[0.2s]">
                                {" "}
                                <button className="w-full bg-transparent uppercase" type="submit">
                                    Modifier{" "}
                                </button>
                            </div>

                        </div>
                    </form>

                </div>
            </div>
            </>
    );
};

export default Settings;