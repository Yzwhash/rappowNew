<template>
  <div id="age-dialog">
    <el-button type="info"  @click="dialogVisible = true" size="medium" style="margin-left: 10px;margin-bottom:7px">选择月份</el-button>
    <el-dialog
            title="站点/日期"
            :visible.sync="dialogVisible"
            width="30%">
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
  import {requestAll} from "../../../network/requests";
  import SelectPluDay from "../../form/SelectPluDay";
  export default {
    name: "AgeDialog",
    components:{
      SelectPluDay
    },
    data(){
      return{
        dialogVisible:false,
        date:'2020-1-1'
      }
    },
    mounted() {
      this.sendContent()
    },
    methods:{
      dayEvent(data){
        this.date=data
      },
      sendContent(){
        let config={
          url:'/Rappow/usersDiv',
          params:{
            date:this.date
          }
        }
        requestAll(config).then(res=>{
          this.dialogVisible=false
          this.$store.commit('upDateAge', {
            data:res.data,
            time:this.date
          })
        })
      }
    }
  }
</script>

<style scoped>
  #age-dialog{
    margin: 5px auto 0;
  }

</style>