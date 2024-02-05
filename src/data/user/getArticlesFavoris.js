import Api from "@/api/Api"
import Urls from "@/api/Urls"

const getArticlesFavoris = async (token) => {
    const body = {
		token:token
	}
	return await Api.post(Urls.GET_FAVORIS,body).then(res=>{
		let temp = []
		res.data.detail.forEach((item)=>{
			temp.push({
				"ID":item.ID_Article,
				"titre":item.Titre,
				"authors":item.Auteurs,
				"resume":item.Resume,
				"date":item.Date_Publication	
			})
		})
		return temp
	})
}

export default getArticlesFavoris