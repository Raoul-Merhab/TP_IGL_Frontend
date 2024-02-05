import Api from "@/api/Api"
import Urls from "@/api/Urls"

const handleSupprimerArticleFavori = async (token, ID) => {
    const body = {
        token:token,
        ID_Article:ID
    }
    Api.post(Urls.DELETE_FAVORI,body).then((res)=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    })
}

export default handleSupprimerArticleFavori