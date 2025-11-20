import { createRouter, createWebHashHistory } from 'vue-router'
import defaultPage from '../views/DefaultView.vue'
import homePage from '../views/HomeView.vue'
import Signup from '../components/Signup.vue'

const routes = [
  {
    path: '/',
    name: 'defaultPage',
    component: defaultPage
  },
  {
    path: '/',
    name: 'home',
    component: homePage
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
