import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import './assets/main.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret)

createApp(App).use(i18n).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount("#app");
