<template>
  <div id="difference-value"></div>
</template>

<script>
  import {option} from "../../TestJs/testJs1";

  export default {
    name: "DifferenceValue",
    data(){
      return{
        myChart:''
      }
    },
    mounted() {
      this.myChart = this.$echarts.init(document.getElementById('difference-value'))
      this.drawTwoWayFigure()
    },
    methods:{
      drawTwoWayFigure(){
        this.myChart.setOption(option)
      }
    }
  }
</script>

<style scoped>
  #difference-value{
    width: 350px;
    height: 360px;
  }
</style>