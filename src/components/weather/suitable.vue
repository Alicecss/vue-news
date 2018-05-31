<template>
  <div class="suitable">
    <div class="header" @click="backshang">
      {{suitables[2]}}
    </div>
    <div class="main">
      <div class="title">{{suitables[0]}}</div>
      <div class="wrapper">{{suitables[1]}}</div>
    </div>
  </div>
</template>
<script>
  export default {
    components: {},
    data(){
      return {

      }
    },
    methods:{
      backshang(){
          this.$router.back(-1)
      }
    },
    computed:{
      suitables(){
        return this.$store.state.suitable
      }
    },
    created(){

    }
  }
</script>
<style lang="stylus" scoped>
.suitable
  background rgba(7,17,27,0.1)
  height 100%
  .header
    background white
    font-size 16px
    color rgba(7,17,27,0.8)
    padding 10px 10px
  .main
    margin 20px 10px 20px 10px
    background white
    padding 10px
    .title
      color red
      font-size 25px
</style>
