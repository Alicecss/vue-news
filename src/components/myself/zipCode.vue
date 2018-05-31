<template>
  <div class="zipcode">
    <search @val="val" @exit="exit"></search>
  </div>
</template>
<script>
  import search from "./search.vue"
    export default{
      components:{search},
        data(){
            return {}
        },
      methods:{
        // 返回myself界面
        exit(nul){
          this.$emit('shows', nul)
        },
        //获取values，跨域请求数据
        val(values){
          this.values = values
          console.log(this.values)
          this.$nextTick(() => {
            let host ='/z2/'
            console.log(host)
            this.$axios.get(host).then((res) => {
              console.log(res.data)
            }).catch((error) => {
              console.log(error)
            })
          })
        }
      }
    }
</script>
<style scoped>

</style>
