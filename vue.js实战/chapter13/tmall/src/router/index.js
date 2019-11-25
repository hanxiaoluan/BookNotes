import Vue from "vue";
import VueRouter from "vue-router";



Vue.use(VueRouter);
const constandRoutes = [{
    name: 'home',
    path: '/home',
    component: () => import('@/views/Home')
  }, {
    name: 'detail',
    path: '/detail',
    component: () => import('@/views/Detail')
  },
  {
    name: 'cart',
    path: '/cart',
    component: () => import('@/views/Cart')
  },
  {
    path: '*',
    redirect: '/home'
  }
]


const router = new VueRouter({
  mode: 'history',
  routes: constandRoutes
});

export default router;