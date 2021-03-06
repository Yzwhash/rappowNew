<template>
  <div id="week-day-graph"></div>
</template>

<script>
  export default {
    name: "WeekDayGraph",
    data(){
      return{
        myChart:''
      }
    },
    mounted() {
      this.myChart = this.$echarts.init(document.getElementById('week-day-graph'))
    },
    methods:{
      drawLineAndBar(){
        this.myChart.setOption( {
          title:{
            text:'标题',
            textStyle:{
              color:'#fff'
            }
          },
          toolbox: {
            show: true,
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: this.$store.state.data2.timeDay
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
          series: [
            {
              name: '人次',
              type: 'line',
              smooth: true,
              data: this.$store.state.data2.flowEveryDay,
              show:true,
              label:{
                normal:{
                  show:true,            //显示数字
                  position: 'top'        //这里可以自己选择位置
                }
              },
              markArea: {
                itemStyle: {
                  color: 'rgba(255, 173, 177, 0.4)'
                },
                data: this.$store.state.data2.holidayAndWeek
              }
            }
          ]
        })
      }
    },
    computed:{
      getData(){
        return this.$store.state.data2.holidayAndWeek
      }
    },
    watch:{
      getData(){
        this.drawLineAndBar()
      }
    }
  }
</script>

<style scoped>
  #week-day-graph{
    /*padding: 10px;*/
    margin: 0 auto;
    width: 750px;
    height: 350px;
  }


</style>