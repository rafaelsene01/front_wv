import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueSocketIOExt from "vue-socket.io-extended";
import io from "socket.io-client";

const baseURL = "https://api-wv.herokuapp.com";

const socket = io(baseURL);
Vue.prototype.$baseURL = baseURL;

Vue.use(VueSocketIOExt, socket);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
