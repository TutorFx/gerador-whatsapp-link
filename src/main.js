import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import './registerServiceWorker'
import i18n from './i18n'
import Ads from 'vue-google-adsense'


Vue.config.productionTip = false

Vue.use(require('vue-script2'))
Vue.use(Ads.Adsense)
Vue.use(Ads.InArticleAdsense)
Vue.use(Ads.InFeedAdsense)


new Vue({
  vuetify,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
