// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'script-loader!jquery/dist/jquery.min'
import 'script-loader!what-input/dist/what-input.min'
import 'script-loader!foundation-sites/dist/js/foundation.min'

import jQuery from 'jquery'
import Vue from 'vue'
import App from './App'
import router from './router'

// Vue.config.productionTip = false
window.jQuery = jQuery
window.$ = jQuery

require('motion-ui')
require('what-input')
require('foundation-sites')

/* eslint-disable no-new */
import draggable from 'vuedraggable'

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App, draggable }
})
