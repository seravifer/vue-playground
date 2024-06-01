import { createRouter, createWebHistory } from "vue-router";

export const Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./pages/home/HomePage.vue"),
    },
    {
      path: "/restaurant/:id",
      name: "restaurant",
      component: () => import("./pages/restaurant/RestaurantPage.vue"),
    },
  ],
});
