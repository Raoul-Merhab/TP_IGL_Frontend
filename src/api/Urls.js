const Urls = {
    GET_ROOT:"/",
    SIGN_IN:"/auth/login",
    SIGN_UP:"/auth/signup",
    MY_ACCOUNT:"/auth/my-account",
    MY_ACCOUNT_EDIT:"/auth/update-account",
    // admin endpoints
    GET_MODS:"/admin/liste-des-moderateurs",
    GET_ARTICLES:"/admin/liste-des-articles",
    AJOUTER_MOD:"/admin/ajouter-moderateur",
    SUPPRIMER_MOD:"/admin/supprimer-moderateur",
    // user endpoints
    GET_FAVORIS:"/user/articles-favoris",
    ADD_FAVORI:"/user/ajouter-article-favoris",
    DOWNLOAD_FAVORI:"/user/telecharger-article-favoris",
    DELETE_FAVORI:"/user/supprimer-article-favoris"
}

export default Urls