import { createRouter, createWebHistory } from "vue-router";
import i18n from '../i18n'
const routes = [
    {
        path: '/:lang/',
        name: 'Home',
        alias: '/',
        component: () => import('../views/HomeView.vue')
    },
    //////// keyingi rout yozish uchun path (path: '/:lang/view' + lazy loading)
    {
        path: '/:lang?/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../components/NotFound.vue')
    },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
router.beforeEach((to, from, next) => {
    const langFromLocalStorage = localStorage.getItem('lang')
    let language = to.params.lang
    if (language === 'uz' || language === 'ru') {
        i18n.global.locale = language
        localStorage.setItem('lang', language)
        next()
    } else if (!language) {
        to.params.lang = i18n.global.locale = langFromLocalStorage
        next()
    } else {
        to.params.lang = langFromLocalStorage
        next({ name: 'NotFound' })
    }
})
export default router;