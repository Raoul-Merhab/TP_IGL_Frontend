import Api from "@/api/Api"
import Urls from "@/api/Urls"

const getArticles = async (token) => {
    const body = {
        "token": token
    }
    return await Api.post(Urls.GET_ARTICLES, body).then((response) => {
        return response.data.detail
    })
}

export default getArticles