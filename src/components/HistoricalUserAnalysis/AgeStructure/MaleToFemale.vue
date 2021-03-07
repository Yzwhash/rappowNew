<template>
  <div id="male-to-female"></div>
</template>

<script>
  import {option} from "../../TestJs/testSex";

  export default {
    name: "MaleToFemale",
    data(){
      return{
        myChart:''
      }
    },
    mounted() {
      this.myChart = this.$echarts.init(document.getElementById('male-to-female'))
      this.drawMaleToFemale()
    },
    methods:{
      drawMaleToFemale(){
        this.myChart.setOption(option)
      }
    }
  }
</script>

<style scoped>
  #male-to-female{
    width: 400px;
    height: 300px;
  }
</style>