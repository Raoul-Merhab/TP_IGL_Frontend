import { useState } from "react";
import Search from "@/components/Search";
import SearchResults from "@/components/SearchResults";
import handleSearch from "@/data/searchAndFilters/handleSearch";
import getCookies from "@/data/cookies/getCookies";

const Main = ({cookie}) => {
    const [step, setStep] = useState("Search");
    const [value, setValue] = useState("")
    const [results, setResults] = useState([{}])
    const searchToResult = async () =>{
        await handleSearch(getCookies().token, value).then((res) => {
            setResults(res)
            setStep("Results")
        })
    }
    const toArticle = () =>{

    }
    const toFavoris = () =>{

    }
    return (
        <>
        {
            step === "Search" &&
            <Search cookie={cookie} value={value} setValue={setValue} toSearch={searchToResult} />
        }
        {
            step === "Results" &&
            <SearchResults cookie={cookie} value={value} setValue={setValue} toSearch={searchToResult} results={results} setResults={setResults} />
        }
        </>
    )
}

export default Main