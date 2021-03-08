<template>
  <div id="age-structure">
    <el-row>
      <el-col :span="15">
        <div class="age-block">
          <age-dialog></age-dialog>
          <age-graph></age-graph>
        </div>
      </el-col>
      <el-col :span="9">
        <div class="male-block">
          <male-to-female></male-to-female>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import AgeGraph from "../../components/HistoricalUserAnalysis/AgeStructure/AgeGraph";
  import MaleToFemale from "../../components/HistoricalUserAnalysis/AgeStructure/MaleToFemale";
  import AgeDialog from "../../components/HistoricalUserAnalysis/AgeStructure/AgeDialog";
  export default {
    name: "AgeStructure",
    components:{
      AgeGraph,MaleToFemale,AgeDialog
    }
  }
</script>

<style scoped>
  #age-structure{
    width: 1110px;
    height: 570px;
    margin: 20px auto 0;

  }

  .age-block,.male-block{
    background-image: url("../../assets/black.png");
    background-size: 100% 100%;
  }

  .age-block{
    width: 650px;
    height: 550px;
  }

  .male-block{
    width: 450px;
    height: 430px;
  }
</style>