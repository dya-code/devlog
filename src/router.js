import { createWebHistory, createRouter } from "vue-router";
import Index from "./views/IndexPage.vue";
import Sign from "./views/Sign.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/sign",
    name: "Sign",
    component: Sign,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;