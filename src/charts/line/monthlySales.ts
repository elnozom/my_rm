import { DoubleChart } from '@/utils/chart/interface';
import { currentYear } from '@/utils/helpers'

const chartData:DoubleChart = {
    xKey:'Docdate',
    yKey:'Totalamount',
    type: 'line',
    label: "monthly_sales",
    label2: "monthly_profit",
    yKey2:'Profit',
    height:400,
    url:`revenue?Year=${currentYear}`,
    borderColor:"#3699ff",
    borderColor2:"#f00",
    backgroundColor:["rgba(0, 61, 96, .5)" , "rgba(0, 110, 158 , .5)"],
    backgroundColor2:["rgba(0, 120, 96, .5)" , "rgba(0, 250, 158 , .5)"]
} 
export default chartData