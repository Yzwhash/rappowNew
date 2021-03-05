<template>
  <div id="select-plu2">
    <at-select v-model="station" placeholder="站点" size="normal" class="btn" @on-change="submitStation()">
      <at-option v-for="(option) in options" :value="option.value">{{option.name}}</at-option>
    </at-select>
  </div>
</template>

<script>
  export default {
    name: "SelectPlu",
    data(){
      return {
        station:'',
      }
    },
    computed:{
      options(){
        let options=[]
        for (let i=0;i<186;i++){
          options.push({
            value:i+1,
            name:"站点"+(i+1)
          })
        }
        options.push({
          value:187,
          name:'全部'
        })
        return options
      }
    },
    methods:{
      submitStation(){
        this.$emit('sub-station',this.station)
      }
    }
  }
</script>

<style scoped>
  .btn{
    width: 100px;
    margin-top: 10px;
  }
</style>