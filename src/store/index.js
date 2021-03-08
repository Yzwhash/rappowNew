import Vue from 'vue'
import Vuex from 'vuex'
import el from "element-ui/src/locale/lang/el";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data1:{ //单月客流分析
      time:'',
      flowIn:'',
      flowOut:'',
      flowAll:'',
      dist:[],
      line:[]
    },
    data2:{//工作日和周末客流分析
      holidayAndWeek:'',
      timeDay:'',
      flowEveryDay:'',
      areaFlows:{
        area:'',
        workday:'',
        weekend:'',
        holiday:''
      },
      hoursIn:{
        holiday:'',
        weekend:'',
        workday:'',
        hour:''
      },
      hoursOut:{
        holiday:'',
        weekend:'',
        workday:'',
        hour:''
      },
    },
    data3:{//站点出入客流单日
      time:'',
      flowIn:'',
      flowOut:'',
      title:''
    },
    data4:{//年龄结构
      time:'',
      age:'',
      flow:'',
      genderDiv:{
        manRate:'',
        womanRate:''
      }
    }
  },
  mutations: {
    upDateMonth(state,payload){
      state.data1.time=payload.res1.data.data.date
      state.data1.flowIn=payload.res1.data.data.flowIn
      state.data1.flowOut=payload.res1.data.data.flowOut
      state.data1.flowAll=payload.res1.data.data.flowAll
      let dist=[]
      let line=[]
      for (let i=0;i<18;i++){
        if(i>0 && i<10){
          dist.push(payload.res2.data[i].flowAll)
        }else if(i>=10){
          line.push(payload.res2.data[i])
        }
      }
      state.data1.dist=dist.reverse()
      state.data1.line=line
      console.log(state.data1.dist);
      console.log(state.data1.line);
    },
    upDateWeek(state,payload){
      let holidayAndWeek=[]
      let timeDay=[]
      let flowEveryDay=[]
      // console.log(payload)

      for (let item=0; item<payload.flowsPerDay.length;item++){
        timeDay.push(payload.flowsPerDay[item].date)
        flowEveryDay.push(payload.flowsPerDay[item].flowAll)
        if(payload.flowsPerDay[item].dateType == 2){
          if (item == (payload.flowsPerDay.length-1)){
            holidayAndWeek.push([{
              name:'周末',
              xAxis:payload.flowsPerDay[item].date
            },{
              xAxis:payload.flowsPerDay[item].date
            }])
          }else {
            holidayAndWeek.push([{
              name:'周末',
              xAxis:payload.flowsPerDay[item].date
            },{
              xAxis:payload.flowsPerDay[item+1].date
            }])
          }

        }else if(payload.flowsPerDay[item].dateType == 3){
          if (item == (payload.flowsPerDay.length-1)){
            holidayAndWeek.push([{
              name:'节假日',
              xAxis:payload.flowsPerDay[item].date
            },{
              xAxis:payload.flowsPerDay[item].date
            }])
          }else {
            holidayAndWeek.push([{
              name:'节假日',
              xAxis:payload.flowsPerDay[item].date
            },{
              xAxis:payload.flowsPerDay[item+1].date
            }])
          }
        }
      }
      state.data2.holidayAndWeek=holidayAndWeek
      state.data2.timeDay=timeDay
      state.data2.flowEveryDay=flowEveryDay
      console.log(holidayAndWeek)

      let holidayArea=[]
      let weekendArea=[]
      let workdayArea=[]
      let Area=[]
      // console.log(payload.areaFlows)
      for(let value of payload.areaFlows){
        // console.log(value)
        Area.push(value.area)
        workdayArea.push(value.workday.avgFlowAll)
        weekendArea.push(value.weekend.avgFlowAll)
        holidayArea.push(value.holiday.avgFlowAll)
      }
      state.data2.areaFlows.area=Area
      state.data2.areaFlows.workday=workdayArea
      state.data2.areaFlows.weekend=weekendArea
      state.data2.areaFlows.holiday=holidayArea

      let holiday1=[]
      let weekend1=[]
      let workday1=[]
      let hourIn=[]

      for (let value1 of payload.hours){
        hourIn.push(value1.hour)
        workday1.push(value1.workday.avgFlowIn)
        weekend1.push(value1.weekend.avgFlowIn)
        holiday1.push(value1.holiday.avgFlowIn)
      }
      state.data2.hoursIn.hour=hourIn
      state.data2.hoursIn.workday=workday1
      state.data2.hoursIn.weekend=weekend1
      state.data2.hoursIn.holiday=holiday1

      let holiday2=[]
      let weekend2=[]
      let workday2=[]
      let hourOut=[]

      for (let value2 of payload.hours){
        hourOut.push(value2.hour)
        workday2.push(value2.workday.avgFlowOut)
        weekend2.push(value2.weekend.avgFlowOut)
        holiday2.push(value2.holiday.avgFlowOut)
      }
      state.data2.hoursOut.hour=hourOut
      state.data2.hoursOut.workday=workday2
      state.data2.hoursOut.weekend=weekend2
      state.data2.hoursOut.holiday=holiday2

      console.log(state.data2.holidayAndWeek)
    },
    //站点客流分析
    upDateDay(state,payload){

      let time=[]
      let flowIn=[]
      let flowOut=[]
      for (let item of payload.data.inSta){
        time.push(item.hour)
        flowIn.push(item.flow)
      }
      for (let item of payload.data.outSta){
        flowOut.push(item.flow)
      }
      state.data3.time=time
      state.data3.flowIn=flowIn
      state.data3.flowOut=flowOut
      state.data3.title='Station'+payload.sta+' '+payload.time+'出入站客流情况'
    },
    upDateAge(state,payload){
      let age=[]
      let flow=[]
      for(let item of payload.data.ageDiv){
        age.push(item.age)
        flow.push(item.flow)
      }
      state.data4.time=payload.time
      state.data4.age=age
      state.data4.flow=flow
      state.data4.genderDiv.manRate=payload.data.genderDiv.manRate
      state.data4.genderDiv.womanRate=payload.data.genderDiv.womanRate
      console.log(state.data4.age)
      console.log(state.data4.flow)
    }
  },
  actions: {
  },
  modules: {
  }
})
