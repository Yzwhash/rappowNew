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

const routes = [
  {
    path:'',
    redirect:'/TrafficMonitoring',
    meta: {
      keepAlive: true // 需要被缓存
    }
  },
  {
    path: '/TrafficMonitoring',
    component:TrafficMonitoring,
    meta: {
      keepAlive: true // 需要被缓存
    }
  },
  {
    path: '/FlowMonth',//单月客流
    component: FlowMonth,
    meta: {
      keepAlive: true // 需要被缓存
    }
  },
  {
    path: '/FlowWeekDaysEnds',//工作日客流
    component: FlowWeekDaysEnds,
    meta: {
      keepAlive: true // 需要被缓存
    }
  },
  {
    path: '/MorningAndEvening',//早晚客流
    component: MorningAndEvening,
    meta: {
      keepAlive: true // 需要被缓存
    }
  },
  {
    path: '/IntelligentDecision',
    component: IntelligentDecision
  },
  {
    path: '/SystemSettings',
    component: SystemSettings
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
