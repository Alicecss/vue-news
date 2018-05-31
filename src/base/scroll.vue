<template>
  <div ref="wrapper" class="wrapper">
     <slot></slot>
  </div>
</template>
<script>
  import BScroll from "better-scroll"
  export default {
    props: {
      probeType: {
        type: Number, default: 3
      },
      click: {
        type: Boolean, default: false
      },
      scrollX: {
        probeType: Boolean, default: false
      },
      beforeScroll: {
        type: Boolean, default: false
      },
      pullup: {
        type: Boolean, default: false
      },
      pulldown: {
        type: Boolean, default: false
      },
      listenScroll: {
        type: Boolean, default: false
      },
      refreshDelay: {
        type: Number, default: 20
      },
      data: {
        type: Array, default: null
      }
    },
    methods: {
      _initScroll(){
        if (!this.$refs.wrapper) {
          return
        }
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: this.click,
          probeType: this.probeType,
          scrollX: this.scrollX
        })
        if (this.listenScroll){
            this.scroll.on('scroll',(pos)=>{
                this.$emit('scroll',pos)
            })
        }
        if(this.pullup){
            this.scroll.on('scrollEnd',()=>{
                if (this.scroll.y<=this.scroll.maxScrollY+50){
                    this.$emit('scrollToEnd')
                }
            })
        }
        if (this.beforeScroll){
            this.scroll.on('beforeScroll',()=>{
                this.$emit('beforeScroll')
            })
        }
      }
    },
    mounted(){
        setTimeout(()=>{
            this._initScroll()
        },20)
    },
    watch:{
        data(){
            setTimeout(()=>{
                this.scroll.refresh()
            },20)
        }
    }
  }
</script>
<style lang="stylus" scoped>
.wrapper
  width 100%
  height 100%
</style>
