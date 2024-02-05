import Cookies from "js-cookie"

const saveCookies = (cookies) => {
    let tempResult = JSON.stringify(cookies)
    Cookies.set('articleAtlas', tempResult, { expires: 10 })
}

export default saveCookies