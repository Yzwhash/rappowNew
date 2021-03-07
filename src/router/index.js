import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 客流监测
import TrafficMonitoring from "../views/TrafficMonitoring";
//智能决策
import IntelligentDecision from "../views/IntelligentDecision";
//系统设置
import SystemSettings from "../views/SystemSettings";
//时间客流
import FlowMonth from "../views/HistoricalTimeAnalysis/FlowMonth";
import FlowWeekDaysEnds from "../views/HistoricalTimeAnalysis/FlowWeekDaysEnds";
import MorningAndEvening from "../views/HistoricalTimeAnalysis/MorningAndEvening";
//空间客流
import FlowInAndOut from "../views/HistoricalSpatialAnalysis/FlowInAndOut";
import FlowOd from "../views/HistoricalSpatialAnalysis/FlowOd";
import FLowLineSection from "../views/HistoricalSpatialAnalysis/FLowLineSection";
import TrainCapacityRatio from "../views/HistoricalSpatialAnalysis/TrainCapacityRatio";
import FlowDistribution from "../views/HistoricalSpatialAnalysis/FlowDistribution";
//用户分析
import AgeStructure from "../views/HistoricalUserAnalysis/AgeStructure";
import UserSource from "../views/HistoricalUserAnalysis/UserSource";
//预测分析
import TimeDimension from "../views/PredictiveAnalysis/TimeDimension";
import SpatialDimension from "../views/PredictiveAnalysis/SpatialDimension";

const routes = [
  {
    path:'',
    redirect:'/TrafficMonitoring',
  },
  {
    path: '/TrafficMonitoring',
    component:TrafficMonitoring,
  },
  {
    path: '/FlowMonth',//单月客流
    component: FlowMonth,
  },
  {
    path: '/FlowWeekDaysEnds',//工作日客流
    component: FlowWeekDaysEnds,
  },
  {
    path: '/MorningAndEvening',//早晚高峰客流
    component: MorningAndEvening,
  },
  {
    path: '/FlowInAndOut',//各站点客流流入流出
    component: FlowInAndOut
  },
  {
    path: '/FlowOd',//OD客流分析
    component: FlowOd
  },
  {
    path: '/FLowLineSection',//线路断面客流量
    component: FLowLineSection
  },
  {
    path: '/TrainCapacityRatio',//列车满载率
    component: TrainCapacityRatio
  },
  {
    path:'/FlowDistribution',//客流清分
    component: FlowDistribution
  },
  {
    path: '/AgeStructure',//年龄结构
    component: AgeStructure
  },
  {
    path:'/UserSource',//用户来源地
    component: UserSource
  },
  {
    path:'/TimeDimension',//时间预测
    component: TimeDimension
  },
  {
    path: '/SpatialDimension',//空间预测
    component: SpatialDimension
  },
  {
    path: '/IntelligentDecision',
    component: IntelligentDecision
  },
  {
    path: '/SystemSettings',//系统设置
    component: SystemSettings
  }

]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
