import { createWebHistory, createRouter } from "vue-router"

import Dashboard from "@/views/Dashboard.vue"
import Login from "@/views/Login.vue"
import Home from "@/views/Home.vue"
import Register from "@/views/Register.vue"
import Items from "@/views/Items.vue"
import Wishlist from "@/views/Wishlist.vue"
import PageNotFound from '@/views/PageNotFound.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/wishlist",
    name: "Wishlist",
    component: Wishlist
  },
  {
    path: "/items",
    name: "Items",
    component: Items
  },
  {
    path: '/:catchAll(.*)*',
    name: "PageNotFound",
    component: PageNotFound
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router