<template>
  <div id="flow-diagram"></div>
</template>

<script>
  import {option} from "../../TestJs/TestFlowDiagram";

  export default {
    name: "FlowDiagram",
    data(){
      return{
        myChart:''
      }
    },
    mounted() {
      this.myChart = this.$echarts.init(document.getElementById('flow-diagram'))
      this.drawFlowDiagram()
    },
    methods:{
      drawFlowDiagram(){
        this.myChart.setOption(option)
      }
    }
  }
</script>

<style scoped>
  #flow-diagram{
    width: 480px;
    height: 180px;
  }
</style>