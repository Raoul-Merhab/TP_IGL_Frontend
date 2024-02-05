import Cookies from "js-cookie"
const getCookies = () =>{
    let tempResult = Cookies.get("articleAtlas")
    if ( tempResult ){
        return JSON.parse(tempResult)
    }else{
        return null
    }
}
export default getCookies