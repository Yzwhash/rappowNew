<template>
  <div id="vehicles-pictorial-bar"></div>
</template>

<script>
  export default {
    name: "VehiclesPictorialBar",
    methods:{
      drawPictorialBar(){
        let myChart = this.$echarts.init(document.getElementById('vehicles-pictorial-bar'))
        myChart.setOption({
          title: {
            text: '本月各区域客流量',
            left: 'center',
            y: 9,
            textStyle: {
              color: '#fff',
            }
          },
          backgroundColor: '',
          grid: {
            left: 60,
            top: 30,
            bottom: 5
          },
          tooltip: {
            trigger: 'item',
            textStyle: {
              fontSize: 14
            },
            formatter: '{b0}:{c0}'
          },
          xAxis: {
            splitLine: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              show: false
            },
            axisTick: {
              show: false
            }
          },
          yAxis: [{
            type: 'category',
            inverse: false,
            data: [
              '区域10',
              '区域8',
              '区域7',
              '区域6',
              '区域5',
              '区域4',
              '区域3',
              '区域2',
              '区域1'
            ],
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              margin: -4,
              textStyle: {
                color: '#fff',
                fontSize: 12.25
              }
            }
          },

          ],
          series: [{
            type: 'pictorialBar',
            symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAADYElEQVR4nO2dz0sUYRjHP7tIdAmxQ1LdlhCKMohAIsgiyEuHjkUEFQTlpejS/xCCBB06RBGBBKIG4cGyH0qHBKE9eKyFqBQPRQeNCt06vGNY7bq7szPfeZLnAwuzM+/zgw/DDvMu70wOIVveLscJOwycA44A24CfwAfgKXAbeFVvovlC/o/vuVwuTj+x0FWiYdGbgXvA8RrjHgAXgIVaCbMU3SKr1BhtwEtgZx1jTwI7gG7ga5pNNUO+9pBMuEN9klfYD9xMqZdEsCj6AHAiRtxZYFeyrSSHRdGnYsblCD8jJrEoek8TsbsT6yJhLIrelFFsqlgUPZtRbKpYFP2kidjxxLpIGIuiB4AvMeLmgJGEe0kMi6I/AVdjxPVSx91hVlgUDXAXuEaY16jFMnAJeJhqR01iVTTAdeAYUFxjzBRwCLgl6agJrM51rDAO7AP2EmbxthPO8vfAc2Ams84axLpoCGKLrH1mm8eC6KPAGaAL2Fpj7AZgY7T9DfhRY/wc4eflPmH+OjOynI8uEGbpukXlJ4Dz84V8aWWHcj46q4thFzCNTjJRren2UrlLWPM3WYjuAMYIk/tq2oCx9lK5Q11YLboFGARaxXVX0woMtpfK0uuTWvRFoFNcsxKdhF5kqEX3iuuthbQXtehG/gdMG2kvlm/B1xUuWoSLFmFF9CRwg2TnM4pRzskEc8bGiugR4ArhNjkpJqKcJv51sSJ63eOiRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEWvTHKvs/p1izWu5qvaSCWvTlCvtmgeEUaw5TeUVtpV5SQy16COgBRoHXhMWb3aS7PnAhqjEQ1RwFeuYL+aEUa/5DFmtYHkefOEwQVmcBvKD+FQNvgNN/P+pHiV8MRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEixbhokVYEx3nudGKXE1jTfS6xUWLcNEiXLQIFy3CRYtw0SJctAgXLcJFi3DRIv430eUq2+axJvp7jePPqmzHySXFmuhHwFKVYzNA/6rv/VR/s9BSlMsM1kTPEN4DPkU4I8vAO6APOAgsrhq7GO3ri8aUo5ipKIep1zv9AtipgOACGIrLAAAAAElFTkSuQmCC',
            symbolRepeat: true,
            symbolMargin: '5%',
            symbolClip: 'true',
            symbolSize: 12,
            symbolPosition: 'start',

            label: {
              normal: {
                show: true,
                position: 'insideRight',
                offset: [40, 0],
                color: '#fff',
                formatter: function(params) {
                  return params.value;
                }
              }
            },
            data: this.$store.state.data1.dist
          }]
        })
      }
    },
    computed:{
      getFlowDist(){
        return this.$store.state.data1.dist
      }
    },
    watch:{
      getFlowDist(){
        this.drawPictorialBar()
      }
    }
  }
</script>

<style scoped>
  #vehicles-pictorial-bar{
    height: 360px;
    margin: 15px auto 0;
    width: 330px;
  }
</style>