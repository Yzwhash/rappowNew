<template>
  <div id="number-of-people">
    <el-row>
      <el-col :span="8" class="span-8">
        <slot name="left"></slot>
      </el-col>
      <el-col :span="16"><div class="span-16"><slot name="figure"></slot><span style="font-size: 12px">人</span></div></el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "NumberOfPeople"
  }
</script>

<style scoped>
  #number-of-people{
    width: 100px;
    background-color: #192230;
    height: 50px;
    margin-left: 30px;
    margin-top: 20px;
    border: 3px solid #4FECF0;
  }
  .span-8{
    padding-top: 5px;
    padding-left: 5px;
    font-size: 12px;
    color: white;
  }
  .span-16{
    font-size: 20px;
    color: #33ADAD;
    line-height: 50px
  }
</style>