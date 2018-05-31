<template>
  <div class="mobile">
    <search @val="val" @exit="exit"></search>
    <!--含义 健康 建树  家庭 基业 树立 详解 运势-->
    <scroll class="scroll"
            :click="true"
            :probeType="3">
      <div class="content" v-show="values!=null">
        <ul>
          <li class="item border-1px">
            <div class="title">运势</div>
            <div class="info">{{mobile.yunshi}}</div>
          </li>
          <li class="item border-1px">
            <div class="title">健康</div>
            <div class="info">{{mobile.jiankang}}</div>
          </li>
          <li class="item border-1px">
            <div class="title">家庭</div>
            <div class="info">{{mobile.jiating}}</div>
          </li>
          <li class="item border-1px">
            <div class="title">基业</div>
            <div class="info">{{mobile.jiye}}</div>
          </li>
          <li class="item border-1px">
            <div class="title">建树</div>
            <div class="info">{{mobile.jianshu}}</div>
          </li>
          <li class="item border-1px">
            <div class="title">详解</div>
            <div class="info">{{mobile.xiangjie}}</div>
          </li>
        </ul>
      </div>
    </scroll>
  </div>
</template>
<script>
  import scroll from"../../base/scroll.vue"
  import search from "./search.vue"
  export default{
    components: {search,scroll},
    data(){
      return {
        mobile: {}, values:17687450919
      }
    },
    methods: {
        // 返回myself界面
      exit(nul){
        this.$emit('shows', nul)
      },
      //获取values，跨域请求数据
      val(values){
        this.values = values
        console.log(this.values)
        this.$nextTick(() => {
          let host = '/v2/' + values
          this.$axios.get(host).then((res) => {
            this.mobile = res.data.result
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
  @import "./../../commons/styl/index.styl"
  .scroll
    position absolute
    top 50px
    overflow hidden
    .content
      position relative
      ul
        height 100%
        .item
          display flex
          margin 5px 0
          .title
            background rgba(243, 182, 74, 0.8)
            text-align center
            padding 5px 0
            flex 2
            margin-right 5px
          .info
            font-size 20px
            text-indent 2em
            flex 8
            padding 5px 5px
            background #0ECAC7
</style>
