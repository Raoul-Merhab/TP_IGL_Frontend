import { useRouter } from 'next/router'
import { useEffect, useState } from "react"
import getAndRedirect from '@/data/getAndRedirect'
import Loader from '@/components/Loader'
import MyAccount from '@/components/auth/MyAccount'

const account = () => {
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
			<div className={` ${loading?"":"hidden"} absolute top-0 bg-aa-vert w-screen h-screen flex justify-center items-center z-50`}>
				<Loader />
			</div>
			<MyAccount cookie={cookie} />
		</>

  	)
}


export default account