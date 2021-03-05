<template>
  <div id="select-plu">
    <at-select v-model="area" placeholder="区域" size="normal" class="btn" @on-change="submitArea()">
      <at-option v-for="(option) in options" :value="option.value">{{option.name}}</at-option>
    </at-select>
  </div>
</template>

<script>
  export default {
    name: "SelectPlu",
    data(){
      return {
        area:'',
      }
    },
    computed:{
      options(){
        let options=[]
        for (let i=0;i<6;i++){
          options.push({
            value:i+1,
            name:"区域"+(i+1)
          })
        }
        options.push({
          value:7,
          name:'全部'
        })
        return options
      }
    },
    methods:{
      submitArea(){
        this.$emit('sub-area',this.area)
      }

    }
  }
</script>

<style scoped>
  .btn{
    width: 80px;
    margin-top: 10px;
  }
</style>