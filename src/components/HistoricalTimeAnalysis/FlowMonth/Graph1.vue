<template>
  <div id="graph1">
  </div>
</template>

<script>
  export default {
    name: "Graph1",
    data(){
      return {
        myChart:''
      }
    },
    mounted() {
      this.myChart = this.$echarts.init(document.getElementById('graph1'))
    },
    methods:{
      drawLine1(){
        this.myChart.setOption({
          title: {
            text: '本月客流量变化',
            textStyle:{
              color:'#fff'
            }
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['进站客流', '出站客流','总客流量']
          },
          toolbox: {
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: this.$store.state.data1.time
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value}/人次'
            }
          },
          series: [
            {
              name: '进站客流',
              type: 'line',
              data: this.$store.state.data1.flowIn,
            },
            {
              name: '出站客流',
              type: 'line',
              data: this.$store.state.data1.flowOut,
            },
            {
              name: '总客流量',
              type: 'line',
              data: this.$store.state.data1.flowAll,
            }
          ]
        })
      }
    },
    computed:{
      getFlowIn(){
        return this.$store.state.data1.flowIn
      }
    },
    watch:{
      getFlowIn(){
        this.drawLine1()
      }
    }
  }
</script>

<style scoped>
  #graph1{
    width: 100%;
    height: 310px;
  }

</style>