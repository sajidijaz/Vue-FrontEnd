// import '@babel/polyfill'
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import vuex from 'vuex';
import Default from './layouts/Default'
import Login from './layouts/login'

Vue.component('default-layout',Default);
Vue.component('login-layout',Login);

// Import css files
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import 'vuetify/src/stylus/main.styl'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
Vue.use(vuex);
Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
    router,
    store,
  render: h => h(App)
}).$mount('#app')
