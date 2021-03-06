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
    },
    methods:{
      drawTwoInAndOutLine(){
        this.myChart.setOption({
          title:{
            text: this.$store.state.data3.title,
            textStyle:{
              color:'#fff'
            }
          },
          legend: {
            data: ['入站','出站'],
            textStyle:{
              color:'#fff'
            }
          },
          tooltip: {},
          xAxis: {
            type: 'category',
            data: this.$store.state.data3.time
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value}/人次'
            },
            axisPointer: {
              snap: true
            }
          },
          series: [{
            name:'入站',
            data: this.$store.state.data3.flowIn,
            type: 'line',
            smooth: true,
            emphasis: {
              focus: 'series'
            },
          },{
            name:'出站',
            data: this.$store.state.data3.flowOut,
            type: 'line',
            smooth: true,
            emphasis: {
              focus: 'series'
            },
          }]
        })
      }
    },
    computed:{
      watchTwo(){
        return this.$store.state.data3.flowIn
      }
    },
    watch:{
      watchTwo(){
        this.drawTwoInAndOutLine()
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