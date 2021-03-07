<template>
  <div id="age-graph"></div>
</template>

<script>
  import {option} from "../../TestJs/testAge";

  export default {
    name: "AgeGraph",
    data(){
      return{
        myChart:''
      }
    },
    mounted() {
      this.myChart = this.$echarts.init(document.getElementById('age-graph'))
      this.drawAgeStr()
    },
    methods:{
      drawAgeStr(){
        this.myChart.setOption(option)
      }
    }
  }
</script>

<style scoped>
  #age-graph{
    width: 1110px;
    height: 400px;
  }

</style>