<template>
  <div id="system-settings">
    <el-row>
      <el-col :span="12">
        <el-row>
          <el-col :span="12">
            <div class="sixth-block"></div>
          </el-col>
          <el-col :span="12">
            <div class="seventh-block"></div>
            <div class="seventh-block"></div>
          </el-col>
        </el-row>
        <div class="fifth-block"></div>
      </el-col>
      <el-col :span="12">
        <div class="fifth-block"></div>
        <div class="fifth-block"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "SystemSettings"
  }
</script>

<style scoped>
  #system-settings{
    width: 1175px;
    height: 588px;
    margin-top: 5px;
  }
  .fifth-block,.sixth-block,.seventh-block{
    background-image: url("../assets/black.png");
    background-size: 100% 100%;
  }
  .fifth-block{
    margin: 10px auto 0;
    width: 550px;
    height: 270px;
  }
  .sixth-block{
    margin: 10px 0 0 18.375px;
    width: 270px;
    height: 270px;
  }
  .seventh-block{
    margin: 10px auto 0;
    width: 260px;
    height: 130px;
  }


</style>