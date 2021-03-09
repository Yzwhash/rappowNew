<template>
  <div id="treatment-process">
    <el-row>
      <el-col :span="14">
        <div class="event-map-block"></div>
      </el-col>
      <el-col :span="10">
        <div class="event-block">
          <flow-diagram></flow-diagram>
        </div>
        <div class="event-block">
          <progress-bar></progress-bar>
        </div>
        <div class="event-block"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ProgressBar from "../../components/IntelligentDecision/TreamentProgress/ProgressBar";
  import FlowDiagram from "../../components/IntelligentDecision/TreamentProgress/FlowDiagram";
  export default {
    name: "TreatmentProcess",
    components:{
      ProgressBar,FlowDiagram
    }
  }
</script>

<style scoped>
  #treatment-process{
    margin: 20px;
    width: 1100px;
    height: 560px;
  }
  .event-block,.event-map-block{
    background-size: 100% 100%;
    background-image: url("../../assets/black.png");
  }
  .event-map-block{
    width: 610px;
    height: 570px;
  }
  .event-block{
    width: 480px;
    height: 180px;
    margin-bottom: 15px;
  }

</style>