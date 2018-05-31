<template>
  <div class="Recommend">
    <routers></routers>
    <eleheader></eleheader>
    <scroll
      class="scroll"
      :click="true"
      :probeType="3">
      <div class="newslist">
        <div class="banner" >
          <banner :imgs="imgs"></banner>
        </div>
        <newslist :types="'fire'"></newslist>
      </div>
    </scroll>
  </div>
</template>
<script>
  import eleheader from "../components/news/eleheader.vue"
  import banner from "../base/banner.vue"
  import routers from "../base/routers.vue"
  import scroll from "./../base/scroll.vue"
  import newslist from "./news/newlist.vue"
  export default {
    components: {newslist, scroll,routers,banner,eleheader},
    name: "Recommend",
    data(){
      return {
          imgs:['../../static/imgs/1.jpg','../../static/imgs/2.jpg',
            '../../static/imgs/3.jpg','../../static/imgs/4.jpg',
            '../../static/imgs/5.jpg']
      }
    },
    computed:{
      swiper() {
        return this.$refs.mySwiper.swiper
      }

    },
    mounted() {
      /*this.swiper.slideTo(1, 1000, false)*/
    },
    created(){
      this.$nextTick(() => {
        let host = '/R2/' + '%e5%a5%a5%e5%b7%b4%e9%a9%ac'
        this.$axios.get(host).then((res) => {
        }).catch((error) => {
          console.log(error)
        })
      })
    }
  }
</script>
<style scoped lang="stylus">
  .Recommend
    .header
      width 100%
      height 50px
      padding 10px 20px
      box-sizing border-box
      .text
        border-radius 30px
        background-color rgba(7, 17, 27, 0.1)
        border none
        outline none
        width 100%
        height 30px
        text-align center
    .scroll
      position absolute
      top 50px
      bottom 50px
      overflow hidden
      .newslist
        position relative
        .banner
          width 100%
          height 180px
          .swiper-wrapper
            position: relative
            width 100%
</style>
