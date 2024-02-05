import getCookies from "@/data/cookies/getCookies";

const getAndRedirect = (setCookie, router) => {
    let tempCookie = getCookies()
    if ( tempCookie === null ){
        // router.replace('/login')
    }
    setCookie(tempCookie)
};

export default getAndRedirect