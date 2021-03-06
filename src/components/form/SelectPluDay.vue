<template>
  <div id="select-plu-day">
    <el-date-picker
            v-model="date"
            type="date"
            @change="submitDay"
            placeholder="选择日期"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd">>
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    name: "SelectPluDay",
    data(){
      return{
        date:''
      }
    },
    methods:{
      submitDay(){
        this.$emit('sub-day',this.date)
      }
    }
  }
</script>

<style scoped>
  #select-plu-day{
    margin: 10px 0 5px 10px;
  }

</style>