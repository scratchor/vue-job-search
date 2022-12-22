import { createApp } from "vue";
import App from "@/App";
import "@/assets/tailwind.css";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faAngleUp,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import router from "@/router";
import store from "./store";

library.add(faSearch);
library.add(faAngleUp);
library.add(faAngleDown);

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
