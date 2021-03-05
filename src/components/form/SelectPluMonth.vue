<template>
  <div id="select-plu-month">
    <el-date-picker
            v-model="value"
            type="month"
            @change="submitDate"
            placeholder="选择月"
            value-format="yyyy-MM">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    name: "SelectMonth",
    data(){
      return{
        value:''
      }
    },
    methods:{
      submitDate(){
        this.$emit('sub-date',this.value)
      }
    }
  }
</script>

<style scoped>
  #select-plu-month{
    margin: 10px 0 5px 10px;
  }
</style>