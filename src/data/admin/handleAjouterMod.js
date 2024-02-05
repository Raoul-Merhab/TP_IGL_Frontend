import Api from "@/api/Api"
import Urls from "@/api/Urls"

const handleAjouterMod = (token, moderateur) => {
    const body = {
        "token": token,
        "nom": moderateur.Nom,
        "email": moderateur.Email,
        "password": moderateur.Password
    }
    return Api.post(Urls.AJOUTER_MOD, body)
}

export default handleAjouterMod