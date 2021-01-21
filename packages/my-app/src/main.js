import Vue from 'vue'
import App from './App.vue'
import MyButton from '@mylibrary/my-button'
import MyTable from '@mylibrary/my-table'

Vue.config.productionTip = false
Vue.component('my-button', MyButton);
Vue.component('my-table', MyTable);

new Vue({
  render: h => h(App),
}).$mount('#app')
