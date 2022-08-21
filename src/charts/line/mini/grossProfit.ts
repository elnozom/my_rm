import {SingleChart } from '@/utils/chart/interface';
import { miniChartOptions } from '@/utils/helpers';
import { currentYear} from '@/utils/helpers'
const chartData:SingleChart = {
    type:'line',
    label: "expenses",
    xKey:'Docdate',
    yKey:'Totalamount',
    height:150,
    url:`expenses?Year=${currentYear}`,
    options:miniChartOptions,
    borderColor:"#fff",
    backgroundColor:["#e9a5b8" , "#e9a5b8"]
} 
export default chartData