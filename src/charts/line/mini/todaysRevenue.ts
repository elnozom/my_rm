import { miniChartOptions } from '@/utils/helpers';
import {SingleChart } from '@/utils/chart/interface';
import { currentYear, currentMonth , currentDay} from '@/utils/helpers'




const chartData:SingleChart = {
    type:'line',
    label: "todays_revenue",
    height:75,
    url:`revenue?Year=${currentYear}&Month=${currentMonth}&Day=${currentDay}`,
    xKey:'Docdate',
    yKey:'Totalamount',
    borderColor:"#fff",
    options:miniChartOptions,
    backgroundColor:["rgba(0, 61, 96, .5)" , "rgba(0, 110, 158 , .5)"]
} 
// const chart = new DoubleChartUtil(chartData)
export default chartData