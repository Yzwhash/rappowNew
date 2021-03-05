<template>
  <div id="dialog-week">
    <el-button type="info"  @click="dialogVisible = true" size="medium" style="margin-left: 10px;margin-bottom:7px">选择月份</el-button>
    <el-dialog
            title="月份"
            :visible.sync="dialogVisible"
            width="30%">
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
  import SelectPluMonth from "../../form/SelectPluMonth";
  import {requestAll} from '../../../network/requests'
  export default {
    name: "DialogWeek",
    components:{
      SelectPluMonth
    },
    data(){
      return{
        monthDate:'2020-01',
        dialogVisible:false
      }
    },
    mounted() {
      console.log('发送请求')
      this.sendContent()
    },
    methods:{
      dateEvent(data){
        this.monthDate=data
      },
      sendContent(){
        let config={
          url:'/Rappow/flowsWorkdaysServlet',
          params:{
            yearMonth:this.monthDate
          }
        }
        requestAll(config).then(res=>{
          // console.log(res);
          this.dialogVisible=false
          this.$store.commit('upDateWeek',res.data)
        }).catch(err=>{
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
  #dialog-week{
    margin: 5px auto 0;
  }

</style>