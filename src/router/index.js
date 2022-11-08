import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: "/",
    name: 'home',
    component: HomeView
  },
  {
    path: "/shop",
    name: 'Shop',
    component: () =>
    import ( /* webpackChunkName: "PublicResetPassword" */ '../views/Shop.vue'),
meta: {
    title: 'Shop - landingpage',
}
  },
  {
    path: "/blog",
    name: 'Blog',
    component: () =>
        import ( /* webpackChunkName: "PublicResetPassword" */ '../views/Blog.vue'),
    meta: {
        title: 'Blog - landingpage',
    }
  },
  {
    path: "/about",
    name: "About",
    component: () =>
        import ( /* webpackChunkName: "PublicResetPassword" */ '../views/About.vue'),
    meta: {
        title: 'About - landingpage',
    }
  },

  {
    path: "/contactus",
    name: "ContactUs",
    component: () =>
        import ( /* webpackChunkName: "PublicResetPassword" */ '../views/ContactUs.vue'),
    meta: {
        title: 'ContactUs - landingpage',
    }
  },
  

{
  path: '/login',
  name: 'Login',
  component: () =>
      import ( /* webpackChunkName: "PublicResetPassword" */ '../views/Login.vue'),
  meta: {
      title: 'Login - login',
  }
},

{
  path: '/signup',
  name: 'Signup',
  component: () =>
      import ( /* webpackChunkName: "PublicResetPassword" */ '../views/Signup.vue'),
  meta: {
      title: 'Signup - Signup',
  }
},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
