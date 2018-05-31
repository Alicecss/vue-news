<template>
  <div class="loves">
    <div class="header" @click="showss">
      <span>返回</span>
    </div>
    <scroll class="scroll">
      <div class="content">
        <ul>
          <li v-for="item,index in loves" class="item border-1px" :key="index">{{item.neirong}}</li>
        </ul>
      </div>
    </scroll>
  </div>
</template>
<script>
  import scroll from "./../../base/scroll.vue"
  export default{
    components: {scroll},
    data(){
      return {loves: {}}
    },
    created(){

    },
    methods: {
      showss(){
        this.$emit('shows', null)
      },
      datas(){
        this.$nextTick(() => {
          this.$axios.get('/api/loves').then((res) => {
            this.loves = res.data.data.loves.result
            /*console.log(res)*/
          }).catch((error) => {
            console.log(error)
          })
        })
      }
    }
  }
</script>
<style scoped lang="stylus">
  @import "../../commons/styl/base.styl"
  .loves
    background gray
    .header
      width 100%
      background green
      padding 10px

  .scroll
    overflow hidden
    position absolute
    top 41px
    bottom 50px
    .content
      position relative
      ul
        background rgba(7, 17, 27, 0.1)
        .item
          color rgba(7, 17, 27, 0.7)
          letter-spacing 1px
          line-height 22px
          font-size 16px
          font-family "新宋体"
          text-indent 1.5em
          padding 5px
          border-1px(rgba(7, 17, 27, 0.1))
          margin 5px 0
          background white
</style>
