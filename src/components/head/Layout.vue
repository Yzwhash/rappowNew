<template>
  <div id="layout" class="clear-fix">
    <el-row :gutter="20" style="margin: 0;padding: 0">
      <el-col :span="1">
        <div style="line-height: 50px;padding-left: 10px;padding-top: 5px">
          <img src="../../assets/head/menu.png" width="30" height="20" alt="menu">
        </div>
      </el-col >
      <el-col :span="6":offset="3">
        <div style="font-size: 20px;line-height: 47px;color: whitesmoke">Rappow轨道交通客流预测分析平台</div>
      </el-col >
      <el-col :span="1" :offset="10">
        <Notice></Notice>
      </el-col>
      <el-col :span="1">
        <User></User>
      </el-col>
      <el-col :span="1">
        <Letter></Letter>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Letter from "./Letter";
  import User from "./User";
  import Notice from "./Notice";

  export default {
    name: "Layout",
    components:{
      Letter,User,Notice
    }
  }
</script>

<style scoped>
  #layout{
    width: 1366px;
    height: 47px;
    border-bottom: 1px solid white;
  }
  .clear-fix:before,
  .clear-fix:after{
    content: "";
    display: table;
    clear: both;
  }
  .clear-fix{
    zoom: 1;
  }

</style>