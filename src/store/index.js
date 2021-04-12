import Vue from 'vue';
import Vuex from 'vuex';
import router from '@/router';
import { auth } from '@/firebase/';

Vue.use(Vuex);

const defaultState = {
  login: {
    error: null,
    pending: null,
  },
  name1: '',
  name2: '',
  reservation: {
    name: '',
    getTogether: {
      join: false,
      persons: '1',
    },
    wedding: {
      join: false,
      persons: '1',
      food: '',
      alergics: '',
      person2: {
        name: '',
        food: '',
        alergics: '',
      },
    },
  },
  reservationRequestPending: false,
  reservationRequestError: '',
};

export default new Vuex.Store({
  state: defaultState,
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
    reservation(state) {
      return state.reservation;
    },
    reservationRequestPending(state) {
      return state.reservationRequestPending;
    },
    reservationRequestError(state) {
      return state.reservationRequestError;
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
    setReservation(state, payload) {
      state.reservation = payload;
    },
    setReservationRequestPending(state, payload) {
      state.reservationRequestPending = payload;
    },
    setReservationRequestError(state, payload) {
      state.reservationRequestError = payload;
    },
  },
  actions: {
    resetStore({ commit }) {
      commit('setName1', '');
      commit('setName2', '');
      commit('setReservation', defaultState.reservation);
      commit('setReservationRequestPending', false);
      commit('setReservationRequestError', '');
    },
    userLogin({ commit }, { email, password }) {
      commit('setLoginPending', true);

      // since firebase needs email as  username,  but invitation for weddings are send
      // without email as  username, we need to proxy it here.
      const mailForAuth = email === 'sarahundmaxi' ? 'max@max.com' : 'foo@bar.baz';

      auth
        .signInWithEmailAndPassword(mailForAuth, password)
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
