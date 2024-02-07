import { useState } from "react";
import Search from "@/components/mod/Search";
import SearchResults from "@/components/mod/SearchResults";
import ModPage from "@/components/mod/ModPage";
import handleSearch from "@/data/searchAndFilters/handleSearch";
import getCookies from "@/data/cookies/getCookies";
import getArticle from "@/data/user/getArticle";

const ModMain = ({cookie}) => {
    const [step, setStep] = useState("Search");
    const [value, setValue] = useState("")
    const [results, setResults] = useState([{}])
    const [article, setArticle] = useState({})
    const searchToResult = async () =>{
        await handleSearch(getCookies().token, value).then((res) => {
            setResults(res)
            setStep("Results")
        })
    }
    const searchToArticle = async (ID) =>{
        await getArticle(getCookies().token, ID).then((res) => {
            setArticle(res)
            setStep("Article")
        })
    }
    const backToResults = () =>{
        setStep("Results")
    }
    return (
        <>
        {
            step === "Search" &&
            <Search cookie={cookie} value={value} setValue={setValue} toSearch={searchToResult} />
        }
        {
            step === "Results" &&
            <SearchResults cookie={cookie} value={value} setValue={setValue} toSearch={searchToResult} results={results} setResults={setResults} onClickConsulter={searchToArticle} />
        }
        {
            step === "Article" &&
            <ModPage cookie={cookie} value={value} setValue={setValue} toSearch={searchToResult} results={results} setResults={setResults} onClickSearch={searchToResult} article={article} backToResults={backToResults} />
        }
        </>
    )
}

export default ModMain