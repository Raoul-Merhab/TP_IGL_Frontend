import Api from "@/api/Api"
import Urls from "@/api/Urls"

const getMods = async (token) => {
    const body = {
        "token":token
    }
    return await Api.post(Urls.GET_MODS,body).then(response => {
        return response.data?.detail || []
    }).then(data => {
        let temp = []
        data.forEach(element => {
            temp.push({
                "ID":element.ID_Moderateur,
                "Nom":element.Nom,
                "Email":element.Email
            })
        });
        return temp
    })
}

export default getMods