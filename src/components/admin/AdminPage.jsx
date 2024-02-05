import { useState } from "react";
import Navbar from "@/components/Navbar";
import AdminUpload from "@/components/admin/AdminUpload";
import AdminModerateurs from "@/components/admin/AdminModerateurs";

const AdminPage = ({ cookie }) => {
	const [current, setCurrent] = useState("Accueil");
	const onClickAccueil = () =>{
		setCurrent("Accueil")
	}
	const onClickUpload = () =>{
		setCurrent("Upload")
	}
	const onClickMod = () =>{
		setCurrent("Moderateurs")
	}
	return (
		<div className=" flex flex-col h-screen bg-aa-white">
			<Navbar role={3} user={"Merhab Abderraouf"} current={current} functions={[onClickAccueil,onClickUpload,onClickMod]} />
			<div className=" h-[20%] w-full px-8 sm:px-16 lg:px-32 py-10 bg-aa-gris text-black">
				<div>
					<h2 className="text-2xl sm:text-3xl lg:text-4xl max-w-[290px] font-bold text-aa-vert">
						Espace administrateur
					</h2>
					<p>{current === "Accueil" && "Lorem ipsum dolor sit amet consectetur adip"}
					{current === "Upload" && "Ajouter des nouveaux articles PDF pour les rendre disponibles sur le site."}
					{current === "Moderateurs" && "Ajouter, modifier ou supprimer des moderateurs"}</p>
				</div>
			</div>
            {
				current === 'Accueil' &&
				<div className=' h-[66%] w-[80%] self-center rounded-3xl my-[2%] bg-aa-white overflow-y-scroll hide-scroll-bar flex flex-col md:flex-row justify-center gap-8 md:gap-0 md:justify-between items-center'>
					<button className=" md:w-1/3 bg-aa-marron py-6 px-4 rounded-2xl text-center flex justify-center items-center text-aa-white text-xl " type="button" onClick={onClickUpload}>Upload des articles</button>
					<button className=" md:w-1/3 bg-aa-marron py-6 px-4 rounded-2xl text-center flex justify-center items-center text-aa-white text-xl " type="button" onClick={onClickMod}>Ajouter, modifier ou supprimer des moderateurs</button>
				</div>
			}
			{
				current === 'Upload' &&
				<AdminUpload cookie={cookie} />
			}
			{
				current === 'Moderateurs' &&
				<AdminModerateurs cookie={cookie} />
			}
		</div>
	);
};

export default AdminPage;