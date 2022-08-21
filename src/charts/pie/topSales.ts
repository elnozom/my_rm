import { generateColors } from '@/utils/helpers';

import {SingleChart } from '@/utils/chart/interface';
import { currentYear , currentMonth} from '@/utils/helpers'


const options ={
    maintainAspectRatio: false,
    plugins:{
        datalabels: {
            formatter: (value: number, categories: { chart: { data: { datasets: { data: any; }[]; }; }; }) => {
                let sum:number = 0;
                let dataArr = categories.chart.data.datasets[0].data;
                dataArr.map((data:number) => {
                    let d = data 
                    sum += d;
                });
                let percentage = (value*100 / sum).toFixed(2)+"%";
                return percentage;
            },
            color: '#fff',
        }
    }
}
const chartData:SingleChart = {
    xKey:'ItemName',
    yKey:'TotalAmount',
    type: 'doughnut',
    label: "top_sales_item",
    height:400,
    options,
    url:`top?date=${currentYear}-${currentMonth}`,
    backgroundColor: generateColors(10),
    borderColor:"#1e90ff",
} 
export default chartData