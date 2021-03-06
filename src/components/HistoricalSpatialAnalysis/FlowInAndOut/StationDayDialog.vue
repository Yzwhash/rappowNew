<template>
  <div id="station-day-dialog">
    <el-button type="info"  @click="dialogVisible = true" size="medium" style="margin-left: 10px;margin-bottom:7px">选择站点和日期</el-button>
    <el-dialog
            title="站点/日期"
            :visible.sync="dialogVisible"
            width="30%">
      <div class="row no-gutter flex-around">
        <select-plu2 @sub-station="stationEvent"></select-plu2>
      </div>
      <select-plu-day @sub-day="dayEvent"></select-plu-day>
      <span></span>
      <div class="row no-gutter flex-around">
        <el-button type="primary" @click="sendContent">确 定</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  import SelectPlu2 from "../../form/SelectPlu2";
  import SelectPluDay from "../../form/SelectPluDay";
  export default {
    name: "StationDayDialog",
    data(){
      return{
        dialogVisible:false,
        station:1,
        day:'2020-1-1'
      }
    },
    components:{
      SelectPlu2,SelectPluDay
    },
    methods:{
      stationEvent(data){
        this.station=data
      },
      dayEvent(data){
        this.day=data
      },
      sendContent(){
        this.dialogVisible = false
        console.log(this.day,this.station)
      }
    }
  }
</script>

<style scoped>

</style>