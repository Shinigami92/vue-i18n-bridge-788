import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";
import i18n from "@/plugins/i18n";
import App from "@/App.vue";

Vue.use(VueCompositionAPI);

Vue.config.productionTip = false;

new Vue({
  i18n,
  render: (h) => h(App),
}).$mount("#app");
