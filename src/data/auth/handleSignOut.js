import deleteCookies from '@/data/cookies/deleteCookies'
const handleSignOut = (router) => {
    deleteCookies();
}
export default handleSignOut