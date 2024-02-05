import Api from "@/api/Api"
import Urls from "@/api/Urls"

const handleTelechargerArticleFavori = async (token, ID) => {
    const body = {
        token:token,
        ID_Article:ID
    }
    console.log(body);
    return Api.post(Urls.DOWNLOAD_FAVORI,body,{
        responseType:"arraybuffer"
    }).then((res)=>{
        let data = new Blob([res.data], { type: 'application/pdf' });
        console.log(data);
        let pdfFile = URL.createObjectURL(data)
        return pdfFile
        console.log(pdfFile);
    }).catch(err=>{
        console.log(err);
    })
}

export default handleTelechargerArticleFavori