<template>
  <div class="newslist">
    <div class="header border-px">
      <span class="exits" @click="exitss">返回</span>
      <span class="type" @click="emptys">清空</span>
    </div>
    <ul class="news">
      <li class="news-item border-1px"
          v-for="item,index in follows"
          @click="enterdetail(item)"
          style="height: 100px" :key="index">
        <div class="lft">
          <div class="title">{{item.title}}</div>
          <div class="bottom-content">
            <span class="name">{{item.author_name}}</span>
            <span class="date">{{item.date}}</span>
          </div>
        </div>
        <div class="rig">
          <img width="100" v-lazy="item.thumbnail_pic_s" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import newslist from "./../news/newlist.vue"
  export default {
    components: {newslist},
    data(){
      return {
          shows:true,
      }
    },
    computed:{
      follows(){
          return  this.$store.state.follow
      }
    },
    methods:{
        // 清空follows
      emptys(){
        this.$store.state.follow=[]
        /*console.log(this.$store.state.follow)*/
      },
      // 调用父组件shows函数，返回上一级
      exitss(nul){
        this.$emit('shows', nul)
      },
      // 进入详情页
      enterdetail(item){
        this.$store.state.newlist=item
        console.log(this.$store.state.newlist)
        this.$router.push("/newsdetail")
      },
    }
  }
</script>
<style lang="stylus" scoped>
  @import "./../../commons/styl/base.styl"
  .newslist
    .header
      width 100%
      line-height 60px
      border-1px(rgba(7, 17, 27, 0.1))
      .exits
        margin-left 10px
      .type
        position absolute
        right 10px
        color blue
    .news
      .news-item
        display flex
        padding 10px 10px
        font-size 14px
        color rgb(7, 17, 27)
        border-1px(rgba(7, 17, 27, 0.2))
        .title
          font-size 14px
          margin-top 10px
        .bottom-content
          position: absolute
          left 10px
          bottom 5px
          font-size 12px
          color rgba(7, 17, 27, 0.5)
          .name
            display inline-block
            margin-right 20px
        .lft
          flex 7
        .rig
          flex 3
          text-align center
          padding-top 10px
          img
            margin auto auto
</style>
