<template>
  <div class="switches">
    <ul class="tab">
      <li class="tab-item"
          v-for="item,index in tabs" :key="index"
          @click="newslist(index)"
          :class="index==list?'active':''">
        {{item}}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'switches',
    props: {
      tabs: {type: Array, default: null},
      list:{type:Number}
    },
    methods:{
      newslist(index){
          this.$emit('newschange',index)
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .switches
    width 100%
    .tab
      display flex
      width 100%
      .tab-item
        padding 5px 0
        text-align center
        flex 1
        &.active
          color red
</style>
