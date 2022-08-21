
import {SingleChart } from '@/utils/chart/interface';
import { currentYear , currentMonth} from '@/utils/helpers'



const chartData:SingleChart = {
    xKey:'Docdate',
    yKey:'Totalamount',
    type: 'bar',
    label: "daily_sales",
    height:400,
    url:`revenue?Year=${currentYear}&Month=${currentMonth}`,
    borderColor:"#3699ff",
    backgroundColor:["rgba(0, 61, 96, .5)" , "rgba(0, 110, 158 , .5)"],
} 
export default chartData