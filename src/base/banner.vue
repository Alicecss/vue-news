<template>
  <div class="banner">
    <ul class="uls" ref="uls">
      <li class="lis" v-for="item,index in imgs1" :key="">
        <img :src="item" alt="">
      </li>
    </ul>
    <div class="navi">
      <span
        class="navi-item"
        :class="index==actives?'activess':''"
        v-for="item,index in imgs"></span>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      imgs: {
        type: Array,
        default: null
      }
    },
    data(){
      return {
        actives: 0,
      }
    },
    computed: {
        // 数组添加首元素，无缝轮播
      imgs1(){
        if (this.imgs) {
          return this.imgs.concat(this.imgs[0])
        }
      }
    },
    mounted(){
        // 获取ul元素
      let uls = this.$refs.uls
      uls.style.width = uls.offsetWidth * (this.imgs.length+1) + 'px'
      let index = 0
      let _this = this
      setInterval(function () {
        index++
        uls.style.transform = `translate(${-index * 375}px)`
        uls.style.transition = 'all 1s linear'
        if (index >= _this.imgs.length+1) {
          index = 0
          uls.style.transform = 'none'
          uls.style.transition = 'none'
        }
        _this.actives = index
      }, 2000)
    }
  }
</script>
<style lang="stylus" scoped>
  .banner
    width 100%
    height 100%
    position relative
    margin 10px 0
    .uls
      position absolute
      width 100%
      height 100%
      .lis
        float left
        width 375px
        height 100%
        img
          width 375px
          height inherit
    .navi
      position absolute
      left 50%
      bottom 2px
      margin-left -35px
      z-index 50
      .navi-item
        display inline-block
        height 10px
        width 10px
        background rgba(7, 17, 27, 0.4)
        border-radius 50%
        margin-right 5px
        &.activess
          background blue
</style>
