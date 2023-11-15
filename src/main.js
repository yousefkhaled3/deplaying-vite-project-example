import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import i18n from "./i18n";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
library.add(faCartShopping);

createApp(App)
  .use(store)
  .use(i18n)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
