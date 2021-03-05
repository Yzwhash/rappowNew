<template>
  <div id="historical-time-analysis">
    <el-row>
      <el-col :span="8">
        <div class="fist-block"></div>
        <div class="fist-block"></div>
      </el-col>
      <el-col :span="8">
        <div class="second-block"></div>
        <div class="second-block"></div>
        <div class="second-block"></div>
        <div class="second-block"></div>
      </el-col>
      <el-col :span="8">
        <div class="row no-gutter flex-around">
          <Dialog></Dialog>
        </div>
        <div class="third-block"></div>
        <div class="fist-block"></div>
      </el-col>
    </el-row>
  </div>
  
</template>

<script>
  import Dialog from '../components/form/Dialog'
  export default {
    name: "HistoricalTimeAnalysis",
    components:{
      Dialog
    }
  }
</script>

<style scoped>
  #historical-time-analysis{
    width: 1175px;
    height: 588px;
    margin-top: 5px;
  }

  .fist-block{
    background-color: #313546;
    margin: 10px auto 0;
    width: 375px;
    height: 270px;
  }
  .second-block{
    background-color: #313546;
    margin: 10px auto 0;
    width: 375px;
    height: 130px;
  }
  .third-block{
    background-color: #313546;
    margin: 0 auto;
    width: 375px;
    height: 233px;
  }
</style>