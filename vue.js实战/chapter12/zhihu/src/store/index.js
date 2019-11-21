import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id: ''
  },
  mutations: {
    passId(state, payload) {
      state.id = payload.id;
    }
  },
  actions: {
    passId({
      commit
    }, payload) {
      commit('passId', payload);
    }
  },
  modules: {}
});