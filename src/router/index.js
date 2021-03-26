import Vue from 'vue';
import VueRouter from 'vue-router';

import firebase from 'firebase/app';
import 'firebase/auth';

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
 * !! TODO !!
 * - Not ideal solution. We have a vuex state variable to determine if we are logged in.
 *   But if we would import store.js, we would have a cyclic dependency
 * - If user is logged in and is on e.g. detail page, and refreshes the page, he will be
 *   redirected to the login page, since firebase is not initialized at this point.
 */

/**
 * Make sure the user can not access protected routes
 */
router.beforeEach((to, from, next) => {
  const user = firebase.auth().currentUser;

  if (to.matched.some((record) => record.meta.authRequired)) {
    if (!user) {
      next({
        path: '/login',
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
