import DoubleChart from '@/utils/chart/DoubleChart';
import SingleChart from '@/utils/chart/SingleChart';
import Vue from 'vue'
import { currency } from "@/utils/helpers";
import { ChartItem } from "chart.js";
export default Vue.extend({
    props:['chart'],
    data(){
      return {
        total : 0
      }
    },
    methods: {
      getChart(){
        const canvas =this.$refs.chart as HTMLCanvasElement;
        canvas.height = this.chart.height
        const ctx = canvas.getContext("2d") as ChartItem;
        let chartUtil:any
        console.log(typeof this.chart.yKey2 != 'undefined')
        if(typeof this.chart.yKey2 != 'undefined'){
          chartUtil = new DoubleChart(this.chart)
        } else {
          chartUtil = new SingleChart(this.chart)
        }
        chartUtil.getData().then(() => {
          setTimeout(() => {
            chartUtil.intiChart(ctx)
            this.total = chartUtil.total
           } , 30)

        })
        // chartUtil.createChart()
        // console.log(chartUtil)
        return  chartUtil
      },
    currency
  },
  mounted(){
    this.getChart()
  }
  
})