import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/global.css'
import settings from './assets/js/settings'

Vue.prototype.$settings = settings

import axios from 'axios'

Vue.prototype.$http = axios

import cookies from 'vue-cookies'
Vue.prototype.$cookies = cookies

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
