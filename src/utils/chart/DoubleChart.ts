import { generateGradient } from '../helpers';
import  {DoubleChartInterface , DoubleChart , SingleChart} from './interface';
import Api from '../axios/Api';
import { ChartItem , Chart} from 'chart.js'
import i18n from "../../i18n";
import SingleChartUtil from './SingleChart';
const Http = Api.getInstance();
export default class DoubleChartUtil extends SingleChartUtil implements DoubleChartInterface {
    data2: number[] = []
    label2:string
    backgroundColor2:string[]
    borderColor2:string
    total2:number =0
    yKey2: string
    constructor(chart: DoubleChart) {
        super({
            url : chart.url,
            xKey : chart.xKey,
            yKey : chart.yKey,
            label : chart.label,
            type : chart.type,
            height : chart.height,
            borderColor : chart.borderColor,
            backgroundColor : chart.backgroundColor,
        })
        this.label2 = chart.label2
        this.yKey2 = chart.yKey2
        this.borderColor2 = chart.borderColor2
        this.backgroundColor2 = chart.backgroundColor2
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
                        this.data2.push(rec[this.yKey2])
                        this.total += rec[this.yKey]
                        this.total2 += rec[this.yKey2]
                    })
                    resolve(data)
                }
            )
        })
    }
    public reset() {
        this.data = []
        this.data2 = []
        this.total = 0
        this.total2 = 0
        this.labels = []
        this.loading = false
    }
    public intiChart(ctx:ChartItem) {
        const gredient = generateGradient(ctx as  CanvasRenderingContext2D , this.backgroundColor)
        const gredient2 = generateGradient(ctx as  CanvasRenderingContext2D , this.backgroundColor2)
        const labels = this.labels;
        const data = {
            labels: labels,
            datasets: [{
                label: this.label,
                data: this.data,
                fill: true,
                borderColor: this.borderColor,
                backgroundColor: gredient,
                tension: 0.4
            } , {
                label: this.label2,
                data: this.data2,
                fill: true,
                borderColor: this.borderColor2,
                backgroundColor: gredient2,
                tension: 0.4
            }
            ]
        }
        const d = 
        {
            type: this.type,
            data,
            options: {
                maintainAspectRatio: false,
                locale: i18n.locale,
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
        }
        new Chart(ctx, d)
    }

}