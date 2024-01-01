import React from 'react';
import Image from 'next/image';
import logo from '../../../public/assets/Logo.png';
import { useForm } from 'react-hook-form';

const SignUp = () => {
  const { register, handleSubmit, getValues, formState: { errors } } = useForm({
    mode: 'onChange', // Enable live validation
  });

  const validatePasswordMatch = (value) => {
    return value === getValues('exampleRequired1') || 'Les mots de passe ne correspondent pas';
  };


  const onSubmit = (data) => console.log(data);

  return (
    <div className="w-full lg:h-screen  h-fit flex flex-col justify-center items-center bg-aa-white  md:bg-aa-vert   ">
      <div className="flex flex-col justify-center items-center md:flex-row gap-2  m-2 ">

        <div className="md:w-full w-11/12 flex flex-col justify-center items-center bg-transparent md:bg-aa-white py-4 px-4 md:px-12 md:shadow-2xl md:-mr-14 rounded-xl md:rounded-3xl z-10 gap-3 ">
          <Image src={logo} width={300} className='items-center md:w-[300px] w-1/2  ' />
          <p className='font-semibold text-2xl md:text-3xl items-center'>Article Atlas</p>
          <p className="text-black font-medium text-base md:text-lg hidden md:block items-center max-w-[500px]">
            Explorez la science en un clic. Articles pointus, découvertes passionnantes. Plongez dans le savoir dès maintenant!
          </p>
        </div>

        <div className="md:w-full w-11/12 h-[700px] bg-aa-marron px-4 md:px-28 py-2 rounded-xl md:rounded-3xl">
          <div className="w-full flex flex-col mt-2  justify-between items-start mb-4 md:mb-8">
            <h2 className="text-aa-vert font-semibold text-2xl md:text-3xl">
              Inscrivez-Vous
            </h2>
            <p className=" text-[#252620] font-medium text-base md:text-lg">
              Créer votre compte
            </p>
          </div>

          <form className="flex flex-col w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full flex flex-col gap-4 md:gap-4">
              <div className="relative flex flex-col justify-between items-start gap-2">
                <label className="text-[#252620] text-[18px] font-medium">Nom :</label>
                <input
                  type="text"
                  className="w-full py-3 md:py-4 rounded-xl px-4 focus:outline-none text-black text-[17px]"
                  {...register("exampleRequired", { required: true })}
                />
                {errors.exampleRequired && (
                <span className='absolute  right-2 -bottom-6'>Ce champs est obligatoire</span>
              )}
              </div>
              

              <div className="relative flex flex-col justify-between items-start gap-2">
                <label className="text-[#252620] text-[18px] font-medium">Email :</label>
                <input
                  type="email"
                  className="w-full py-3 md:py-4 rounded-xl px-4 focus:outline-none text-black text-[17px]"
                  {...register("exampleRequired2", { required: true })}
                />
                 {errors.exampleRequired2 && (
                <span className='absolute  right-2 -bottom-6'>Ce champs est obligatoire</span>
              )}

              </div>
             
              <div className="relative flex flex-col justify-between items-start gap-2">
                <label className="text-[#252620] text-[18px] font-medium">
                  Mot de passe :
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full py-3 md:py-4 rounded-xl px-2 focus:outline-none text-black text-[17px]"
                  {...register("exampleRequired1", { required: true })}
                />
                 {errors.exampleRequired1 && (
                <span className='absolute  right-2 -bottom-6'>Ce champs est obligatoire</span>
              )}
              </div>
             

              <div className="relative flex flex-col justify-between items-start gap-2">
                <label className="text-[#252620] text-[18px] font-medium">
                  Vérifier le mot de passe :
                </label>
                <input
                  type="password"
                  className="w-full py-3 md:py-4 rounded-xl px-2 focus:outline-none text-black text-[17px]"
                  {...register("exampleRequired3", {
                    required: true,
                    validate: validatePasswordMatch,
                  })}
                />
                 {errors.exampleRequired3 && (
                <span className='absolute  right-2 -bottom-6'>Les mots de passe ne correspondent</span>
              )}

              </div>
             


              <div className="flex justify-center items-center bg-aa-vert text-white w-full cursor-pointer py-3 md:py-4 rounded-md mb-4 mt-8 hover:bg-aa-vert/[0.8] transition-colors duration-[0.2s]">
                <button className="w-full bg-transparent uppercase " type="submit" >
                  S'Inscrire
                </button>
              </div>
            </div>
          </form>

          <div className="text-[#252620] font-medium flex justify-center items-start gap-1 mb-6 md:mb-12">
            Vous avez déjà un compte? {' '}
            <a href="/signin" className="text-aa-vert  hover:underline">
              Connectez-vous
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
