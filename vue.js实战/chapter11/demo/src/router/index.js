import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/home",
    name: "home",
    meta: {
      title:'首页'
    },
    component: () => import('../views/Home.vue')
  },
  {
    path: "/about",
    name: "about",
    meta: {
      title: '分页'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: '/user/:id',
    name: 'user',
    meta: {
      title: '用户'
    },
    component: () => import('../views/User.vue')
  },
  {
    path: '*',
    redirect: '/home'
  }
];

const router = new VueRouter({
  mode: 'history',
  routes: routes
});
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
})
export default router;