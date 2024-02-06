import Api from "@/api/Api"
import Urls from "@/api/Urls"

const handleUpload = async (token, link) => {
    const body = {
        token: token,
        link: link
    }
    return await Api.post(Urls.UPLOAD_ARTICLE, body).then(response => {
        return response.data.detail
    }).catch(error => {
        console.log(error);
    })
}

export default handleUpload