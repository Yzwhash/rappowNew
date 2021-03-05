<template>
  <div id="flow-month">
    <el-row>
      <el-col :span="6">
        <div class="fist-block">
          <wave-form></wave-form>
        </div>
      </el-col>
      <el-col :span="18">
        <div class="second-block">
          <el-row>
            <peak-value v-for="(item,key) in this.$store.state.data1.line" :value="key" :key="item.item">
              <template v-slot:number>{{item.item}}</template>
              <template v-slot:top-value>{{item.flowAll}}</template>
              <template v-slot:top-month>{{topMonth}}</template>
            </peak-value>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="16">
        <div class="third-block">
          <dialog-month @month-event="updateMonth"></dialog-month>
          <Graph1></Graph1>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="forth-block">
          <vehicles-pictorial-bar></vehicles-pictorial-bar>
        </div>
      </el-col>
    </el-row>
  </div>
  
</template>

<script>
  import DialogMonth from '../../components/HistoricalTimeAnalysis/FlowMonth/DialogMonth'
  import PeakValue from "../../components/HistoricalTimeAnalysis/FlowMonth/PeakValue";
  import VehiclesPictorialBar from "../../components/HistoricalTimeAnalysis/FlowMonth/VehiclesPictorialBar";
  import WaveForm from "../../components/HistoricalTimeAnalysis/FlowMonth/WaveForm";
  import Graph1 from "../../components/HistoricalTimeAnalysis/FlowMonth/Graph1";
  export default {
    name: "FlowMonth",
    components:{
      DialogMonth,PeakValue,VehiclesPictorialBar,WaveForm,Graph1
    },
    data(){
      return{
        topMonth:'2020-1',
      }
    },
    methods:{
      updateMonth(data){
        this.topMonth=data
      }
    },
  }
</script>

<style scoped>
  #flow-month{
    width: 1175px;
    height: 588px;
    margin-top: 5px;
  }
  .fist-block,.second-block,.third-block,.forth-block{
    background-image: url("../../assets/black.png");
    background-size: 100% 100%;
  }
  .fist-block{
    margin: 15px 0 0 50px;
    width: 260px;
    height: 190px;

  }
  .second-block{
    margin: 15px auto 0;
    width: 820px;
    height: 190px;
    padding: 10px 10px 10px 10px;

  }
  .third-block,.forth-block{
    height: 360px;
  }

  .third-block{
    margin: 15px 0 0 50px;
    width: 732px;
  }
  .forth-block{
    margin: 15px auto 0;
    width: 330px;
  }
</style>