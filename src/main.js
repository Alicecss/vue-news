import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./vuex/store"
import axios from "axios"
import lazy from "vue-lazyload"
import "./commons/styl/index.styl"
import videoPlayer from "vue-video-player"
import vueawesomeswiper from "vue-awesome-swiper"
let imgs=require("./commons/imgs/loading.gif")
Vue.use(vueawesomeswiper)
Vue.use(videoPlayer)
Vue.prototype.$axios=axios
Vue.use(lazy,{
  error:"",
  loading:imgs
})
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
router.push("/news")
