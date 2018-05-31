<template>
  <div class="search">
    <button class="btn" @click="exit" >返回</button>
    <input type="text" class="text" @focus="focusnull" v-model="values" placeholder="请输入号码">
    <button class="btn" @click="btns()">确定</button>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        values: null
      }
    },
    methods: {
      focusnull(){
        this.values=null
      },
        //返回myself界面
      exit(){
        this.$emit('exit', null)
      },
      //点击搜索显示内容
      btns(){
          this.$emit('val', this.values)
      }
    }
  }
</script>
<style scoped lang="stylus">
  .search
    height 40px
    background 100%
    overflow hidden
    display flex
    border 1px solid rgba(7, 17, 27, 0.5)
    .text
      flex 6
      outline none
      border none
      text-align center
      font-size 20px
    .btn
      color rgba(255, 255, 255, 0.8)
      background rgba(7, 17, 27, 0.5)
      outline none
      flex 2
      border none
</style>
