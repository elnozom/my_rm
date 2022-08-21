import { ChartTypeRegistry } from 'chart.js';

export enum ChartType {
    Line,
    Bar,
    Pie,
  }
export type SingleChart = {
  url : string
  xKey: string
  yKey:string
  label : string
  fill? : boolean
  options? : Object
  type : keyof ChartTypeRegistry
  height : number
  borderColor : string
  backgroundColor : string[]
}

export type DoubleChart = {
  url : string
  xKey: string
  yKey:string
  yKey2:string
  label : string
  label2 : string
  type :  keyof ChartTypeRegistry
  height : number
  borderColor : string
  borderColor2 : string
  backgroundColor : string[]
  backgroundColor2 : string[]
}

export  interface SingleChartInterface {
    labels: string[]
    chartData:Object
    url:string,
    data: number[]
    label:string
    type:keyof ChartTypeRegistry
    height:number
    total:number
    xKey: string
    yKey: string
    borderColor:string
    backgroundColor:string[]
    createChart?:Function
}
export  interface DoubleChartInterface {
  labels: string[]
  chartData:any
  url:string,
  data: number[]
  data2: number[]
  label:string
  label2:string
  total:number
  total2:number
  borderColor2 : string
  xKey: string
  yKey: string
  yKey2: string
  type:keyof ChartTypeRegistry
  height:number
  intiChart:Function
  borderColor:string
  backgroundColor:string[]
  backgroundColor2:string[]
  createChart?:Function
}


