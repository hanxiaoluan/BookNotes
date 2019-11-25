import Vue from "vue";
import Vuex from "vuex";
import info from "../info";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productList: info
  },
  getters: {
    colorList: state => {
      let temp = [];
      state.productList.forEach(item => temp.push(item.color));
      return Array.from(new Set(temp));
    },
    brandList: state => {
      let temp = state.productList.map(item => item.brand);
      return Array.from(new Set(temp));
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});