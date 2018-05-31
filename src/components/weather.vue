<template>
  <div class="movies">
    <routers></routers>
    <div class="header" @click="tabss">
      <span class="name" >{{weathers.citys}}</span>
      <div class="selects" v-show="tabs==false">广州</div>
    </div>
    <div>
      <div class="main" v-if="weathers.realtime">
        <div v-if="weathers.realtime.weather">
          <div class="info">{{weathers.realtime.weather.info}}</div>
          <div class="temperature">{{weathers.realtime.weather.temperature}}</div>
          <div class="wind">
            <span>{{weathers.realtime.wind.direct}}</span>
            <span>{{weathers.realtime.wind.power}}</span>
          </div>
          <div class="pm25">
            <div class="number">{{Number(weathers.pm25.pm25.curPm) +
            Number(weathers.pm25.pm25.level) +
            Number(weathers.pm25.pm25.pm10) +
            Number(weathers.pm25.pm25.pm25)}}
              <span>{{weathers.pm25.pm25.quality}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="everydate" v-for="item,index in weathers.weather">
        <div class="item">{{item.date}}</div>
        <div class="item">{{item.info.day[1]}}</div>
        <div class="item">{{item.info.dawn[2]}}<sup>。</sup>~ {{item.info.day[2]}}<sup>。</sup></div>
      </div>
      <div class="suitable" v-if="weathers.life">
        <div class="suitable-item" @click="suichange(0)">
          <p>穿衣指数</p>
          <p>{{weathers.life.info.chuanyi[0]}}</p>
        </div>
        <div class="suitable-item" @click="suichange(1)">
          <p>紫外线指数</p>
          <p>{{weathers.life.info.ziwaixian[0]}}</p>
        </div>
        <div class="suitable-item" @click="suichange(2)">
          <p>运动指数</p>
          <p>{{weathers.life.info.yundong[0]}}</p>
        </div>
        <div class="suitable-item" @click="suichange(3)">
          <p>洗车指数</p>
          <p>{{weathers.life.info.xiche[0]}}</p>
        </div>
        <div class="suitable-item" @click="suichange(4)">
          <p>感冒指数</p>
          <p>{{weathers.life.info.ganmao[0]}}</p>
        </div>
        <div class="suitable-item" @click="suichange(5)">
          <p>空调指数</p>
          <p>{{weathers.life.info.kongtiao[0]}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import scroll from "../base/scroll.vue"
  import routers from "../base/routers.vue"
  export default {
    name: "movies",
    components: {scroll,routers},
    data(){
      return {
          tabs:true,
        playerOptions: {},
        weathers: {},
      }
    },
    methods: {
      tabss(){
          if(this.tabs==true){
              this.tabs=false
          }else{
              this.tabs=true
          }
      },
      // 点击储存数据
      suichange(num){
        let info = this.weathers.life.info
        if (num == 0) {
          this.$store.state.suitable= info.chuanyi
          this.$store.state.suitable.push('穿衣指数')
        } else if (num == 1) {
          this.$store.state.suitable = info.ziwaixian
          this.$store.state.suitable.push('紫外线指数')
        } else if (num == 2) {
          this.$store.state.suitable = info.yundong
          this.$store.state.suitable.push('运动指数')
        } else if (num == 3) {
          this.$store.state.suitable = info.xiche
          this.$store.state.suitable.push('洗车指数')
        } else if (num == 4) {
          this.$store.state.suitable = info.ganmao
          this.$store.state.suitable.push('感冒指数')
        } else if (num == 5) {
          this.$store.state.suitable = info.kongtiao
          this.$store.state.suitable.push('空调指数')
        }
        this.$router.push('/suitable')
      }
    },
    created(){
      this.$nextTick(() => {
        this.$axios.get('/api/shenzhen').then((res) => {
          res = res.data
          this.weathers = res.data.result
          console.log(res.data.result)
        }).catch((error) => {
          console.log(error)
        })
      })
    }
  }
</script>

<style scoped lang="stylus">
  .movies
    .header
      width 100%
      padding 5px 10px
      height 30px
      color blue
      position fixed
      background white
      border 1px solid rgba(7,17,27,0.1)
      left 0
      top 0
      .selects
        position absolute
        left 0
        top 42px
        width 100%
        height 50px
        background white
        padding 0 10px
      .name
        position absolute
        left 50%
        margin-left -25px
        width 50px
        font-size 20px
    .main
      margin-top 60px
      margin-bottom 30px
      text-align center
      color blue
      .info
        margin 10px 0
        font-size 20px
        font-weight 700
      .temperature
        font-size 100px
        font-family 'Adobe 黑体 Std R'
        font-weight 700
      .wind
        span:first-child
          padding-right 10px
      .pm25
        margin-top 10px
        font-size 15px
        line-height 15px
        .number
          padding 3px 5px
          display inline-block
          width 60px
          border 1px solid blue
          border-radius 10px
    .everydate
      display flex
      .item
        margin 5px 0
        text-align center
        flex 1
        &:nth-child(2)
          color rgba(7.17 .27 .0 .5)
    .suitable
      margin-bottom 50px
      display flex
      width 100%
      overflow auto
      justify-content space-around
      flex-wrap wrap
      .suitable-item
        box-sizing border-box
        margin 10px 0
        border-radius 5px
        height 100px
        text-align center
        line-height 100px
        flex 0 0 30%
        background linear-gradient(#00a0e9, blue)
        color white
        p
          height 30%
</style>
