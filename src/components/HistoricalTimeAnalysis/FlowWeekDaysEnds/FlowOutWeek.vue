<template>
  <div id="flow-out-week"></div>
</template>

<script>
  export default {
    name: "FlowOutWeek",
    data(){
      return{
        myChart:''
      }
    },
    mounted() {
      this.myChart = this.$echarts.init(document.getElementById('flow-out-week'))
    },
    methods:{
      drawLineWeek(){
        this.myChart.setOption( {
          title:{
            text:'标题',
            textStyle:{
              color:'#fff'
            }
          },
          legend: {
            data: ['工作日', '周末','节假日']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: this.$store.state.data2.hoursOut.hour
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value}/人次'
            }
          },
          series: [
            {
              name: '工作日',
              type: 'line',
              stack: '总量',
              data: this.$store.state.data2.hoursOut.workday
            },
            {
              name: '周末',
              type: 'line',
              stack: '总量',
              data: this.$store.state.data2.hoursOut.weekend
            },
            {
              name: '节假日',
              type: 'line',
              stack: '总量',
              data: this.$store.state.data2.hoursOut.holiday
            }
          ]
        })
      }
    },
    computed:{
      getData(){
        return this.$store.state.data2.hoursOut.workday
      }
    },
    watch:{
      getData(){
        this.drawLineWeek()
      }
    }
  }
</script>

<style scoped>
  #flow-out-week{
    width: 338px;
    height: 190px;
  }
</style>