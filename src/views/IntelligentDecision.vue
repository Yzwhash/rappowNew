<template>
  <div id="predictive-analysis">
    <el-row>
      <el-col :span="12">
        <div class="forth-block"></div>
        <div class="forth-block"></div>
        <div class="forth-block"></div>
      </el-col>
      <el-col :span="12">
        <div class="forth-block"></div>
        <div class="forth-block"></div>
        <div class="forth-block"></div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    name: "PredictiveAnalysis"
  }
</script>

<style scoped>
  #predictive-analysis{
    width: 1175px;
    height: 588px;
    margin-top: 5px;
  }
  .forth-block{
    background-color: #313546;
    margin: 10px auto 0;
    width: 530px;
    height: 180px;
  }

</style>