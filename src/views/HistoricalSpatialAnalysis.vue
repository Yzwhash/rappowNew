<template>
  <div id="historical-spatial-analysis">
    <el-row>
      <el-col :span="16">
        <el-row>
          <el-col :span="8">
            <div class="tenth-block"></div>
          </el-col>
          <el-col :span="8">
            <div class="tenth-block"></div>
          </el-col>
          <el-col :span="8">
            <div class="tenth-block"></div>
          </el-col>
        </el-row>
        <div class="ninth-block" id="grah1"></div>
      </el-col>
      <el-col :span="8">
        <div class="row no-gutter flex-around">
          <Dialog></Dialog>
        </div>
        <div class="eighth-block"></div>
        <div class="eighth-block"></div>
        <div class="eighth-block"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Dialog from '../components/form/Dialog'
  export default {
    name: "HistoricalSpatialAnalysis",
    components:{
      Dialog
    },
    mounted(){
      this.drawLine();
    },
    methods: {
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('grah1'))
        // 绘制图表
        myChart.setOption({
          tooltip: {},
          xAxis: {
            type: 'category',
            data: this.$store.state.time
          },
          legend: {
            data:['人数']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            name:'人数',
            data: this.$store.state.figure,
            type: 'bar',
            // smooth: true
          }]
        });
      }
    }
  }
</script>

<style scoped>
  #historical-spatial-analysis{
    width: 1175px;
    height: 588px;
    margin-top: 5px;
  }
  .eighth-block{
    background-color: #313546;
    margin: 8px auto 0;
    width: 375px;
    height: 165px;
  }
  .ninth-block{
    background-color: #313546;
    margin: 10px auto 0;
    width: 750px;
    height: 350px;
  }
  .tenth-block{
    background-color: #313546;
    margin: 10px 0 0 15px;
    width: 230px;
    height: 200px;
  }
  .btn2{
    margin-top: 5px;
    background-color: #151E24;
  }

</style>