import SearchBar from "@/components/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faFolderClosed, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Navbar";
import { useRouter } from "next/router";
import getCookies from "@/data/cookies/getCookies";

const ModPage = ({ cookie, article, value, setValue, onClickSearch, backToResults }) => {
	const router = useRouter();
	
	const mc =
		"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum";
	const text =
		"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ";
	const references = [
		"Resmue lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ips...",
		"Resmue lorem  ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ips...",
	];
	const institutions = ["lorem loren", "lorem loren"];
	function diviserEnDeux(chaine) {
		var longueur = chaine.length;
		var moitie = Math.floor(longueur / 2);

		var partie1 = chaine.substring(0, moitie);
		var partie2 = chaine.substring(moitie);

		return [partie1, partie2];
	}
	var result = diviserEnDeux(text);
    const onClickAddFavoris = () =>{
        console.log(article);
    }
    const onClickDownload = () =>{

    }
	return (
		<div className="bg-[#FEFEFE] h-screen w-full">
			<Navbar
                current={"Accueil"}
                disableSettings={false}
                role={2}
                functions={[() => router.reload("/"),()=>{router.push("/favoris")}]}
                user={getCookies()?.nom}
            />
            <div className="bg-[#FEFEFE]">
				<div className=" w-full px-8 sm:px-16 lg:px-32 py-10 bg-aa-gris text-black">
					<div>
						<h2 className="text-2xl sm:text-3xl lg:text-4xl max-w-[290px] font-bold text-aa-vert">
							Bienvenu Sur Article Atlas
						</h2>
						<p>Lorem ipsum dolor sit amet consectetur adip</p>
					</div>
				</div>
			</div>
			<div className="w-full bg-aa-vert flex justify-center items-center py-4 ">
                <SearchBar value={value} setValue={setValue} clickSearch={onClickSearch} />
			</div>
			<div className=" relative ml-[10%] w-[80%] self-center text-black flex flex-col items-center justify-center py-10 gap-3">
				<div className=" absolute top-4 left-0 cursor-pointer" onClick={backToResults}>
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        color={"#113E21"}
                        size="2x"
                    />
                </div>
                <div className="w-full bg-aa-white flex justify-center  text-black py-5">
					<div className="bg-aa-gris  py-10  w-[90%] sm:w-[80%]  rounded-lg">
						<div className="px-4 flex justify-between  gap-3 sm:gap-5  items-center lg:flex-row flex-col">
							<p className="text-[18px] sm:text-[20px]  font-semibold text-aa-vert">
								{article.titre}
							</p>

							<div className="flex justify-between gap-3 sm:gap-5 items-center   lg:flex-row  flex-col ">
								<p>{article.date}</p>
								<div className="flex gap-3 cursor-pointer items-center" onClick={onClickAddFavoris}>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        color={"red"}
                                        size="1x"
                                    />
                                    <p>Sauvegarder</p>
								</div>
								<div className="flex gap-3 cursor-pointer items-center" onClick={onClickDownload}>
                                    <FontAwesomeIcon
                                        icon={faFolderClosed}
                                        color={"#000"}
                                        size="1x"
                                    />
                                    <p>Télécharger PDF </p>
								</div>
							</div>
						</div>

						<div className=" px-4 py-4">
							<p>
								{" "}
								{article.authors.map((e, index) => (
									<span key={index} className=" font-normal">
										{e},
									</span>
								))}
							</p>
							<p>
								{institutions.map((e, index) => (
									<span key={index} className=" font-normal">
										{e},
									</span>
								))}
							</p>
						</div>
						<div className="flex flex-col sm:flex-row gap-0 sm:gap-9 px-8">
							<div className="flex flex-col gap-11">
								<div>
									<p className="">
										<span className="font-bold text-[15px] sm:text-[18px]">
											Résumé :{" "}
										</span>{" "}
										{article.resume}
									</p>
								</div>
								<div>
									<p className="">
										<span className="font-bold text-[15px] sm:text-[18px]">
											Mots clés :{" "}
										</span>{" "}
										{mc}
									</p>
								</div>
								<div>{result[0]}</div>
							</div>
							<div className="flex flex-col gap-11">
								<div>{result[1]}</div>
								<div>
									<span className="font-bold text-[15px] sm:text-[18px]">
										References :{" "}
									</span>{" "}
									{references.map((e, index) => (
										<div
											key={index}
											className=" font-normal"
										>
											({index + 1}) {e}
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModPage;
