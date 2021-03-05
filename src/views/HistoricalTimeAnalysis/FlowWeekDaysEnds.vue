<template>
  <div id="flow-week-days-ends">
    <div class="fifth-block">
        <dist-graph></dist-graph>
    </div>
    <el-row style="padding: 0;margin: 0">
      <el-col :span="16">
        <div class="sixth-block">
          <dialog-week></dialog-week>
          <week-day-graph></week-day-graph>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="seventh-block"><flow-in-week></flow-in-week></div>
        <div class="seventh-block"><flow-out-week></flow-out-week></div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  import WeekDayGraph from "../../components/HistoricalTimeAnalysis/FlowWeekDaysEnds/WeekDayGraph";
  import DialogWeek from "../../components/HistoricalTimeAnalysis/FlowWeekDaysEnds/DialogWeek";
  import DistGraph from "../../components/HistoricalTimeAnalysis/FlowWeekDaysEnds/DistGraph";
  import FlowOutWeek from "../../components/HistoricalTimeAnalysis/FlowWeekDaysEnds/FlowOutWeek";
  import FlowInWeek from "../../components/HistoricalTimeAnalysis/FlowWeekDaysEnds/FlowInWeek";
  export default {
    name: "FlowWeekDaysEnds",
    components:{
      WeekDayGraph,DialogWeek,DistGraph,FlowOutWeek,FlowInWeek
    }
  }
</script>

<style scoped>
  #flow-week-days-ends{
    width: 1175px;
    height: 600px;
    margin-top: 5px;
  }
  .fifth-block,.sixth-block,.seventh-block{
    background-image: url("../../assets/black.png");
    background-size: 100% 100%;
  }
  .fifth-block{
    width: 1120px;
    height: 190px;
    margin: 10px 0 0 30px;
  }
  .sixth-block{
    width: 750px;
    height: 390px;
    margin: 10px 0 0 30px;
  }
  .seventh-block{
    width: 338px;
    height: 190px;
    margin: 10px 0 0 30px;
  }

</style>