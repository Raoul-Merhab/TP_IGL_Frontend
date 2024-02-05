import Api from "@/api/Api"
import Urls from "@/api/Urls"
import saveCookies from "../cookies/saveCookies"

const handleSignIn = async (email, password) => {
    const data = {
        "email": email,
        "password": password
      }
    return await Api.post(Urls.SIGN_IN,data).then((response) => {
        const result = response.data.detail
        saveCookies(result)
        return {
            status:true,
            detail:result
        }
    }).catch((error) => {
        console.log(error?.response?.data)
        return {
            status:false,
            detail:error?.response?.data?.detail || "Erreur d'acces au serveur"
        }
    })
}

export default handleSignIn