import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    name: "resume", 
    path: "/resume", 
    component: () => import("@components/pages/Resume.vue")
  }, 
  {
    name: "cv", 
    path: "/cv", 
    component: () => import("@components/pages/Cv.vue")
  }, 
  {
    path: "/:catchAll(.*)", 
    redirect: "resume"
  }
];
