<template>
  <div id="dist-graph">

  </div>
</template>

<script>
  export default {
    name: "DistGraph",
    data(){
      return{
        myChart:''
      }
    },
    mounted() {
      this.myChart = this.$echarts.init(document.getElementById('dist-graph'))
    },
    methods:{
      drawBarWeek(){
        this.myChart.setOption({
          title:{
            text:'标题',
            textStyle:{
              color:'#fff'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: this.$store.state.data2.areaFlows.area,
            axisTick: {
              alignWithLabel: true
            }
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
              type: 'bar',
              data: this.$store.state.data2.areaFlows.workday,
              show:true,
              label:{
                normal:{
                  show:true,            //显示数字
                  position: 'top'        //这里可以自己选择位置
                }
              },
            },{
              name: '周末',
              type: 'bar',
              data: this.$store.state.data2.areaFlows.weekend,
              show:true,
              label:{
                normal:{
                  show:true,            //显示数字
                  position: 'top'        //这里可以自己选择位置
                }
              },
            },{
              name: '节假日',
              type: 'bar',
              data: this.$store.state.data2.areaFlows.holiday,
              show:true,
              label:{
                normal:{
                  show:true,            //显示数字
                  position: 'top'        //这里可以自己选择位置
                }
              },
            }
          ]
        })
      }
    },
    computed:{
      watchData(){
        return this.$store.state.data2.areaFlows.workday
      }
    },
    watch:{
      watchData(){
        this.drawBarWeek()
      }
    }
  }
</script>

<style scoped>
  #dist-graph{
    width: 1100px;
    height: 190px;
  }

</style>