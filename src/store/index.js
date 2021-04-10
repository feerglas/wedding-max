import Vue from 'vue';
import Vuex from 'vuex';
import router from '@/router';
import { auth } from '@/firebase/';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: {
      error: null,
      pending: null,
    },
    name1: '',
    name2: '',
  },
  getters: {
    isLoginPending(state) {
      return state.login.pending;
    },
    isLoginError(state) {
      return state.login.error;
    },
    name1(state) {
      return state.name1;
    },
    name2(state) {
      return state.name2;
    },
  },
  mutations: {
    setLoginError(state, payload) {
      state.login.error = payload;
    },
    setLoginPending(state, payload) {
      state.login.pending = payload;
    },
    setName1(state, payload) {
      state.name1 = payload;
    },
    setName2(state, payload) {
      state.name2 = payload;
    },
  },
  actions: {
    userLogin({ commit }, { email, password }) {
      commit('setLoginPending', true);

      auth
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          commit('setLoginError', false);
          commit('setLoginPending', false);
          router.push('/');
        })
        .catch(() => {
          commit('setLoginError', true);
          commit('setLoginPending', false);
        });
    },
  },
  modules: {
  },
});
