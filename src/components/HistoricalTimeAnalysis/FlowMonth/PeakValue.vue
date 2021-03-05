<template>
  <div id="peak-value">
    <el-row>
      <el-col :span="6">
        <img src="../../../assets/historicalTimeAnalysis/icon_metro.png" width="50px" height="50px" alt="icon_metro">
        <div style="color: whitesmoke"><slot name="number"></slot></div>
      </el-col>
      <el-col :span="18">
        <div style="color: whitesmoke;text-align: center;padding-top: 20px">总流量: <slot name="top-value"></slot></div>
        <div style="color: whitesmoke;text-align: center">月份: <slot name="top-month"></slot></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "PeakValue"
  }
</script>

<style scoped>
  #peak-value{
    width: 200px;
    height: 90px;
    display: inline-block;
  }

</style>