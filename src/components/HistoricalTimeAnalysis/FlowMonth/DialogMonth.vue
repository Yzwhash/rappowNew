<template>
  <div id="dialog-month">
    <el-button type="info"  @click="dialogVisible = true" size="medium" style="margin-left: 10px;margin-bottom:7px">选择基本信息</el-button>
    <el-dialog
            title="区域/路线/站点/月份"
            :visible.sync="dialogVisible"
            width="30%">
      <div class="row no-gutter flex-around">
        <select-plu @sub-area="areaEvent"></select-plu>
        <select-plu1 @sub-way="wayEvent"></select-plu1>
        <select-plu2 @sub-station="stationEvent"></select-plu2>
      </div>
      <select-plu-month @sub-date="dateEvent"></select-plu-month>
      <span></span>
      <div class="row no-gutter flex-around">
        <el-button type="primary" @click="sendContent">确 定</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import SelectPlu from "../../form/SelectPlu";
  import SelectPlu1 from "../../form/SelectPlu1";
  import SelectPlu2 from "../../form/SelectPlu2";
  import SelectPluMonth from "../../form/SelectPluMonth";
  import {requestAll} from "../../../network/requests"

  export default {
    name: "DialogMonth",
    components:{
      SelectPlu,SelectPlu1,SelectPlu2,SelectPluMonth
    },
    data() {
      return {
        dialogVisible: false,
        area:1,
        way:1,
        station:1,
        monthDate:'2020-1'
      };
    },
    mounted() {
      this.sendContent()
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
        this.monthDate=data
      },
      sendContentConfig(){
        let config={
          url:'/Rappow/flowsInMonthServlet',
          params:{
            area:this.area,
            way:this.way,
            station:this.station,
            monthDate:this.monthDate
          }
        }
        return requestAll(config)
      },
      sendContentConfig1(){
        let config1={
          url:'/Rappow/flowsInAllMonthServlet',
          params:{
            yearMonth:this.monthDate
          }
        }
        return requestAll(config1)
      },
      sendContent(){
        let me=this
        this.$axios.all([me.sendContentConfig(),me.sendContentConfig1()])
            .then(me.$axios.spread(function(res1, res2){
              me.dialogVisible=false
              me.$emit('month-event',me.monthDate)
              me.$store.commit('upDateMonth',{
                res1:res1,
                res2:res2
              })
            })).catch(error=>{
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
  #dialog-month{
    margin: 5px auto 0;
  }

</style>