<template>
  <div id="flow-in-and-out">
    <station-day-dialog></station-day-dialog>
    <single-day-graph></single-day-graph>
  </div>
</template>

<script>
  import StationDayDialog from "../../components/HistoricalSpatialAnalysis/FlowInAndOut/StationDayDialog";
  import SingleDayGraph from "../../components/HistoricalSpatialAnalysis/FlowInAndOut/SingleDayGraph";
  export default {
    name: "FlowInAndOut",
    components:{
      SingleDayGraph,StationDayDialog
    }
  }
</script>

<style scoped>
  #flow-in-and-out{
    width: 1110px;
    height: 570px;
    margin: 20px auto 0;
    background-image: url("../../assets/black.png");
    background-size: 100% 100%;
  }

</style>