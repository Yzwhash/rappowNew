<template>
  <div id="dialog">
    <el-button type="info"  @click="dialogVisible = true" size="medium" style="margin-left: 10px;margin-bottom:7px">选择基本信息</el-button>
    <el-dialog
            title="区域/路线/站点/日期"
            :visible.sync="dialogVisible"
            width="30%">
      <div class="row no-gutter flex-around">
        <select-plu @sub-area="areaEvent"></select-plu>
        <select-plu1 @sub-way="wayEvent"></select-plu1>
        <select-plu2 @sub-station="stationEvent"></select-plu2>
      </div>
      <select-plu-hour @sub-date="dateEvent"></select-plu-hour>
      <span></span>
      <div class="row no-gutter flex-around">
        <el-button type="primary" @click="sendContent">确 定</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import SelectPlu from "./SelectPlu";
  import SelectPlu1 from "./SelectPlu1";
  import SelectPlu2 from "./SelectPlu2";
  import SelectPluHour from "./SelectPluHour";
  import {requestAll} from "../../network/requests"

  export default {
    name: "Dialog",
    components:{
      SelectPlu,SelectPlu1,SelectPlu2,SelectPluHour
    },
    data() {
      return {
        dialogVisible: false,
        area:'',
        way:'',
        station:'',
        startDate:'',
        endDate:''
      };
    },
    methods:{
      areaEvent(data){
        this.area=data
      },
      wayEvent(data){
        this.way=data
      },
      stationEvent(data){
        this.station=data
      },
      dateEvent(data){
        this.startDate=data[0]
        this.endDate=data[1]
      },
      sendContent(){
        let config={
          url:'/Rappow/flowsServlet',
          params:{
            area:this.area,
            way:this.way,
            station:this.station,
            startDate:this.startDate,
            endDate:this.endDate
          }
        }

        requestAll(config).then(res=>{
          this.dialogVisible=false
          console.log(res);
        }).catch(error=>{
          this.$message({
            showClose: true,
            message: '请求失败或请求超时',
            type: 'error'
          });
        })

      }
    }
  }
</script>

<style scoped>
  #dialog{
    margin: 5px auto 0;
  }

</style>