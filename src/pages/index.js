import { useRouter } from 'next/router'
import { useEffect, useState } from "react"
import getAndRedirect from '@/data/getAndRedirect'
import Loader from '@/components/Loader'
import AdminPage from '@/components/admin/AdminPage'
import ModPage from '@/components/mod/ModPage'
import Main from '@/components/Main'

export default function Home() {
	const [loading, setLoading] = useState(true)
	const [cookie, setCookie] = useState({})
	const router = useRouter()
	useEffect(() => {
		const delayTimeout = setTimeout(()=>{getAndRedirect(setCookie, router)}, 0);
	
		return () => clearTimeout(delayTimeout);
	},[])
	useEffect(() => {
		const delayTimeout = setTimeout(()=>{setLoading(false)}, 200);
	
		return () => clearTimeout(delayTimeout);
	},[])
	
	return (
		<>
			<div className={`  ${loading?"":"hidden"} absolute top-0 bg-aa-vert w-screen h-screen flex justify-center items-center z-50`}>
				<Loader />
			</div>
			{/* {
				cookie?.role === "Administrateur" &&
				<AdminPage cookie={cookie} />
			}
			{
				cookie?.role === "Moderateur" &&
				<ModPage cookie={cookie} />
			} */}
			<Main cookie={cookie} />
		</>
  	)
}