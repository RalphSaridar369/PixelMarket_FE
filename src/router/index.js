import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
} from "vue-router";
import Index from "../views/index/index.vue";
import Page from "../views/page.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Index,
      meta: {
        title: "Weather App",
      },
    },
    {
      path: "/page",
      component: Page,
    },
  ],
});

export default router;
