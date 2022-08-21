import { generateGradient } from '../helpers';
import  {SingleChartInterface , SingleChart } from './interface';
import { ChartTypeRegistry } from 'chart.js';
import Api from '../axios/Api';
import { ChartItem , Chart} from 'chart.js'
import i18n from "../../i18n";
const Http = Api.getInstance();
export default class SingleChartUtil implements SingleChartInterface {
    labels: string[] = []
    data: any[] = []
    chartData:any = {}
    data2: number[] = []
    label: string
    loading:boolean = true
    type: keyof ChartTypeRegistry
    height: number
    url: string
    fill: boolean = false
    options:Object = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        plugins: {
            datalabels: {
               display: false
            }
          }
    }
    total:number =0
    total2:number =0
    xKey: string
    yKey: string
    borderColor: string
    backgroundColor: string[]
    constructor(chart: SingleChart) {
        this.url = chart.url
        this.label = chart.label
        this.xKey = chart.xKey
        this.yKey = chart.yKey
        this.type = chart.type
        this.borderColor = chart.borderColor
        this.backgroundColor = chart.backgroundColor
        this.height = chart.height
        
        if (typeof chart.fill != 'undefined') this.fill = chart.fill
        if (typeof chart.options != 'undefined') this.options = chart.options

    }
    public getData() {
        this.reset()
        return new Promise((resolve) => {
            Http.get<any[]>(this.url)
                .then((res) => {
                    const data = res as unknown as any[]
                    if(data == null) {
                        resolve([])
                        return
                    }
                    data.map((rec: any) => {
                        this.labels.push(rec[this.xKey])
                        this.data.push(rec[this.yKey])
                        this.total += rec[this.yKey]
                    })
                    resolve(data)
                }
            )
        })
    }
    public reset() {
        this.data = []
        this.total = 0
        this.labels = []
        this.loading = false
    }
    public intiChart(ctx:ChartItem) {
        
        const gredient = generateGradient(ctx as  CanvasRenderingContext2D , this.backgroundColor)
        const labels = this.labels;
        const data = {
            labels: labels,
            datasets: [{
                label: this.label,
                data: this.data,
                fill: this.fill,
                borderColor: this.borderColor,
                backgroundColor: this.type == 'doughnut'? this.backgroundColor :gredient,
                tension: 0.4
            }
            ]
        }
        const d = 
        {
            type: this.type,
            data,
            options :this.options
        }
        new Chart(ctx, d)
    }

}

// {
//     spanGaps:true,
//     maintainAspectRatio: false,
    
//     scales: {
//         y: {
//             beginAtZero: true,
//             display: false,

//         },
//         x: {
//             beginAtZero: false,
//             display: false,
//         },
//     },
//     plugins: {
//         legend: {
//           display: false
//         },
        
//             datalabels: {
//                // hide datalabels for all datasets
//                display: false
//             }
          
//       }
    
// },