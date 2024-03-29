import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import './registerServiceWorker'
import i18n from './i18n'
import VS2 from 'vue-script2'
import VueGtag from "vue-gtag";

Vue.use(VueGtag, {
  config: { id: "G-DVK7DL5TBZ" }
});

Vue.use(VS2)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
