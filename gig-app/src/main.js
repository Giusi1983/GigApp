import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App)
  .use(router) //usa il router
  .mount("#app");
