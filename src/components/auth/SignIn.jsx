import Image from "next/image";
import logo from "assets/Logo.png";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from 'next/router'
import handleSignIn from "@/data/auth/handleSignIn";
import { Oval } from "react-loader-spinner";

const SignIn = () => {
	const [loading, setLoading] = useState(false);
	const router = useRouter()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = async (data) => {
		console.log("ok");
		setLoading(true);
		await handleSignIn(data.email, data.password).then((res)=>{
			console.log(res);
			if ( res.status ){
				router.replace('/')
			}
			setError(res);
			setLoading(false);
		})
	};
	const [error, setError] = useState({
		status: false,
	});

	return (
		<div className="w-screen h-screen flex justify-center items-center bg-aa-vert">
			<div className="relative w-full h-full md:w-[95%] md:h-[90%] flex flex-col md:flex-row items-center bg-aa-vert justify-start md:justify-center pt-10 md:pt-0">
				<div className="w-fit h-fit md:w-[40%] md:h-[70%] rounded-xl md:rounded-3xl md:z-10 flex flex-col justify-around items-center bg-aa-white p-5 md:p-0 pb-16 -mb-10">
					<div className="md:h-[50%] flex flex-col justify-center items-center">
						<div className=" w-fit h-32 md:h-[70%]">
							<Image
								src={logo}
								className="w-full h-full"
							/>
						</div>
						<p className="font-semibold text-3xl items-center">
							Article Atlas
						</p>
					</div>
					<p className="text-aa-marron w-[80%] text-center font-medium text-base md:text-lg hidden md:block items-center">
						Explorez la science en un clic. Articles pointus,
						découvertes passionnantes. Plongez dans le savoir dès
						maintenant!{""}
					</p>
				</div>
				
				<div className=" w-[90%] h-fit md:w-[50%] md:h-full bg-aa-marron rounded-xl z-10 md:z-0 md:rounded-3xl md:px-[7%] md:-ml-[5%] flex flex-col gap-4 md:gap-10 md:pt-10 p-5 md:p-0">
					<div className="hidden lg:block absolute bg-aa-marron top-[30px] h-[40px] w-[120px] right-0 translate-x-[-24px] rounded-full"></div>
					<div className="hidden lg:block absolute bg-aa-vert top-[70px] h-[40px] w-[120px] right-0 translate-x-[-6px] rounded-full"></div>
					<div className="hidden lg:block absolute bg-aa-marron top-[110px] h-[40px] w-[120px] right-0 translate-x-[-50px] rounded-full"></div>
					<div className="hidden lg:block absolute bg-aa-marron top-[110px] h-[40px] w-[40px] right-0 translate-x-[0px] rounded-full"></div>

					<div className="hidden lg:block absolute bg-aa-marron bottom-[130px] h-[40px] w-[120px] right-0 translate-x-[-45px] rounded-full"></div>
					<div className="hidden lg:block absolute bg-aa-vert bottom-[90px] h-[40px] w-[120px] right-0 translate-x-[-6px] rounded-full"></div>
					<div className="hidden lg:block absolute bg-aa-marron bottom-[50px] h-[40px] w-[120px] right-0 translate-x-[-24px] rounded-full"></div>

					<div className=" w-full flex flex-col justify-evenly items-start gap-3">
						<h2 className="text-aa-vert font-bold text-2xl md:text-3xl">Connectez-vous</h2>
						<p  className="text-[#252620] font-medium text-base md:text-lg">Acceder a votre compte</p>
					</div>

					<form className=" flex flex-col w-full gap-4 md:gap-10" onSubmit={handleSubmit(onSubmit)}>
						<div className="relative flex flex-col justify-between items-start gap-2">
							<label className="text-black text-lg font-medium">Email :</label>
							<input
								type="email"
								className="w-full h-10 rounded-xl px-2 text-lg"
								{...register("email", {
									required: true,
								})}
							/>
							{errors.exampleRequired && (
								<span className="absolute text-aa-error right-2 -bottom-6">
									Ce champs est obligatoire
								</span>
							)}
						</div>
						<div className="relative flex flex-col justify-between items-start gap-2">
							<label className="text-black text-lg font-medium">Mot de passe :</label>
							<input
								type="password"
								className="w-full h-10 rounded-xl px-2 text-lg"
								{...register("password", {
									required: true,
								})}
							/>
							{errors.exampleRequired && (
								<span className="absolute text-aa-error right-2 -bottom-6">
									Ce champs est obligatoire
								</span>
							)}
						</div>
						{
							!error.status && (
								<span className="text-aa-error text-center">
									{error.detail}
								</span>
							)
						}
						<div className={`flex justify-center items-center bg-aa-vert text-white w-full cursor-pointer py-3 md:py-4 rounded-md  ${!loading&&"hover:bg-aa-vert/[0.8] transition-colors duration-[0.2s]"}`}>
							{
								loading?
								<div className=" w-full bg-aa-vert h-8 justify-center flex items-center">
									<Oval
										visible={true}
										height="40"
										strokeWidth={6}
										width="40"
										color="#FFF"
										secondaryColor="#113E21"
										ariaLabel="oval-loading"
										wrapperStyle={{}}
										wrapperClass=""
									/>
								</div>
								:
								<button
									className="w-full bg-transparent uppercase h-8"
									type="submit"
								>
									Se Connecter
								</button>
							}
						</div>
					</form>
					<div className=" text-[#252620] font-medium flex justify-center items-center text-base text-center md:text-lg">
						<span>
							Vous n'avez pas de compte ?&nbsp;
							<span>
								<a href="/signup" className="text-aa-vert hover:underline">Inscrivez-vous</a>
							</span>
						</span>
						
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
