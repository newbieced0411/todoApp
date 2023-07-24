import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import AddProduct from "../views/product/AddProduct.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: LoginView,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
    {
      path: "/product/add-product",
      name: "add-product",
      component: AddProduct,
    },
  ],
});

export default router;
