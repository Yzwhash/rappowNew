<template>
  <div id="thermo-dynamic-chart">

  </div>
</template>

<script>
  import {option2} from "../../TestJs/testJs2";

  export default {
    name: "ThermoDynamicChart",
    data(){
      return{
        myChart:''
      }
    },
    mounted() {
      this.myChart = this.$echarts.init(document.getElementById('thermo-dynamic-chart'))
      this.drawThermoDynamic()
    },
    methods:{
      drawThermoDynamic(){
        this.myChart.setOption(option2)
      }
    }
  }
</script>

<style scoped>
  #thermo-dynamic-chart{
    margin-left: 20px;
    width: 600px;
    height: 500px;
  }
</style>