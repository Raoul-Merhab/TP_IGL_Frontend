import Api from "@/api/Api"
import Urls from "@/api/Urls"

const handleAjouterFavoris = (token, ID) => {
    const body = {
        token: token,
        ID_Article: ID
    }
    console.log(body);
    Api.post(Urls.ADD_FAVORI, body).then(res => {
        console.log(res)
        return res
    }).catch(err => {
        console.log(err)
        return err
    })
}

export default handleAjouterFavoris