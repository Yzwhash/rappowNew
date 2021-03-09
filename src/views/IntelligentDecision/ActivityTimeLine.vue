<template>
  <div id="activity-time-line">
    <el-row>
      <el-col :span="14">
        <div class="activity-map-block"></div>
      </el-col>
      <el-col :span="10">
        <div class="activity-block"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="activity-line">
          <time-line></time-line>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import TimeLine from "../../components/IntelligentDecision/ActivityTimeLine/TimeLine";
  export default {
    name: "ActivityTimeLine",
    components:{
      TimeLine
    }
  }
</script>

<style scoped>
  #activity-time-line{
    margin: 20px;
    width: 1100px;
    height: 560px;
  }
  .activity-map-block,.activity-block,.activity-line{
    background-size: 100% 100%;
    background-image: url("../../assets/black.png");
  }
  .activity-map-block{
    width: 610px;
    height: 400px;
    margin-bottom: 20px;
  }
  .activity-block{
    width: 480px;
    height: 200px;
  }
  .activity-line{
    width: 1120px;
    height: 160px;
  }
</style>