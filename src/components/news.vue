<template>
  <div class="news">
    <routers></routers>
    <eleheader></eleheader>
    <switches :tabs="navi" :list="newslist" @newschange="newschange"></switches>
    <!--头条列表-->
    <scroll
      v-for="item,index in navigation"
      class="scroll"
      :click="true"
      :probeType="3"
      :key="index"
      v-show="newslist===index"
    >
      <div class="newslist">
        <newslist :types="item.name" ref="newslist"></newslist>
      </div>
    </scroll>

  </div>
</template>

<script>
  import routers from "../base/routers.vue"
  import switches from "../base/switches.vue"
  import newslist from "./news/newlist"
  import eleheader from "../components/news/eleheader.vue"
  import scroll from "../base/scroll.vue"
  export default {
    name: 'HelloWorld',
    components: {
      newslist,
      eleheader,
      scroll,
      switches,
      routers
    },
    created(){
    },
    watch: {},
    data(){
      return {
        newslist: 0,
        news: {},
        navigation: [{title: '头条', name: 'toutiao'},
          {title: '社会', name: 'shehui'},
          {title: '国内', name: 'guonei'},
          {title: '国际', name: 'guoji'},
          {title: '体育', name: 'tiyu'},
          {title: '娱乐', name: 'luye'}]
      }
    },
    computed: {
        // 遍历navigation对象，返回数组传入swithes组件中
      navi(){
          let navis=[]
         this.navigation.forEach(function (item) {
          navis.push(item.title)
        })
        return navis
      }
    },
    methods: {
      // 菜单栏切换
      newschange(index){
        this.newslist = index
        /*this.$refs.newslist[index].news('tiyu')*/
      },

    }
  }
</script>

<style scoped lang="stylus">
  .news
    .scroll
      position absolute
      top 90px
      bottom 41px
      overflow hidden
      .newslist
        position: relative
        padding-bottom 50px
</style>
