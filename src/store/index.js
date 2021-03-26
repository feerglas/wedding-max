import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase/app';
import 'firebase/auth';
import router from '@/router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: {
      error: null,
      pending: null,
      user: null,
      isAuthenticated: false,
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.login.user !== null && state.login.user !== undefined;
    },
    isLoginPending(state) {
      return state.login.pending;
    },
    isLoginError(state) {
      return state.login.error;
    },
  },
  mutations: {
    setUser(state, payload) {
      state.login.user = payload;
    },
    setIsAuthenticated(state, payload) {
      state.login.isAuthenticated = payload;
    },
    setLoginError(state, payload) {
      state.login.error = payload;
    },
    setLoginPending(state, payload) {
      state.login.pending = payload;
    },
  },
  actions: {
    userLogin({ commit }, { email, password }) {
      commit('setLoginPending', true);

      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          commit('setLoginError', false);
          commit('setLoginPending', false);
          commit('setUser', user);
          commit('setIsAuthenticated', true);
          router.push('/');
        })
        .catch(() => {
          commit('setLoginError', true);
          commit('setLoginPending', false);
          commit('setUser', null);
          commit('setIsAuthenticated', false);
        });
    },
  },
  modules: {
  },
});
