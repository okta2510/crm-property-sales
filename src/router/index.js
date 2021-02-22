import { createRouter, createWebHistory } from '@ionic/vue-router';
// import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/welcome'
  },
  { path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFound.vue')
  },
  { path: '/:pathMatch(.*)',
  name: 'bad-not-found',
  component: () => import('@/views/NotFound.vue')
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: () => import('@/views/Welcome.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/my-listing',
    name: 'MyListing',
    component: () => import('@/views/MyListing.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/Login.vue')
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('@/views/auth/Logout.vue')
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import('@/views/auth/ForgotPassword.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/auth/Register.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/Test.vue')
  },
  {
    path: '/new',
    name: 'NewItem',
    component: () => import('@/views/NewItem.vue')
  },
  {
    path: '/take-photo',
    name: 'TakePhoto',
    component: () => import('@/views/TakePhoto.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
