import { createRouter, createWebHistory } from "vue-router";
import i18n from '../i18n'
import HomeView from "../views/HomeView.vue";
import NotFound from "../components/NotFound"
import About from "../views/about.vue"
const routes = [
  {
    path: '/',
    redirect: `/${i18n.global.locale}`
  },
  {
    path: '/:lang',
    name: 'home',
    component: async () => {
      if (i18n.global.locale !== 'uz' && i18n.global.locale !== 'ru') {
        return NotFound
      }
      return HomeView
    }
  },
  {
    path: '/:lang/about',
    name: 'about',
    component: async () => {
      if (i18n.global.locale !== 'uz' && i18n.global.locale !== 'ru') {
        return NotFound
      }
      return About
    }
  },
  {
    path: '/:pathMatch(.*)',
    name: 'notFound',
    component: NotFound
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  let language = to.params.lang
  i18n.global.locale = language
  next()
})

export default router;