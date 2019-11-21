import Vue from "vue";
import Vuex from "vuex";
/* import {
  resolve
} from "dns"; */

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    list: [1, 2, 3, 4, 5, 6, 7]
  },
  mutations: {
    increment(state, params) {
      state.count += params.count;
    },
    decrease(state) {
      state.count--;
    },

  },
  actions: {
    asyncIncrement(context) {
      return new Promise(resolve => {
        setTimeout(() => {
          context.commit({
            type: 'increment',
            count: 1
          });
          resolve();
        }, 1000)
      })

      // context.commit('increment');

    }
  },
  modules: {},
  getters: {
    filterList: state => {
      return state.list.filter(item => item < 4);
    }
  }
});