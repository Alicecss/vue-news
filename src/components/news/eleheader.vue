<template>
  <div class="eleheader" @click="searchs">
    <div class="header">
      <input  type="text" class="text" placeholder="新闻/推荐">
    </div>
  </div>
</template>

<script>
  export default {
    name: "eleheader",
    methods: {
      searchs(){
        this.$router.push("/search")
      }
    }
  }
</script>

<style scoped lang="stylus">
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
</style>
