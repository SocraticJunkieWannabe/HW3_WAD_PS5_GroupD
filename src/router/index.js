import { createRouter, createWebHashHistory } from 'vue-router'
import defaultPage from '../views/DefaultView.vue'
import homePage from '../views/HomeView.vue'
import Signup from '../components/Signup.vue'
import NewPost from '../views/NewPostView.vue'

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
    path: '/post',
    name: 'post',
    component: NewPost
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
