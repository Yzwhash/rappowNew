<template>
  <div id="morning-and-evening">
    <div class="eighth-block">
      <el-row style="padding: 0;margin: 0">
        <el-col :span="3">
          <top-dialog></top-dialog>
        </el-col>
      </el-row>
      <el-row style="padding: 0;margin: 0">
        <el-col :span="16">
          <thermo-dynamic-chart></thermo-dynamic-chart>
        </el-col>
        <el-col :span="8"></el-col>
      </el-row>

    </div>
    <div class="right-graph">
      <div class="ninth-block">
        <difference-value></difference-value>
      </div>
      <div class="tenth-block">
        <line-site></line-site>
      </div>
    </div>

  </div>
</template>

<script>
  import LineSite from "../../components/HistoricalTimeAnalysis/MorningAndEvening/LineSite";
  import DifferenceValue from "../../components/HistoricalTimeAnalysis/MorningAndEvening/DifferenceValue";
  import TopDialog from "../../components/HistoricalTimeAnalysis/MorningAndEvening/TopDialog";
  import ThermoDynamicChart from "../../components/HistoricalTimeAnalysis/MorningAndEvening/ThermoDynamicChart";
  export default {
    name: "MorningAndEvening",
    components:{
      LineSite,DifferenceValue,TopDialog,ThermoDynamicChart
    }
  }
</script>

<style scoped>
  #morning-and-evening{
    width: 1175px;
    height: 588px;
    margin-top: 20px;
  }
  .eighth-block,.tenth-block,.ninth-block{
    background-image: url("../../assets/black.png");
    background-size: 100% 100%;
  }
  .eighth-block{
    display: inline-block;
    width: 730px;
    height: 580px;
    margin-left: 30px;
  }
  .right-graph{
    margin-left: 20px;
    display: inline-block;
  }
  .ninth-block{
    width: 350px;
    height: 360px;
  }
  .tenth-block{
    margin-top: 10px;
    width: 350px;
    height: 210px;
  }

</style>