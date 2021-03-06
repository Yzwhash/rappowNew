<template>
  <div id="single-day-graph"></div>
</template>

<script>
  export default {
    name: "SingleDayGraph",
    data(){
      return {
        myChart:''
      }
    },
    mounted() {
      this.myChart = this.$echarts.init(document.getElementById('single-day-graph'))
      this.drawTwoInAndOutLine()
    },
    methods:{
      drawTwoInAndOutLine(){
        this.myChart.setOption({
          title:{
            text: '本站点客流量变化',
            textStyle:{
              color:'#fff'
            }
          },
          tooltip: {},
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true,
            emphasis: {
              focus: 'series'
            },
          },{
            data: [1820, 1932, 1901, 1934, 2290, 2330, 2320],
            type: 'line',
            smooth: true,
            emphasis: {
              focus: 'series'
            },
          }]
        })

      }
    }
  }
</script>

<style scoped>
  #single-day-graph{
    width: 1110px;
    height: 520px;
  }

</style>