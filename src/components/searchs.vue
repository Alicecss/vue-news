<template>
  <div class="searchs">
    <div class="content">
      <p>没有更多内容哦！</p>
      <p @click="exits">返回</p>
    </div>
  </div>
</template>
<script>
  export default {
    components: {},
    methods: {
      exits(){
          this.$router.back(-1)
      }
    }
  }
</script>
<style lang="stylus" scoped="">
  .content
    text-align center
    position absolute
    margin-left -75px
    width 150px
    left 50%
    p
      margin 50px 0
      &:last-child
        color blue
</style>
