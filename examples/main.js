import Vue from 'vue'
import App from './App.vue'

import 'mooc-ui2/dist/css/index.css';
import MUI from 'mooc-ui2';
Vue.use(MUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
