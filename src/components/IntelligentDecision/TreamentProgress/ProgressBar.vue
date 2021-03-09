<template>
  <div id="progress-bar">

  </div>
</template>

<script>
  import {option} from "../../TestJs/TestProgressBar";

  export default {
    name: "ProgressBar",
    data(){
      return{
        myChart:''
      }
    },
    mounted() {
      this.myChart = this.$echarts.init(document.getElementById('progress-bar'))
      this.drawProgressBar()
    },
    methods:{
      drawProgressBar(){
        this.myChart.setOption(option)
      }
    }
  }
</script>

<style scoped>
  #progress-bar{
    width: 480px;
    height: 180px;
  }

</style>