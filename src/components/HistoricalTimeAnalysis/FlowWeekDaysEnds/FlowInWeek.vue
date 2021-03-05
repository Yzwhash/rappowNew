<template>
  <div id="flow-in-week"></div>
</template>

<script>
  export default {
    name: "FlowInWeek",
    data(){
      return{
        myChart:''
      }
    },
    mounted() {
      this.myChart = this.$echarts.init(document.getElementById('flow-in-week'))
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
            data: this.$store.state.data2.hoursIn.hour
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
              data: this.$store.state.data2.hoursIn.workday
            },
            {
              name: '周末',
              type: 'line',
              stack: '总量',
              data: this.$store.state.data2.hoursIn.weekend
            },
            {
              name: '节假日',
              type: 'line',
              stack: '总量',
              data: this.$store.state.data2.hoursIn.holiday
            }
          ]
        })
      }
    },
    computed:{
      watchData(){
        return this.$store.state.data2.hoursIn.workday
      }
    },
    watch:{
      watchData(){
        this.drawLineWeek()
      }
    }
  }
</script>

<style scoped>
  #flow-in-week{
    width: 338px;
    height: 190px;
  }

</style>