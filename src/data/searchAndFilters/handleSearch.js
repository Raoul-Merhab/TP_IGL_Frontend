import Api from "@/api/Api";
import Urls from "@/api/Urls";

const handleSearch = async (token, query) => {
    const body = {
		query: query,
		token: token
	}
	return Api.post(Urls.SEARCH,body).then(res=>{
		let temp = []
		res.data.detail.forEach(element => {
			let tempAuthors = []
			element["Auteurs"].forEach(author => {
				tempAuthors.push(author[0])
			})
			temp.push({
				ID:element["ID"],
				titre: element["Titre"],
				authors: tempAuthors,
				resume: element["Resume"],
				date: element["Date_pub"],
			})
		})
		return temp
	})
}

export default handleSearch