import Api from "@/api/Api"
import Urls from "@/api/Urls"

const handleSupprimerMod = (token, idMod) => {
    const body = {
        "token": token,
        "ID_Moderateur": idMod
      }
    Api.post(Urls.SUPPRIMER_MOD, body)
}

export default handleSupprimerMod