<template>
  <div id="wave-form">
    <div style="margin: 0 auto;">
      <div class="header-title" style="margin-left: 15px">序列</div>
      <div class="header-title">月份</div>
      <div class="header-title">波动情况</div>
    </div>
    <div class="scroll">
      <table>
          <tbody>
            <tr v-for="item in tableData">
              <td>{{item.index}}</td>
              <td>{{item.month}}</td>
              <td>{{item.wave}}</td>
            </tr>
          </tbody>
      </table>
     </div>
  </div>
</template>

<script>
  export default {
    name: "WaveForm",
    data(){
      return{
        tableData:[{
          index:1,
          month:'2020-1',
          wave:52213
        },{
          index:2,
          month:'2020-1',
          wave:5
        },{
          index:2,
          month:'2020-1',
          wave:5
        },{
          index:2,
          month:'2020-1',
          wave:5
        },{
          index:2,
          month:'2020-1',
          wave:5
        },{
          index:2,
          month:'2020-1',
          wave:5
        },{
          index:2,
          month:'2020-1',
          wave:5
        },{
          index:2,
          month:'2020-1',
          wave:5
        },{
          index:2,
          month:'2020-1',
          wave:5
        },{
          index:2,
          month:'2020-1',
          wave:5
        },{
          index:2,
          month:'2020-1',
          wave:5
        }]
      }
    }
  }
</script>

<style scoped>

  #wave-form{
    padding: 5px;
  }
  .header-title{
    width: 70px;
    text-align: center;
    color: white;
    display: inline-block;
  }
  .scroll{
    max-height: 130px;
    overflow-y: auto;
  }
  table{
    margin: 0 auto;
    border: none;
    color: white;
    font: 12px arial;
    width:90%;
  }
  thead th{
    width: 30%;
    text-align:center;
    padding-right: 4px;
  }
  table, td, th {
    padding: 0;
    vertical-align: middle;
    text-align:center;
  }
  tbody td{
    width: 50px;
    border-bottom: 1px solid #4FECF0;
  }
</style>