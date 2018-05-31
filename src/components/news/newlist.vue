<template>
  <div class="newslist">
  <ul class="news">
    <li class="news-item border-1px"
        v-for="item,index in newss"
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
  export default {
    props: ['types'],
    name: "newlist",
    data(){
      return {
        newss: {}
      }
    },
    created(){
        this.news()
    },
    methods: {
      // 进入详情页
      enterdetail(item){
        this.$store.state.newlist=item
        /*console.log(this.$store.state.newlist)*/
        this.$router.push("/newsdetail")
      },
      //news列表传值
      news(){
        let types=String(this.types)
        /*let host = '/api/'+'guoji'+'&key=939994f1f415919a9348ba7d7f5b1b93'*/
        let host='/api/'+types
        this.$axios.get(host).then((res) => {
          this.newss = res.data.data.result.data
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "./../../commons/styl/base.styl"
  .newslist
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
