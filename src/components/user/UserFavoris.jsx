import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import OneArticleView from "@/components/user/OneArticleView";
import { useRouter } from "next/router";
import getArticlesFavoris from "@/data/user/getArticlesFavoris";
import getCookies from "@/data/cookies/getCookies";

const UserFavoris = ({ cookie }) => {
	const router = useRouter();
    const [articles, setArticles] = useState([]);
    const goHome = () =>{
        router.push("/")
    }
    const getData = async () =>{
        await getArticlesFavoris(getCookies().token).then((res=>{
            setArticles(res)
        }))
    }
    useEffect(()=>{
        getData();
    },[])
	return (
		<>
			<div className="bg-[#FEFEFE] h-screen w-full">
				<Navbar current={"Favoris"} role={1} user={cookie.nom} functions={[goHome,()=>{}]} disableSettings={false} />
				<div className=" w-full px-8 sm:px-16 lg:px-32 py-10 bg-aa-gris text-black">
					<div>
						<h2 className="text-2xl sm:text-3xl lg:text-4xl max-w-[290px] font-bold text-aa-vert">
							Consulter Mes Favoris
						</h2>
						<p>Lorem ipsum dolor sit amet consectetur adip</p>
					</div>
				</div>
                <div className="w-[90%] ml-[10%] md:ml-[20%] md:w-[60%] text-black flex flex-col items-center justify-center py-10 gap-3">
                    {articles.map((article, index) => (
                        <OneArticleView key={index} article={article} articles={articles} setArticles={setArticles} />
                        ))}
                </div>
            </div>
		</>
	);
};


export default UserFavoris;