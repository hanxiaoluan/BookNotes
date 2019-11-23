import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueBus from '@/utils/vue-bus.js';
import '@/style/index.scss';
Vue.use(VueBus);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");