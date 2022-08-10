import { createRouter, createWebHashHistory } from 'vue-router'
import ProfileView from '../views/ProfileView.vue'

const routes = [
  {
    path: '/',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/checkout',
    name: 'home-checkout',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/HomeCheckout.vue')
  },
  {
    path: '/product-details',
    name: 'product-details',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/ProductDetail.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.replace({ path: '*', redirect: '/' })
export default router
