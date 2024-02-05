import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen, faTrash, faXmark } from "@fortawesome/free-solid-svg-icons"
import getMods from "@/data/admin/getMods"
import handleAjouterMod from "@/data/admin/handleAjouterMod"
import handleModifierMod from "@/data/admin/handleModifierMod"
import handleSupprimerMod from "@/data/admin/handleSupprimerMod"

const AdminModerateurs = ({cookie}) => {
    const [moderateurs, setModerateurs] = useState([])
    const [moderateur, setModerateur] = useState(null)
    const [step, setStep] = useState("Nothing")
    const modifierModerateur = ()=>{
        handleModifierMod(moderateur)
        let tempModerateurs = moderateurs.map(item => item.ID === moderateur.ID ? moderateur : item);
        setModerateurs(tempModerateurs)
        setStep("Nothing")
    }
    const ajouterModerateur = () => {
        setModerateurs(prevModerateurs => [moderateur, ...prevModerateurs]);
        handleAjouterMod(cookie.token, moderateur)
        setStep("Nothing")
    }
    const onClickSupprimerModerateur = (id) => {
        let tempModerateurs = moderateurs.filter(item => item.ID !== id);
        setModerateurs(tempModerateurs)
        handleSupprimerMod(cookie.token,id)
    }
    const onClickModifierModerateur = (id) => {
        let tempModerateur = moderateurs.find((mod) => mod.ID === id)
        setModerateur({...tempModerateur,"Password":""})
        setStep("Modifier")
    }
    const onClickAjouterModerateur = () => {
        setModerateur({
            "Nom":"",
            "Email":"",
            "Password":""
        })
        setStep("Ajouter")
    }
    useEffect(() => {
        const getData = async () => {
            await getMods(cookie.token).then((res) => {
                setModerateurs(res)
            })
        }
        getData();
    }, [])
    return (
        <div className=' h-[66%] w-[80%] self-center rounded-3xl my-[2%] bg-aa-white overflow-y-scroll hide-scroll-bar gap-4 md:gap-0 flex flex-col md:flex-row justify-between'>
            <div className=" w-full md:w-[40%] h-full bg-aa-gris rounded-3xl flex flex-col justify-around">
                {
                    step === "Nothing" && 
                    <p className=" w-full text-center text-aa-vert font-bold text-xl p-4">Rien à afficher pour l'instant</p>
                }
                {
                    step === "Modifier" &&
                    <div className=" w-full relative h-full flex flex-col gap-4 items-center">
                        <div className=" absolute top-4 right-4">
                            <FontAwesomeIcon
                                icon={faXmark}
                                color="#113E21"
                                size="2x"
                                className=" cursor-pointer"
                                onClick={()=>{setStep("Nothing")}}
                            />
                        </div>
                        <h1 className=" text-aa-vert text-xl mt-4 font-bold">Modifier Moderateur :</h1>
                        <p className=" w-[90%] ml-[5%] font-semibold text-lg">Nom du moderateur :</p>
                        <input type="text" className=" w-[90%] ml-[5%] h-10 rounded-2xl bg-aa-white text-xl px-4 " value={moderateur.Nom} onChange={(event)=>{setModerateur({...moderateur, "Nom":event.target.value})}} />
                        <p className=" w-[90%] ml-[5%] font-semibold text-lg">Email du moderateur :</p>
                        <input type="text" className=" w-[90%] ml-[5%] h-10 rounded-2xl bg-aa-white text-xl px-4 " value={moderateur.Email} onChange={(event)=>{setModerateur({...moderateur, "Email":event.target.value})}} />
                        <p className=" w-[90%] ml-[5%] font-semibold text-lg">Mot de passe du moderateur :</p>
                        <input type="password" className=" w-[90%] ml-[5%] h-10 rounded-2xl bg-aa-white text-xl px-4 " value={moderateur.Password} onChange={(event)=>{setModerateur({...moderateur, "Password":event.target.value})}} />
                        <button  className=" w-[70%] bg-aa-vert text-center mb-2 py-2 rounded-2xl text-aa-white font-bold text-base" onClick={modifierModerateur}>
                            Modifier Moderateur
                        </button>
                    </div>
                }
                {
                    step === "Ajouter" &&
                    <div className=" w-full relative h-full flex flex-col gap-4 items-center">
                        <div className=" absolute top-4 right-4">
                            <FontAwesomeIcon
                                icon={faXmark}
                                color="#113E21"
                                size="2x"
                                className=" cursor-pointer"
                                onClick={()=>{setStep("Nothing")}}
                            />
                        </div>
                        <h1 className=" text-aa-vert text-xl mt-4 font-bold">Ajouter Moderateur :</h1>
                        <p className=" w-[90%] ml-[5%] font-semibold text-lg">Nom du moderateur :</p>
                        <input type="text" className=" w-[90%] ml-[5%] h-10 rounded-2xl bg-aa-white text-xl px-4 " value={moderateur.Nom} onChange={(event)=>{setModerateur({...moderateur, "Nom":event.target.value})}} />
                        <p className=" w-[90%] ml-[5%] font-semibold text-lg">Email du moderateur :</p>
                        <input type="text" className=" w-[90%] ml-[5%] h-10 rounded-2xl bg-aa-white text-xl px-4 " value={moderateur.Email} onChange={(event)=>{setModerateur({...moderateur, "Email":event.target.value})}} />
                        <p className=" w-[90%] ml-[5%] font-semibold text-lg">Mot de passe du moderateur :</p>
                        <input type="password" className=" w-[90%] ml-[5%] h-10 rounded-2xl bg-aa-white text-xl px-4 " value={moderateur.Password} onChange={(event)=>{setModerateur({...moderateur, "Password":event.target.value})}} />
                        <button  className=" w-[70%] bg-aa-vert text-center mb-2 py-2 rounded-2xl text-aa-white font-bold text-base" onClick={ajouterModerateur}>
                            Ajouter Moderateur
                        </button>
                    </div>
                }
            </div>
            <div className=" w-full md:w-[50%] h-full bg-aa-marron rounded-3xl mb-5 md:mb-0 flex flex-col gap-4">
                <h1 className=" text-aa-white mt-2 text-xl ml-[5%]">Moderateurs de <span className=" italic">Article Atlas :</span></h1>
                <div className=" w-[90%] ml-[5%] flex flex-col gap-4 items-center overflow-y-scroll hide-scroll-bar pr-2">
                    {
                        moderateurs.map((mod, index) => {
                            return (
                                <div key={index} className=" rounded-xl w-full h-7 flex flex-row bg-aa-white justify-between items-center px-4">
                                    <p className=" text-aa-vert text-xl truncate">{mod.Nom}</p>
                                    <div className=" flex flex-row gap-4">
                                        <FontAwesomeIcon
                                            icon={faPen}
                                            color="#113E21"
                                            size="1x"
                                            className=" cursor-pointer"
                                            onClick={()=>{onClickModifierModerateur(mod.ID)}}
                                        />
                                        <FontAwesomeIcon
                                            icon={faTrash}
                                            color="#AA2020"
                                            size="1x"
                                            className=" cursor-pointer"
                                            onClick={()=>{onClickSupprimerModerateur(mod.ID)}}
                                        />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className=" w-[70%] ml-[15%] bg-aa-gris text-center mb-2 py-2 rounded-2xl text-aa-vert font-bold text-base">
                    <button type="button" onClick={onClickAjouterModerateur}>Ajouter Moderateur</button>
                </div>
            </div>
        </div>
    )
}

export default AdminModerateurs