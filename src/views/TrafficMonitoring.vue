<template>
  <div id="traffic-monitoring">
    <el-row>
      <el-col :span="16">
        <div class="left">
<!--          人数按钮-->
          <div class="row flex-bottom">
            <number-of-people>
              <template v-slot:left>
                <img src="../assets/trafficMonitoring/icon_inflow.png" width="20px" height="16px" alt="icon_inflow">
                <div>进站</div>
              </template>
              <template v-slot:figure>{{number}}</template>
            </number-of-people>
            <number-of-people>
              <template v-slot:left>
                <img src="../assets/trafficMonitoring/icon_outflow.png" width="20px" height="16px" alt="icon_outflow">
                <div>出站</div>
              </template>
              <template v-slot:figure>{{x}}</template>
            </number-of-people>
            <number-of-people>
              <template v-slot:left>
                <img src="../assets/trafficMonitoring/icon_changeflow.png" width="20px" height="16px" alt="icon_changeflow">
                <div>换乘</div>
              </template>
              <template v-slot:figure>{{x}}</template>
            </number-of-people>
            <Dialog></Dialog>
          </div>
          <div class="way"></div>
          <div class="row no-gutter flex-around">
            <div class="small-box1"></div>
            <div class="small-box1"></div>
            <div class="small-box1"></div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="right">
          <div class="small-box"></div>
          <div class="small-box"></div>
          <div class="small-box"></div>
          <div class="small-box"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Dialog from "../components/form/Dialog";
  import NumberOfPeople from "../components/TrafficMonitoring/NumberOfPeople";
  export default {
    name: "TrafficMonitoring",
    components:{
      NumberOfPeople,Dialog
    },
    data(){
      return{
        number:1600,
        x:1000
      }
    },
  }
</script>

<style scoped>
  @import "../assets/css/trafficeMo.css";
  #traffic-monitoring{
    background-image: url("../assets/trafficMonitoring/background2.png");
    background-size: 100% 100%;
    width: 1150px;
    height: 588px;
    margin-top: 6px;
    margin-left: 11px;
  }
  .left,.right{
    height: 588px;
  }

  .way{
    height: 365px;
  }

</style>