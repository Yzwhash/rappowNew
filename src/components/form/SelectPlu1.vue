<template>
  <div id="select-plu1">
    <at-select v-model="way" placeholder="路线" size="normal" class="btn" @on-change="submitWay()">
      <at-option v-for="(option) in options" :value="option.value">{{option.name}}</at-option>
    </at-select>
  </div>
</template>

<script>
  export default {
    name: "SelectPlu",
    data(){
      return {
        way:'',
      }
    },
    computed:{
      options(){
        let options=[]
        for (let i=0;i<8;i++){
          options.push({
            value:i+1,
            name:"路线"+(i+1)
          })
        }
        options.push({
          value:9,
          name:'全部'
        })
        return options
      }
    },
    methods:{
      submitWay(){
        this.$emit('sub-way',this.way)
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