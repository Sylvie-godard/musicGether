import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AllConcerts from "@/views/AllConcerts.vue";
import AllFestivals from "@/views/AllFestivals.vue";
import HeaderHome from "@/components/HeaderHome/HeaderHome.vue";
import FooterApp from "@/components/FooterApp/FooterApp.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        default: HomeView,
        nav: HeaderHome,
        footer: FooterApp,
      },
    },
    {
      path: "/concerts",
      name: "concerts",
      components: {
        default: AllConcerts,
        nav: HeaderHome,
        footer: FooterApp,
      },
    },
    {
      path: "/festivals",
      name: "festivals",
      components: {
        default: AllFestivals,
        nav: HeaderHome,
        footer: FooterApp,
      },
    },
  ],
});

export default router;
