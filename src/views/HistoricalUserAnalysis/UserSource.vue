<template>
  <div id="user-source">
<!--    <source-graph></source-graph>-->
  </div>
</template>

<script>
  import SourceGraph from "../../components/HistoricalUserAnalysis/UserSource/SourceGraph";
  export default {
    name: "UserSource",
    components:{
      SourceGraph
    }
  }
</script>

<style scoped>
  #user-source{
    width: 1110px;
    height: 570px;
    margin: 20px auto 0;
    background-image: url("../../assets/black.png");
    background-size: 100% 100%;
  }

</style>