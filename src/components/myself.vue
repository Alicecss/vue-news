<template>
  <div class="myself">
    <routers></routers>
    <div class="myself-title">
      <img class="img1" src="./../commons/imgs/brand.jpg" alt="">
      <img class="img2" src="./../commons/imgs/brand.jpg" alt="">
      <div class="myself-bottom">
        <div class="tab">
          <div class="tab-item">
            <p>0</p>
            <p>发表</p>
          </div>
          <div class="tab-item">
            <p>{{promt}}</p>
            <p>关注</p>
          </div>
          <div class="tab-item">
            <p>0</p>
            <p>粉丝</p>
          </div>
          <div class="tab-item">
            <p>0</p>
            <p>获赞</p>
          </div>
        </div>
      </div>
    </div>
    <div class="search">
      <ul class="info">
        <Li class="info-item border-1px" v-for="item,index in info"
            :key="index"
            @click="tabs(item,index)"
        >
          <span>{{item}}</span>
          <span class="prompt" v-if="index==1" v-show="promt!=0">+{{promt}}</span>
        </Li>
      </ul>
    </div>
    <div class="component" v-show="shows==1">
      <follow @shows="showschange"></follow>
    </div>
    <div class="component" v-show="shows==4">
      <mobile @shows="showschange"></mobile>
    </div>
    <div class="component" v-show="shows==0">
      <zip-code @shows="showschange"></zip-code>
    </div>
    <div class="component" v-show="shows==2">
      <loves @shows="showschange" ref="love"></loves>
    </div>
    <div class="component" v-show="shows==5">
      <mobile-location @shows="showschange" ref="love"></mobile-location>
    </div>
  </div>
</template>

<script>
  import follow from "./myself/follow.vue"
  import routers from "../base/routers.vue"
  import loves from "./myself/loves.vue"
  import zipCode from "./myself/zipCode.vue"
  import widgets from "./myself/widgets"
  import mobile from "./myself/mobile.vue"
  import mobileLocation from  "./myself/mobileLocation.vue"
  export default {
    name: "myself",
    components: {mobile,zipCode,loves,mobileLocation,routers,follow},
    data() {
      return {
          // 控制收藏小图标

        shows: null,
        info: ['全国邮编查询', '历史/收藏', '爱情术语', '身份证查询', '号码吉凶', '号码归属地', '汇率']
      }
    },
    computed:{
      promt(){
          return this.$store.state.follow.length
      }
    },
    methods: {
        // 子组件改变shows的值，并返回myself界面
        showschange(shows){
            this.shows=shows

        },
      //获取点击对应index
      tabs(item, index){
          this.shows=index
        /*console.log(index)*/
        if(index==2){
            console.log(index)
          if(this.$refs.love.datas){
            this.$refs.love.datas()
            /*console.log(this.$refs.love)*/
          }
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "./../commons/styl/base.styl"
  .myself
    blur 10px
    .myself-title
      background rgba(173, 176, 170, 0.5)
      padding 80px 20px
      position relative
      .img1
        position absolute
        left 0
        top 0
        height 100%
        width 100%
        opacity 0.3
        z-index -1
      .img2
        height 50px
        width 50px
        border-radius 50%
      .myself-bottom
        position absolute
        left 0
        bottom 0
        width 100%
        margin 10px 0
        .tab
          display flex
          .tab-item
            text-align center
            flex 1
            p:nth-child(2)
              font-size 12px
              color rgba(7, 17, 27, 0.5)
    .search
      .info
        background rgba(7, 17, 27, 0.2)
        .info-item
          padding 15px 20px
          background white
          border-1px(rgba(7, 17, 27, 0.1))
          .prompt
            position absolute
            right 20px
            display inline-block
            height 30px
            width 30px
            line-height 30px
            color red
            text-align center
            background rgba(7,17,27,0.1)
            border-radius 20px
          &:nth-child(2)
            margin-bottom 10px
            border none
    .component
      position fixed
      top 0
      left 0
      background white
      width 100%
      height 100%
</style>
