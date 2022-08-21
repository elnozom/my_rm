import {SingleChart } from '@/utils/chart/interface';
import { miniChartOptions } from '@/utils/helpers';



const chartData:SingleChart = {
    xKey:'CompouterName',
    yKey:'TotalCash',
    type: 'bar',
    label: "open_cashtray",
    height:75,
    options:miniChartOptions,
    url:"cashtray/open",
    borderColor:"#f00",
    backgroundColor:["#ffb97f" , "#ffb97f"]
} 
export default chartData