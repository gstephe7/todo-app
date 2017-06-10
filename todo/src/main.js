// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Input from './todo-input.vue'
import List from './todo-list.vue'

Vue.config.productionTip = false

Vue.component('todo-input', Input)
Vue.component('todo-list', List)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
