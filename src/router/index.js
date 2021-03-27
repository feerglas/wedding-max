import Vue from 'vue';
import VueRouter from 'vue-router';

import auth from '@/firebase/';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
  {
    path: '/',
    name: 'Detail',
    meta: {
      authRequired: true,
    },
    component: () => import(/* webpackChunkName: "detail" */ '../views/Detail.vue'),
  },
  {
    path: '/confirmation',
    name: 'Confirmation',
    meta: {
      authRequired: true,
    },
    component: () => import(/* webpackChunkName: "confirmation" */ '../views/Confirmation.vue'),
  },
  {
    path: '/registration',
    name: 'Registration',
    meta: {
      authRequired: true,
    },
    component: () => import(/* webpackChunkName: "registration" */ '../views/Registration.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

/**
 * Make sure the user can not access protected routes
 */
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.authRequired);

  if (requiresAuth && !auth.currentUser) {
    next('/login');
  } else {
    next();
  }
});

export default router;
