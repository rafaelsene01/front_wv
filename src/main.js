import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueSocketIO from "vue-socket.io";

const baseURL = "http://localhost:3333";
Vue.prototype.$baseURL = baseURL;

Vue.use(
  new VueSocketIO({
    connection: baseURL
  })
);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
