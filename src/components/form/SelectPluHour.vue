<template>
  <div id="select-plu3">
    <el-date-picker
            v-model="value1"
            type="datetimerange"
            range-separator=" "
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            style="width: 360px;"
            @change="submitDate"
            format="yyyy-MM-dd HH:mm"
            value-format="yyyy-MM-dd HH:mm">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    name: "SelectPlu3",
    data(){
      return{
        value1:''
      }
    },
    methods:{
      ful(){
        console.log(this.value1)
      },
      submitDate(){
        this.$emit('sub-date',this.value1)
      }
    }
  }
</script>

<style scoped>
  #select-plu3{
    margin: 10px 0 5px 10px;
  }
</style>