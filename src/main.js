import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import storeItem from './store/store'

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);
Vue.use(Vuex);

Vue.config.productionTip = false

const store = new Vuex.Store(storeItem);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
