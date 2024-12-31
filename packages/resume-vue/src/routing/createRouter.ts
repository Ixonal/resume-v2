import { type Router, createRouter as createVueRouter } from "vue-router";
import { history } from "./history.js";
import { routes } from "./routes.js";

export function createRouter(): Router {
  return createVueRouter({
    history, 
    routes
  });
}
