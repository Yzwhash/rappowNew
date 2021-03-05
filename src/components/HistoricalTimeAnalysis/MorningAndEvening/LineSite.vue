<template>
  <div id="line-site"></div>
</template>

<script>
  export default {
    name: "LineSite",
    data(){
      return{
        myChart:''
      }
    },
    mounted() {
      this.myChart = this.$echarts.init(document.getElementById('line-site'))
      this.drawTwoBar()
    },
    methods:{
      drawTwoBar(){
        this.myChart.setOption({
          title:{
            text:'标题',
            textStyle:{
              color:'#fff'
            }
          },
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          },{
            data: [220, 301, 250, 110, 170, 210, 230],
            type: 'bar'
          },]
        })
      }
    }
  }
</script>

<style scoped>
  #line-site{
    width: 350px;
    height: 210px;
  }
</style>