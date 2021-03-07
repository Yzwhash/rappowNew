<template>
  <div id="flow-od">
    <od-graph></od-graph>
  </div>
</template>

<script>
  import OdGraph from "../../components/HistoricalSpatialAnalysis/FlowOd/OdGraph";
  export default {
    name: "FlowOd",
    components:{
      OdGraph
    }
  }
</script>

<style scoped>
  #flow-od{
    width: 1110px;
    height: 570px;
    margin: 20px auto 0;
    background-image: url("../../assets/black.png");
    background-size: 100% 100%;
  }
</style>