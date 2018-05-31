<template>
  <div class="newsdetail">
    <div class="header border-px">
    <span @click="exitss">返回</span>
    <span class="type">{{newlists.category}}</span>
  </div>
    <div class="title">
      <div class="name">{{newlists.title}}</div>
      <div class="name-bottom">
        <span class="author">{{newlists.author_name}}</span>
        <span class="date">{{newlists.date}}</span>
        <div class="btn" @click="btnschange">{{!newlists.shows?"+关注":newlists.shows==1?"已关注":"+关注"}}</div>
      </div>
    </div>
    <div class="imgs">
      <img :src="newlists.thumbnail_pic_s" alt="">
      <img :src="newlists.thumbnail_pic_s02" alt="">
      <img :src="newlists.thumbnail_pic_s03" alt="">
    </div>
  </div>
</template>
<script>
  import scroll from "./../../base/scroll.vue"
  export default {
    components: {scroll},
    data(){
      return {
        newlists: this.$store.state.newlist
      }
    },
    methods: {
      //路由到new界面
      exitss(){
        this.$router.back(-1)
      },
      // 关注
      btnschange(){
        let arr = this.$store.state.follow.filter(function (item) {
          return item.date == this.newlists.date
        })
        if (arr.length == 0) {
          this.$set(this.newlists, 'shows', 1)
          this.$store.state.follow.push(this.newlists)
        } else {
          this.$set(this.newlists, 'shows', 0)
          this.$store.state.follow.splice(this.$store.state.follow.indexOf(this.newlists), 1)
        }
        /*console.log(this.newlists.shows)
        console.log(this.$store.state.follow)*/

      }
    }
  }
</script>
<style lang="stylus" scoped>
  @import "./../../commons/styl/base.styl"
  .newsdetail
    padding 0 10px
    .header
      width 100%
      line-height 60px
      border-1px(rgba(7, 17, 27, 0.1))
      .type
        position absolute
        left 50%
        width 50px
        margin-left -25px
        color rgba(7, 17, 27, 0.5)
    .title
      font-size 10px
      position relative
      margin-bottom 10px
      .name
        font-size 18px
        font-weight 700
        margin-bottom 10px
      .name-bottom
        position relative
        width 100%
        height 100%
        vertical-align middle
        .author
          color rgba(7, 17, 27, 0.7)
          font-size 10px
          font-weight 700
        .date
          color rgba(7, 17, 27, 0.7)
          font-size 10px
        .btn
          position absolute
          bottom 20px
          right 10px
          font-size 15px
          text-align center
          color rgba(255, 255, 255, 0.8)
          border-radius 20px
          height 20px
          width 60px
          line-height 20px
          font-weight 700
          background blue
    .imgs
      width 100%
      img
        padding 5px 0
        width 100%

</style>
