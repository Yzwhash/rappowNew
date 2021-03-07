<template>
  <div id="age-structure">
<!--    <age-graph></age-graph>-->
    <male-to-female></male-to-female>
  </div>
</template>

<script>
  import AgeGraph from "../../components/HistoricalUserAnalysis/AgeStructure/AgeGraph";
  import MaleToFemale from "../../components/HistoricalUserAnalysis/AgeStructure/MaleToFemale";
  export default {
    name: "AgeStructure",
    components:{
      AgeGraph,MaleToFemale
    }
  }
</script>

<style scoped>
  #age-structure{
    width: 1110px;
    height: 570px;
    margin: 20px auto 0;
    background-image: url("../../assets/black.png");
    background-size: 100% 100%;
  }
</style>