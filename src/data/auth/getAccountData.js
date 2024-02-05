import Api from "@/api/Api"
import Urls from "@/api/Urls"

const getAccountData = async (token) => {
    const body = {
        "token": token
    }
    return await Api.post(Urls.MY_ACCOUNT, body).then(response => {
        return response.data.detail
    })
    return {
        "nom": "Merhab Abderraouf",
        "email": "la_merhab@esi.dz"
    }
}

export default getAccountData