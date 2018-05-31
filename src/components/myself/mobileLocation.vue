<template>
  <div class="location">
    <search @val="val" @exit="exit">></search>
  </div>
</template>
<script>
  import search from "./search.vue"
  export default {
    components: {search},
    methods: {
      exit(nul){
        this.$emit('shows', nul)
      },
      val(values){
        console.log(values)
        let host = "m2/"+'&mobileNumber=13021671512'
        this.$axios.get(host).then((res) => {
          console.log(res)
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  }
</script>
<style>

</style>
