import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home/HomeView.vue";
import About from "../views/About/AboutView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
