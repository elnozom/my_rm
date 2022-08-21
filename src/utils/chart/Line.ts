
import { ChartItem, Chart } from 'chart.js'
import DoubleChartUtil from './DoubleChart'
import  {DoubleChart } from './interface';
import i18n from "../../i18n";
export default class Line extends DoubleChartUtil {
    
    constructor(chart: DoubleChart ) {
        super(chart)
    }
    public createChart(ctx: ChartItem) {
        const data = this.chartData
        new Chart(ctx, {
            type: "line",
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
            },
        });
    }

}