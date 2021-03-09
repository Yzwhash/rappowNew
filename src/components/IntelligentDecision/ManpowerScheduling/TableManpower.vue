<template>
  <el-table
          :data="tableData"
          style="width: 100%"
          :header-cell-style="headerStyle()"
          size="small"
          max-height="255"
          :row-style="rowStyle()">
    <el-table-column
            fixed
            prop="name"
            label="姓名"
            width="120">
    </el-table-column>
    <el-table-column
            prop="ID"
            label="工号"
            width="120">
    </el-table-column>
    <el-table-column
            prop="isExist"
            label="是否在岗"
            width="120">
    </el-table-column>
    <el-table-column
            prop="phoneNumber"
            label="联系电话"
            width="120">
    </el-table-column>
    <el-table-column
            prop="position"
            label="位置"
            width="120">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name: "TableManpower",
    data() {
      return {
        tableData: [{
          name:'杨志伟',
          ID:'2018329621240',
          isExist:'否',
          phoneNumber:'13857292632',
          position:'10-414'
        },
          {
            name:'杨志伟',
            ID:'2018329621240',
            isExist:'否',
            phoneNumber:'13857292632',
            position:'10-414'
          },{
            name:'杨志伟',
            ID:'2018329621240',
            isExist:'否',
            phoneNumber:'13857292632',
            position:'10-414'
          },{
            name:'杨志伟',
            ID:'2018329621240',
            isExist:'否',
            phoneNumber:'13857292632',
            position:'10-414'
          }]
      }
    },
    methods:{
      headerStyle(){
        return{
          'background-color':'#2B3F4E',
          'color':'black'
        }
      },
      rowStyle(){
        return{
          'background-color':'#2B3F4E',
          'color':'#3b7ddc'
        }
      }
    }
  }
</script>

<style scoped>

</style>