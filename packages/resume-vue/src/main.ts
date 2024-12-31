import { createApp } from "vue";
//import { createRouter, createWebHashHistory } from "vue-router";

import App from "@components/App.vue";
import { createRouter } from "./routing/createRouter.js";
//import { routes } from "./routing/routes.js";

// var router = createRouter({
//   history: createWebHashHistory(), 
//   routes
// });

const router = createRouter();


createApp(App)
  .use(router)
  .mount(document.body);
