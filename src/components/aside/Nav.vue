<template>
  <div id="nav">
    <at-menu inline-collapsed width="185px" theme="dark" class="color-font">
      <at-menu-item name="1" to="/TrafficMonitoring"><i class="icon icon-home" ></i> 客流监测</at-menu-item>
      <at-submenu>
        <template slot="title"><i class="icon icon-life-buoy"></i>历史时间分析</template>
        <at-menu-item name="2-1" to="/FlowMonth">单月整体客流波动</at-menu-item>
        <at-menu-item name="2-2" to="/FlowWeekDaysEnds">工作日/周末客流</at-menu-item>
        <at-menu-item name="2-3" to="/MorningAndEvening">早晚高峰客流站点</at-menu-item>
      </at-submenu>
      <at-submenu>
        <template slot="title"><i class="icon icon-life-buoy"></i>历史空间分析</template>
        <at-menu-item name="3-1" to="/FlowInAndOut">各站点出/入站客流</at-menu-item>
        <at-menu-item name="3-2" to="/FlowOd">站点OD客流</at-menu-item>
        <at-menu-item name="3-3" to="/FLowLineSection">线路断面客流量</at-menu-item>
        <at-menu-item name="3-4" to="/TrainCapacityRatio">列车满载率</at-menu-item>
        <at-menu-item name="3-5" to="/FlowDistribution">客流清分</at-menu-item>
      </at-submenu>
      <at-submenu>
        <template slot="title"><i class="icon icon-life-buoy"></i>历史用户分析</template>
        <at-menu-item name="4-1" to="/AgeStructure">用户年龄结构</at-menu-item>
        <at-menu-item name="4-2" to="/UserSource">用户来源地</at-menu-item>
      </at-submenu>
      <at-submenu>
        <template slot="title"><i class="icon icon-life-buoy"></i>预测分析</template>
        <at-menu-item name="5-1" to="/TimeDimension">时间维度</at-menu-item>
        <at-menu-item name="5-2" to="/SpatialDimension">空间维度</at-menu-item>
      </at-submenu>
      <at-submenu>
        <template slot="title"><i class="icon icon icon-home"></i>智能决策</template>
        <at-menu-item name="6-1" to="/ManpowerScheduling">人力排班</at-menu-item>
        <at-menu-item name="6-2" to="/TreatmentProcess">处理流程</at-menu-item>
        <at-menu-item name="6-3" to="/ActivityTimeLine">活动时间线</at-menu-item>
      </at-submenu>
      <at-menu-item name="7" to="/SystemSettings"><i class="icon icon-home"></i>系统设置</at-menu-item>
    </at-menu>
  </div>
</template>

<script>
  export default {
    name: "Nav"
  }
</script>

<style scoped>
  #nav{
    padding-top: 5px;
    background-color: #2C4050;
    height: 610px;
  }
  .color-font{
    border: 1px solid #2C405A;
  }

</style>