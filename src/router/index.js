import Vue from 'vue'
import Router from 'vue-router'
import news from "../components/news"
import movies from "../components/weather.vue"
import Recommend from "../components/Recommend.vue"
import myself from "../components/myself"
import newsdetail from "../components/news/newsdetail.vue"
import suitable from "../components/weather/suitable.vue"
import search from "../components/searchs.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/news",
      component:news
    },
    {
      path:"/movies",
      component:movies
    },{
      path:"/Recommend",
      component:Recommend
    },{
      path:"/myself",
      component:myself
    },
    {
      path:"/newsdetail",
      component:newsdetail
    },
    {
      path:"/search",
      component:search
    },
    {
      path:"/suitable",
      component:suitable
    }
  ]
})
