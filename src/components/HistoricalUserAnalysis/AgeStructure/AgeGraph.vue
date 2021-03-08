<template>
  <div id="age-graph"></div>
</template>

<script>

  export default {
    name: "AgeGraph",
    data(){
      return{
        myChart:''
      }
    },
    mounted() {
      this.myChart = this.$echarts.init(document.getElementById('age-graph'))
    },
    methods:{
      drawAgeStr(){
        let os_title = this.$store.state.data4.time+'各年龄段人数';
        let os_age = this.$store.state.data4.age;
        let os_agevalue = this.$store.state.data4.flow;
        this.myChart.setOption({
          title: {
            text: os_title,
            x: "2%",
            y: "2%",
            textStyle: {
              color: '#fff',
              fontSize: '20'
            },
          },
          grid: {
            // left: '5%',
            top: '15%',
            bottom: '10%',
            right: '5%'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'none'
            },
            formatter: "{a} :<br/>{b}，共 {c} 人"
          },
          xAxis: {
            data: os_age,
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(45, 140, 240, 0.1)',
                width: 1 //这里是为了突出显示加上的
              }
            },
            axisLabel: {
              textStyle: {
                color: '#999',
                fontSize: 12
              }
            }
          },
          yAxis: [{
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(45, 140, 240, 0.1)',
                width: 1 //这里是为了突出显示加上的
              }
            },
            axisLabel: {
              textStyle: {
                color: '#999'
              }
            },
            splitArea: {
              areaStyle: {
                color: 'rgba(255,255,255,.5)'
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(255, 129, 109, 0.1)',
                width: 1,
                type: 'dashed'
              }
            }
          }],
          series: [{
            name: '年龄阶段',
            type: 'pictorialBar',
            barCategoryGap: '0%',
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            label: {
              show: true,
              position: 'top',
              distance: 15,
              color: '#2D8CF0',
              fontWeight: 'bolder',
              fontSize: 20,
            },
            itemStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: 'rgba(45, 140, 240, .8)' //  0%  处的颜色
                  },
                    {
                      offset: 1,
                      color: 'rgba(45, 140, 240, .1)' //  100%  处的颜色
                    }
                  ],
                  global: false //  缺省为  false
                }
              },
              emphasis: {
                opacity: 1
              }
            },
            data: os_agevalue,
            z: 10
          }]
        })
      }
    },
    computed:{
      getAge(){
        return this.$store.state.data4.age
      }
    },
    watch:{
      getAge(){
        this.drawAgeStr()
      }
    }
  }
</script>

<style scoped>
  #age-graph{
    width: 610px;
    height: 500px;
    margin-left: 20px;
  }

</style>