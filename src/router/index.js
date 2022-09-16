import { createRouter, createWebHistory } from "vue-router";
import Cp2020char from "@/pages/Cp2020char";
import News from "@/pages/News";
import RedList from "@/pages/RedList";

const routes = [
  {
    path: "/",
    name: "home",
    component: Cp2020char,
  },
  {
    path: "/news",
    name: "news",
    component: News,
  },
  {
    path: "/red",
    name: "red",
    component: RedList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
