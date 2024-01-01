import React from 'react';
import Image from 'next/image';
import logo from '../../../public/assets/Logo.png';


const Error = () => {


    return (
        <div className="w-full md:h-screen  h-fit flex flex-col gap-8 justify-center items-center bg-aa-white md:bg-aa-vert">
            <div className="flex flex-col justify-center items-center md:flex-row m-2 ">
                <div className="md:w-full w-11/12 flex flex-col justify-center items-center bg-aa-white my-8 md:my-20 py-4 px-4 md:px-12 md:shadow-2xl md:-mr-14 rounded-xl md:rounded-3xl z-10 gap-3 ">
                    <Image src={logo} width={300} className='items-center md:w-[300px] w-1/2' />
                    <p className='font-semibold text-2xl md:text-3xl items-center'>Article Atlas</p>
                    <p className="text-black font-medium hidden md:block text-base md:text-lg items-center max-w-[500px]">
                        Explorez la science en un clic. Articles pointus, découvertes passionnantes. Plongez dans le savoir dès maintenant!
                    </p>
                </div>
              
                <div className="md:w-full w-11/12  bg-aa-marron flex flex-col px-4 md:px-28 py-6 rounded-xl md:rounded-3xl gap-8">
                    <div className="w-full flex flex-col justify-between items-start mb-4 md:mb-24">
                        <h2 className="text-aa-vert font-semibold text-3xl md:text-4xl">
                            OUPS ....
                        </h2>
                        <p className="text-[#252620] font-medium text-base md:text-lg">
                            La page que vous cherchez est introuvable
                        </p>
                    </div>
                    <div className='text-aa-white flex flex-col justify-center items-center font-bold uppercase gap-6 '>

                        <div className='text-4xl md:text-6xl'>Error</div>
                        <div className='text-5xl md:text-9xl'>404</div>
                    </div>

                    <div className="flex justify-center items-center bg-aa-vert text-white w-full cursor-pointer py-3 md:py-4 rounded-md my-14 hover:bg-aa-vert/[0.8] transition-colors duration-[0.2s]">
                        <button className="w-full bg-transparent uppercase " >
                            Revenir A L'Acceuil
                        </button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Error;
