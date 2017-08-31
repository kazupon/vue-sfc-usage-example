import Vue from 'vue'
import App from './App.vue'
import Hello from '../../lib/dist/hello'

Vue.component('hello', Hello)

new Vue({
  el: '#app',
  render: h => h(App)
})
