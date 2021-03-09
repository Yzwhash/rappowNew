<template>
  <div id="manpower-scheduling">
    <el-row>
      <el-col :span="14">
        <div class="map-block"></div>
      </el-col>
      <el-col :span="10">
        <div class="pie-block" style="padding-left: 20px"><pie-graph></pie-graph></div>
        <div class="pie-block" style="padding: 10px"><table-manpower></table-manpower></div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  import PieGraph from "../../components/IntelligentDecision/ManpowerScheduling/PieGraph";
  import MapGraph from "../../components/IntelligentDecision/ManpowerScheduling/MapGraph";
  import TableManpower from "../../components/IntelligentDecision/ManpowerScheduling/TableManpower";
  export default {
    name: "ManpowerScheduling",
    components:{
      PieGraph,MapGraph,TableManpower
    }
  }
</script>

<style scoped>
  #manpower-scheduling{
    margin: 20px;
    width: 1100px;
    height: 560px;
  }
  .map-block,.pie-block{
    background-size: 100% 100%;
    background-image: url("../../assets/black.png");
  }
  .map-block{
    width: 610px;
    height: 570px;
  }
  .pie-block{
    width: 480px;
    height: 275px;
    margin-bottom: 15px;
  }

</style>