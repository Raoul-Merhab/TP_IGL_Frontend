import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Oval } from "react-loader-spinner";
import handleUpload from "@/data/admin/handleUpload";
import getArticles from "@/data/admin/getArticles";
import getCookies from "@/data/cookies/getCookies";

const AdminUpload = ({cookie}) => {
	const [link, setLink] = useState("");
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    const onClickUpload = async () => {
        setLoading(true)
        await handleUpload(getCookies().token,link).then((result) => {
            getData()
            setLoading(false)
            setResponse(result)
        })
    }
    const getData = async () =>{
        await getArticles(cookie.token).then((result) => {
            setArticles(result)
        })
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className=' h-[66%] w-[80%] self-center rounded-3xl my-[2%] bg-aa-white overflow-y-scroll hide-scroll-bar gap-4 md:gap-0 flex flex-col md:flex-row justify-between'>
            <div className=" w-full md:w-[40%] h-full bg-aa-gris rounded-3xl flex flex-col justify-around">
                <FontAwesomeIcon
                    icon={faArrowUpFromBracket}
                    color="#113E21"
                    size="6x"
                    className=" block md:hidden my-8"
                />
                <FontAwesomeIcon
                    icon={faArrowUpFromBracket}
                    color="#113E21"
                    size="10x"
                    className=" hidden md:block"
                />
                <div className=" w-[80%] self-center flex flex-col py-4 gap-4">
                    <div className=" w-full self-center flex flex-col gap-8">
                        <div className=" flex flex-col gap-4">
                            <p className=" text-xl font-bold">Lien de l'article PDF :</p>
                            <input type="text" value={link} className=" w-full text-xl px-2 py-2" onChange={(event)=>{setLink(event.target.value);setResponse(null)}} />
                        </div>
                        {
                            loading?
                            <div className=" w-full bg-aa-marron h-10 rounded-lg flex items-center justify-center">
                                <Oval
                                    visible={true}
                                    strokeWidth={6}
                                    height="30"
                                    width="30"
                                    color="#FFF"
                                    secondaryColor="#B38B59"
                                    ariaLabel="oval-loading"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                />
                            </div>
                            :
                            <button type="button" className=" bg-aa-marron w-full text-aa-white py-2 rounded-lg" onClick={onClickUpload}>Upload</button>
                        }
                    </div>
                    {
                        response &&
                        <div className=" w-full text-center text-aa-vert font-bold text-xl">
                            {response}
                        </div>
                    }
                </div>
            </div>
            <div className=" w-full md:w-[50%] md:h-full bg-aa-marron rounded-3xl mb-5 md:mb-0">
                {
                    articles.length === 0?
                    <div className=" w-full h-full flex justify-center items-center">
                        <p className=" text-aa-white text-2xl">Aucun article disponible</p>
                    </div>
                    :
                    <div className=" w-[80%] ml-[10%] flex flex-col gap-4 h-full py-4">
                        <p className=" text-aa-white font-semibold text-xl">Articles uploadés :</p>
                        <div className=" flex flex-col gap-4 w-full items-center overflow-y-scroll pr-2">
                            {
                                articles.map((article, index) => {
                                    return (
                                        <div key={index} className=" rounded-xl w-full h-10 flex bg-aa-white flex-row justify-between items-center px-4">
                                            <p className=" text-aa-vert text-xl truncate">{article}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default AdminUpload