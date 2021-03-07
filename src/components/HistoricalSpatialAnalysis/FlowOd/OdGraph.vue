<template>
  <div id="od-graph"></div>
</template>

<script>
  import {option} from "../../TestJs/TestOd";

  export default {
    name: "OdGraph",
    data(){
      return{
        myChart:''
      }
    },
    mounted() {
      this.drawOd()
    },
    methods:{
      drawOd(){
        this.myChart = this.$echarts.init(document.getElementById('od-graph'))
        this.myChart.setOption(option)
      }
    }
  }
</script>

<style scoped>
  #od-graph{
    width: 1110px;
    height: 520px;
  }

</style>