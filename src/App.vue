<template>
  <div id="app">
    <!--<div class="tab">
      <div class="tab-item">
        <router-link to="/news">新闻</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/movies">天气</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/Recommend">推荐</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/myself">我的</router-link>
      </div>
    </div>-->
      <router-view ></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus" scoped>
 /* .tab
    position absolute
    z-index 100
    display flex
    bottom  0
    width 100%
    left 0
    border-top 1px solid rgba(7,17,27,0.1)
    background-color white
    .tab-item
      flex 1
      text-align center
      padding 10px 0
      & a
        text-decoration none
        color rgb(7,17,27)
        &.router-link-active
          color red*/
</style>
