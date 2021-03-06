import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HistoricalSpatialAnalysis from "../views/HistoricalSpatialAnalysis";
import FlowMonth from "../views/HistoricalTimeAnalysis/FlowMonth";
import IntelligentDecision from "../views/IntelligentDecision";
import TrafficMonitoring from "../views/TrafficMonitoring";
import SystemSettings from "../views/SystemSettings";
import FlowWeekDaysEnds from "../views/HistoricalTimeAnalysis/FlowWeekDaysEnds";
import MorningAndEvening from "../views/HistoricalTimeAnalysis/MorningAndEvening";
//空间客流
import FlowInAndOut from "../views/HistoricalSpatialAnalysis/FlowInAndOut";
import FlowOd from "../views/HistoricalSpatialAnalysis/FlowOd";

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
    path: '/HistoricalSpatialAnalysis',
    component: HistoricalSpatialAnalysis
  }

]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
