<template>
  <div id="top-dialog">
    <el-button type="info"  @click="dialogVisible = true" size="medium" style="margin-left: 10px;margin-bottom:7px">选择月份</el-button>
    <el-dialog
            title="月份"
            :visible.sync="dialogVisible"
            width="30%">
      <span></span>
      <div class="row no-gutter flex-around">
        <el-button type="primary" @click="sendContent">确 定</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "TopDialog",
    data(){
      return{
        dialogVisible:false
      }
    },
    methods:{
      sendContent(){
        this.dialogVisible = false
      }
    }
  }
</script>

<style scoped>
  #top-dialog{
    margin: 5px auto 0;
    display: inline-block;
  }

</style>