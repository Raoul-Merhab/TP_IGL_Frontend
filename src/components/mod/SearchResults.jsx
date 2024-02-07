import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import OneArticleView from "@/components/mod/OneArticleView";
import { useRouter } from "next/router";
import getCookies from "@/data/cookies/getCookies";

const SearchResults = ({cookie, value, setValue, toSearch, results, setResults, onClickConsulter}) => {
	const router = useRouter();
	return (
		<div className="w-full h-screen">
			<Navbar
                current={"Accueil"}
                disableSettings={false}
                role={2}
                functions={[() => router.reload("/")]}
                user={getCookies()?.nom}
            />
            <div className="bg-[#FEFEFE]">
				<div className=" w-full px-8 sm:px-16 lg:px-32 py-10 bg-aa-gris text-black">
					<div>
						<h2 className="text-2xl sm:text-3xl lg:text-4xl max-w-[290px] font-bold text-aa-vert">
							Bienvenu Sur Article Atlas
						</h2>
						<p>Le moteur de recherche scientifique basé sur l'IA</p>
					</div>
				</div>
			</div>
			<div className="w-full bg-aa-vert flex justify-center items-center py-4 ">
                <SearchBar value={value} setValue={setValue} clickSearch={toSearch} />
			</div>
			<div className="flex flex-col-reverse sm:flex-row bg-aa-white px-3 gap-5 py-2">
				<div className="w-full  sm:w-[60%] text-black flex flex-col gap-3">
					{" "}
					{/**Map sur les articles*/}
					{results.map((article, index) => (
                    <OneArticleView key={index} article={article} articles={results} setArticles={setResults} onClickConsulter={onClickConsulter} />
                ))}
				</div>
				{/* <Filtre /> *Search criteres */}
			</div>
		</div>
	);
};

export default SearchResults;