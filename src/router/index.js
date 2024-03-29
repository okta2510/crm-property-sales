import { createRouter, createWebHistory } from '@ionic/vue-router';
// import { RouteRecordRaw } from 'vue-router';
// import Home from '../views/Home.vue'
// import Tabs from '../views/Tabs.vue'

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
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/my-listing',
  //   name: 'MyListing',
  //   component: () => import('@/views/MyListing.vue')
  // },
  {
    path: '/berita',
    name: 'Berita',
    component: () => import('@/views/Berita.vue')
  },
  {
    path: '/berita/:id',
    name: 'Berita Detail',
    component: () => import('@/views/NewsDetail.vue')
  },
  {
    path: '/listing/:id',
    name: 'Listing Detail',
    component: () => import('@/views/ListingDetail.vue')
  },
  {
    path: '/agent/:id',
    name: 'Agent Detail',
    component: () => import('@/views/AgentDetail.vue')
  },
  {
    path: '/transaction/:id',
    name: 'Transaction Detail',
    component: () => import('@/views/TransactionDetail.vue')
  },
  {
    path: '/transaction',
    name: 'Transaction',
    component: () => import('@/views/Transaction.vue')
  },
  {
    path: '/coming-soon/:title',
    name: 'ComingSoon',
    component: () => import('@/views/Empty.vue')
  },
  {
    path: '/marketing/add',
    name: 'Marketing Add',
    component: () => import('@/views/MarketingAdd.vue')
  },
  {
    path: '/listing/add',
    name: 'Listing Add',
    component: () => import('@/views/ListingAdd.vue')
  },
  {
    path: '/listing/edit/:id',
    name: 'Listing Edit',
    component: () => import('@/views/ListingEdit.vue')
  },
  {
    path: '/profile/edit/:id',
    name: 'profile Edit',
    component: () => import('@/views/ProfileEdit.vue')
  },
  // {
  //   path: '/marketing',
  //   name: 'Marketing',
  //   component: () => import('@/views/Marketing.vue')
  // },
  {
    path: '/dashboard/',
    props: true,
    component: () => import('@/views/Tabs.vue'),
    children: [
      {
        path: '',
       redirect: '/tab1'
      },
      {
        path: '/tab1',
        props: true,
        component: () => import('@/views/Dashboard.vue')
      },
      {
        path: '/tab2',
        props: true,
        component: () => import('@/views/Tab2.vue')
      },
      {
        path: '/tab3',
        props: true,
        component: () => import('@/views/Tab3.vue')
      },
      {
        path: '/tab4',
        props: true,
        component: () => import('@/views/Tab4.vue')
      },
    ]
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
