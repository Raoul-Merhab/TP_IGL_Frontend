import {useEffect, useState} from 'react'
import Navbar from '@/components/Navbar';
import getAccountData from '@/data/auth/getAccountData';
import getCookies from '@/data/cookies/getCookies';
import handleEditData from '@/data/auth/handleEditData';
import { useRouter } from 'next/router';

const MyAccount = ({cookie}) => {
    const router = useRouter();
    const [user, setUser] = useState({
        'nom':"",
        'email':"",
        'password':""
    })
	const onSubmit = () =>{
        handleEditData(user)
    };
    const getData = async () => {
        let tempCookies = getCookies();
        await getAccountData(tempCookies.token).then((res) => {
            setUser({...res, 'password':''})
        })
    }
    const onClickAccueil = () =>{
        router.push("/")
    }
    const onClickFavoris = () =>{
        router.push("/favoris")
    }
    useEffect(()=>{
        console.log(getCookies());
        getData();
    },[])
    return (
        <div className=' flex flex-col h-screen bg-[#113E21]'>
			<Navbar role={getCookies()?.role === "Utilisateur" ? 1 : getCookies()?.role === "Moderateur" ? 2:3} user={cookie.nom} disableSettings={true} current={"Account"} functions={[onClickAccueil, onClickFavoris]} />
			<div className=" h-[20%] w-full px-8 sm:px-16 lg:px-32 py-10 bg-aa-gris text-black" onClick={onSubmit}>
				<div>
					<h2 className="text-2xl sm:text-3xl lg:text-4xl max-w-[290px] font-bold text-aa-vert">
						Parametres De Votre Compte
					</h2>
				</div>
			</div>
            <div className=' h-[66%] w-[60%] self-center rounded-3xl my-[2%] bg-aa-white overflow-y-scroll hide-scroll-bar'>
                <div className="w-full flex flex-col justify-between items-center py-4">
                    <p className="text-[#252620] text-center font-semibold text-2xl">
                        Modifiez vos informations
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center w-[80%] ml-[10%]" >
                    <div className="w-full flex flex-col  gap-4 md:gap-6">
                        <div className="flex flex-col justify-between items-start gap-2">
                            <p className="text-[#252620] text-[15px] sm:text-[18px]  font-medium">Nom :</p>
                            <input
                                type="text"
                                className="w-full py-3 bg-[#F0F0F0] md:py-4 rounded-xl px-4 focus:outline-none text-black text-[17px]"
                                value={user?.nom}
                                onChange={(event)=>{setUser({...user, "nom":event.target.value})}}
                                />
                        </div>
                        <div className="flex flex-col justify-between items-start gap-2">
                            <label className="text-[#252620] text-[15px] sm:text-[18px]  font-medium">Email :</label>
                            <input
                                type="email"
                                className="w-full py-3  bg-[#F0F0F0] md:py-4 rounded-xl px-4 focus:outline-none text-black text-[17px]"
                                value={user?.email}
                                onChange={(event)=>{setUser({...user, "email":event.target.value})}}
                            />
                        </div>
                        <div className="flex flex-col justify-between items-start gap-2">
                            <label className="text-[#252620] text-[15px] sm:text-[18px] font-medium">
                                Mot de passe :
                            </label>
                            <input
                                type="password"
                                className="w-full bg-[#F0F0F0]  py-3 md:py-4 rounded-xl px-2 focus:outline-none text-black text-[17px]"
                                value={user?.password}
                                onChange={(event)=>{setUser({...user, "password":event.target.value})}}
                            />
                        </div>
                        <div className="flex justify-center items-center bg-aa-marron  text-white w-full cursor-pointer py-3 md:py-4 rounded-md my-10 hover:bg-aa-vert/[0.8] transition-colors duration-[0.2s]">
                            {" "}
                            <button className="w-full bg-transparent uppercase" onClick={onSubmit}>
                                Modifier{" "}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyAccount