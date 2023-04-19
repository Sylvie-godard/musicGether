import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import HeaderHome from "@/components/HeaderHome/HeaderHome.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        default: HomeView,
        nav: HeaderHome,
      },
    },
  ],
});

export default router;
