import { useRouter } from 'next/router'
import { useEffect, useState } from "react"
import getAndRedirect from '@/data/getAndRedirect'
import Loader from '@/components/Loader'
import UserFavoris from '@/components/user/UserFavoris'
import Image from 'next/image'
import logo from "assets/Logo.png";


const account = () => {
	const [loading, setLoading] = useState(true)
	const [cookie, setCookie] = useState({})
	const router = useRouter()
	useEffect(() => {
		const delayTimeout = setTimeout(()=>{
            getAndRedirect(setCookie, router)
        }, 0);
	
		return () => clearTimeout(delayTimeout);
	},[])
	useEffect(() => {
		const delayTimeout = setTimeout(()=>{setLoading(false)}, 200);
	
		return () => clearTimeout(delayTimeout);
	},[])
	const goHome = () => {
		router.replace('/')
	}
    

	return (
		<>
			<div className={` ${loading?"":"hidden"} absolute top-0 bg-aa-vert w-full h-screen flex justify-center items-center z-50`}>
				<Loader />
			</div>
			{
				cookie.role === "Utilisateur"?
				<UserFavoris cookie={cookie} />
				:
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
									Vous n'avez pas acces a cette page
								</p>
							</div>
							<div className="flex justify-center items-center bg-aa-vert text-white w-full cursor-pointer py-3 md:py-4 rounded-md my-14 hover:bg-aa-vert/[0.8] transition-colors duration-[0.2s]">
								<button className="w-full bg-transparent uppercase " onClick={goHome} >
									Revenir A L'Acceuil
								</button>
							</div>
						</div>


					</div>
				</div>
			}
		</>

  	)
}


export default account