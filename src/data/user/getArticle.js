import Api from "@/api/Api"
import Urls from "@/api/Urls"

const getArticle = async (token, ID) => {
    return Api.post(Urls.GET_ARTICLE, {token:token, ID_Article:ID}).then(res => {
        console.log(res.data.detail);
        let tempAuthors = []
        res.data.detail.Auteurs.forEach((author) => {
            tempAuthors.push(author)
        })
        return {
            ID:res.data.detail.ID_Article,
            titre: res.data.detail.Titre,
            authors: ["Author name", "Author name"],
            resume: res.data.detail.Resume,
            date: res.data.detail.Date_Publication,
            authors: tempAuthors,
            mots_cles:res.data.detail.Mots_Cles,
            references:res.data.detail.References,
            texte:res.data.detail.Texte,
        }
    })
}

export default getArticle