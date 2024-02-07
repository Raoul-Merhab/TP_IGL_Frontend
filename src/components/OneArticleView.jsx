import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faFolderClosed } from "@fortawesome/free-solid-svg-icons";
import handleSupprimerArticleFavori from "@/data/user/handleSupprimerArticleFavori";
import handleTelechargerArticleFavori from "@/data/user/handleTelechargerArticleFavori";
import getCookies from "@/data/cookies/getCookies";
import { useState } from "react";

const OneArticleView = ({article, articles, setArticles, onClickConsulter}) => {
    const [pdfFiole, setPdfFiole] = useState(null)
	const onClickSupprimer = () =>{
		handleSupprimerArticleFavori(getCookies().token, article.ID)
		setArticles(prevArticles => prevArticles.filter(a => a.ID !== article.ID));
	}
	const onClickTelecharger = async () =>{
		await handleTelechargerArticleFavori(getCookies().token, article.ID).then(res=>{
			console.log(res);
			setPdfFiole(res)
		})
	}
	return (
		<div className=" bg-aa-gris px-7 py-4 w-full">
			<div className="flex flex-col py-3">
				<div className="flex justify-between items-center">
					<h2 className="font-semibold text-lg md:text-2xl">
						{article.titre}
					</h2>
					<p className="font-medium lg:block hidden">
						{article.date}
					</p>
				</div>
				<div className="flex flex-wrap">
					{article.authors.map((author, index) => (
						<p key={index} className="mr-2">
							{author},
						</p>
					))}
				</div>
				<p className="font-medium block lg:hidden">{article.date}</p>
			</div>

			<div className="py-4">{article.resume}</div>
			{pdfFiole && <iframe title="PDF Viewer" src={pdfFiole} width="100%" height="500px" />}
			<div className="flex flex-row sm:flex-col md:flex-col lg:flex-row justify-between items-center pt-3">
				<div className="flex  justify-between sm:items-center items-start sm:flex-row flex-col gap-3 sm:gap-5">
					<div className="flex justify-between items-center gap-3 cursor-pointer mb-2" onClick={onClickSupprimer}>
                        <FontAwesomeIcon
							icon={faHeart}
							color={"red"}
							size="1x"
						/>
                        <p>Supprimer</p>
					</div>
					<div className="flex items-center gap-3 cursor-pointer mb-2" onClick={onClickTelecharger}>
                        <FontAwesomeIcon
							icon={faFolderClosed}
							color={"#000"}
							size="1x"
						/>
						<p>Télécharger PDF</p>
					</div>
				</div>

				<div className="uppercase bg-[#B38B59] font-semibold text-white px-8 py-2 cursor-pointer hover:bg-[#B38B59]/[0.8] transition-colors duration-[0.2s]" onClick={()=>onClickConsulter(article.ID)}>
					Consulter
				</div>
			</div>
		</div>
	);
}

export default OneArticleView